"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  post: any;
};

export default function SinglePostLayout({ post }: Props) {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: { xl: "50vh", md: "30vh", sm: "30vh", xs: "180px" },
            backgroundImage: `url(${post.mainPicture.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f2f2f2",
          }}
          role="img"
        />
      </Box>
    </Box>
  );
}
