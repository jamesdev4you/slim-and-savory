import { client } from "./client";

/** ---- Types ---- */
export type PostRef = {
  title: string;
  value: string; // coalesced slug or title for refs, consistent with your FilterOption style
};

export type ImageField = {
  url: string;
  alt?: string;
};

export type PostCard = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainPicture: ImageField;
  subPic?: ImageField | null;
  category: PostRef;
  ingredientMajor: PostRef;
  dietary: PostRef;
  cookingTime: PostRef;
  author: {
    name: string; // coalesce for safety across author schema variants
  };
  serves?: string | null;
  publishedAt?: string | null;
};

export type IngredientLine = {
  quantity?: string;
  unit?: string;
  item: string;
  note?: string;
};

export type PostDetail = PostCard & {
  ingredients?: IngredientLine[];
  instructions: Array<{
    _key: string;
    _type: "block";
    // allow any extra keys from Portable Text
    [key: string]: any;
  }>;
};

/** ---- GROQ queries ---- */
// Minimal card/list query (use on index/list pages)
const POSTS_QUERY = /* groq */ `
*[_type == "post"] | order(coalesce(publishedAt, _updatedAt) desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  "mainPicture": {
    "url": mainPicture.asset->url,
    "alt": mainPicture.alt
  },
  "subPic": select(
    defined(subPic) => {
      "url": subPic.asset->url,
      "alt": subPic.alt
    }
  ),
  "category": category->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "ingredientMajor": ingredientMajor->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "dietary": dietary->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "cookingTime": cookingTime->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "author": {
    "name": coalesce(author->name, author->title)
  },
  serves,
  publishedAt
}
`;

// Full detail (single post) including ingredients and instructions
const POST_BY_SLUG_QUERY = /* groq */ `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description,
  "mainPicture": {
    "url": mainPicture.asset->url,
    "alt": mainPicture.alt
  },
  "subPic": select(
    defined(subPic) => {
      "url": subPic.asset->url,
      "alt": subPic.alt
    }
  ),
  "category": category->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "ingredientMajor": ingredientMajor->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "dietary": dietary->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "cookingTime": cookingTime->{ 
    title, 
    "value": coalesce(slug.current, title) 
  },
  "author": {
    "name": coalesce(author->name, author->title)
  },
  serves,
  publishedAt,
  // 9: ingredients (structured)
  "ingredients": ingredients[]{
    "quantity": quantity,
    "unit": unit,
    "item": item,
    "note": note
  },
  // 10: instructions (portable text blocks)
  "instructions": instructions
}
`;

// For static/SSG routing helpers (optional)
const POST_SLUGS_QUERY = /* groq */ `
*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}
`;

export async function fetchSinglePost(slug: string) {
  if (!slug) {
    console.error("Slug missing in fetchSinglePost");
    return null;
  }

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      ...,
      "slug": slug.current,

      mainPicture {
        alt,
        "url": asset->url
      },

      category->{
        _id,
        title,
        "slug": slug.current
      },

      author->{
        name,
        image {
          alt,
          "url": asset->url
        }
      },

      tags[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `;

  return client.fetch(query, { slug });
}

/** ---- Fetchers (same “way” as your filter fetchers) ---- */
export async function fetchPosts(): Promise<PostCard[]> {
  return client.fetch<PostCard[]>(POSTS_QUERY);
}

export async function fetchPostBySlug(
  slug: string
): Promise<PostDetail | null> {
  return client.fetch<PostDetail | null>(POST_BY_SLUG_QUERY, { slug });
}

export async function fetchPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
}
