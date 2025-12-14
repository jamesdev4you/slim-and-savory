"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreRecentRecipes from "./MoreRecentRecipes";
import { useRef } from "react";

type Props = {
  post: any;
  recentPosts: any[];
};

export default function SinglePostLayout({ post, recentPosts }: Props) {
  const instructionsRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = () => {
    const printRoot = document.getElementById("print-root");
    if (!printRoot || !instructionsRef.current) return;

    // Clone ONLY the recipe content
    printRoot.innerHTML = instructionsRef.current.innerHTML;

    window.print();

    // Cleanup after print
    printRoot.innerHTML = "";
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
    <Box>
      <Box
        sx={{
          height: "auto",
          paddingTop: "4em",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "60vw",
            backgroundImage: `url(${post.mainPicture.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f2f2f2",
          }}
          role="img"
        />
        <Box
          sx={{
            width: "35vw",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: ".5em",
          }}
        >
          <Typography variant="h5">{post.category.title}</Typography>
          <Typography variant="h4">{post.title}</Typography>
          <Button
            variant="contained"
            onClick={handleJumpToRecipe}
            sx={{
              width: { xl: "60%", md: "40%" },
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
            Jump to Reciepe
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: ".5em",
        }}
      >
        <Box
          sx={{
            width: "80%",
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
          <Typography variant="h4">{post.description}</Typography>
          <Box
            component="a"
            href={post.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              height: "30vh",
              width: "30vw",
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
            width: "80%",
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
              height: "50vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
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
                width: "40vw",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: ".6em",
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
                    width: { xl: "40%", md: "30%" },
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
                    width: { xl: "40%", md: "30%" },
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
