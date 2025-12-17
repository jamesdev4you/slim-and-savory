"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreRecentRecipes from "./MoreRecentRecipes";
import { renderRecipeHTML } from "../../../emails/RecipeEmailTemplate";

import { useRef } from "react";

type Props = {
  post: any;
  recentPosts: any[];
};

export default function SinglePostLayout({ post, recentPosts }: Props) {
  const instructionsRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = () => {
    const recipe = {
      title: post.title,
      ingredients: post.ingredientsText
        .split("\n")
        .map((i: string) => i.trim())
        .filter(Boolean),

      instructions: post.instructions.map((block: any) =>
        block.children.map((c: any) => c.text).join("")
      ),
    };

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.open();
    printWindow.document.write(renderRecipeHTML(recipe));
    printWindow.document.close();

    printWindow.focus();
    printWindow.print();

    setTimeout(() => {
      printWindow.close();
    }, 500);
  };

  const handleJumpToRecipe = () => {
    instructionsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleEmailRecipe = async () => {
    const email = prompt("Enter your email");
    if (!email) return;

    const recipePayload = {
      title: post.title,
      ingredients: post.ingredientsText.split("\n").filter(Boolean),
      instructions: post.instructions.map((b: any) =>
        b.children.map((c: any) => c.text).join("")
      ),
    };

    await fetch("/api/email-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, recipe: recipePayload }),
    });

    alert("Recipe sent!");
  };

  console.log("data", recentPosts);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "10em", md: "1em", lg: "4em" },
      }}
    >
      <Box
        sx={{
          height: "auto",
          paddingTop: { xs: "8em", md: "4em" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          alignItems: "center",
          justifyContent: { md: "start", lg: "start" },
          gap: { md: "3em", lg: "3em", xl: "3em" },
        }}
      >
        <Box
          sx={{
            height: { xs: "30vh", md: "50vh", lg: "100vh" },
            width: { xs: "95%", md: "50vw", lg: "60vw" },
            backgroundImage: `url(${post.mainPicture.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f2f2f2",
          }}
          role="img"
        />
        <Box
          sx={{
            width: { xs: "95%", md: "30vw", lg: "35vw" },
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: { xs: "start", md: "center" },
            flexDirection: "column",
            gap: ".5em",
            pb: { xs: "4em", md: "none" },
          }}
        >
          <Typography variant="h5">{post.category.title}</Typography>
          <Typography variant="h4">{post.title}</Typography>
          <Button
            variant="contained"
            onClick={handleJumpToRecipe}
            sx={{
              width: { md: "60%", lg: "60%" },
              height: "40px",
              fontSize: "14px",
              backgroundColor: "#373e02",
              borderRadius: "15px",
              color: "#d9d9d9", // Dark Green text
              border: "2px solid #d9d9d9", // Dark Green border
              fontWeight: "bold",
              "&:hover": {
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "primary.light", // Optional: subtle hover effect
              },
              marginTop: { xl: "1em", md: "1em" },
              padding: "1em",
            }}
          >
            Jump to Recipe
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: { md: "auto", xl: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: ".5em",
          padding: { md: "4em 0em", lg: "none" },
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "90%", lg: "80%" },
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {" "}
          <Typography variant="h6">
            Recipes {">"} {post.category.title} {">"} {post.title}
          </Typography>
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="h4" sx={{ display: { xs: "none", md: "flex" } }}>
            {post.description}
          </Typography>
          <Typography variant="h6" sx={{ display: { xs: "flex", md: "none" } }}>
            {post.description}
          </Typography>
          <Box
            component="a"
            href={post.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "70%",
                xl: "60%",
              },
              aspectRatio: "16 / 9",
              backgroundImage: `url(${
                post.youtubeThumbnail?.url ?? post.mainPicture.url
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#f2f2f2",
              marginTop: "2em",
              borderRadius: "8px",
              cursor: "pointer",
              display: "block",
            }}
            role="img"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: "1em",
          marginBottom: "3em",
        }}
      >
        <Box
          sx={{
            width: { md: "90%", lg: "80%" },
            height: "100%",
            display: "flex",

            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            backgroundColor: "#F7FFE5",
            gap: "1em",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "35vh", lg: "50vh" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "start",
              gap: "1em",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "30vw",
                backgroundImage: `url(${
                  post.subPic?.url ?? post.mainPicture.url
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#f2f2f2",
              }}
              role="img"
            />

            <Box
              sx={{
                width: { xs: "95%", md: "40vw" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: { xs: "start", md: "start", lg: "center" },
                gap: ".6em",
                paddingTop: "1em",
              }}
            >
              <Typography variant="h5">Author: {post.author.name}</Typography>
              <Typography variant="h3">{post.title}</Typography>
              <Typography variant="h5">Serves: {post.serves}</Typography>
              <Typography variant="h5">Time: 30 minutes.</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  gap: "1em",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handlePrint}
                  sx={{
                    width: { xl: "40%", md: "40%" },
                    height: "40px",
                    fontSize: "14px",
                    backgroundColor: "#373e02",
                    borderRadius: "15px",
                    color: "#d9d9d9", // Dark Green text
                    border: "2px solid #d9d9d9", // Dark Green border
                    fontWeight: "bold",
                    "&:hover": {
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "primary.light", // Optional: subtle hover effect
                    },
                    marginTop: { xl: "1em", md: "1em" },
                  }}
                >
                  Print Reciepe
                </Button>
                <Button
                  variant="contained"
                  onClick={handleEmailRecipe}
                  sx={{
                    width: { xl: "40%", md: "40%" },
                    height: "40px",
                    fontSize: "14px",
                    backgroundColor: "#373e02",
                    borderRadius: "15px",
                    color: "#d9d9d9", // Dark Green text
                    border: "2px solid #d9d9d9", // Dark Green border
                    fontWeight: "bold",
                    "&:hover": {
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "primary.light", // Optional: subtle hover effect
                    },
                    marginTop: { xl: "1em", md: "1em" },
                  }}
                >
                  Email Reciepe
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            ref={instructionsRef}
            className="print-only-recipe"
            sx={{
              width: "80%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "2em",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Ingredients
            </Typography>

            <Box sx={{ pl: 2 }}>
              {post.ingredientsText
                ?.split("\n")
                .filter((line: string) => line.trim() !== "")
                .map((ingredient: string, i: number) => (
                  <Typography key={i}>• {ingredient}</Typography>
                ))}
            </Box>

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              Instructions
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {post.instructions?.map((block: any, index: number) => {
                const text = block.children
                  ?.map((child: any) => child.text)
                  .join("");

                return (
                  <Box key={block._key} sx={{ display: "flex", gap: 2 }}>
                    <Typography fontWeight="bold">{index + 1}.</Typography>
                    <Typography>{text}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <MoreRecentRecipes posts={recentPosts} />
      </Box>
    </Box>
  );
}
