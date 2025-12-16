"use client";

import React, { useEffect, useState, useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { fetchShopItems } from "@/sanity/shop";

/* ---------- Custom arrows (VISUALLY IDENTICAL) ---------- */
const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    style={{
      position: "absolute",
      left: "0px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#373e02",
      color: "#fff",
      borderRadius: "50%",
      border: "none",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  >
    ‹
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    style={{
      position: "absolute",
      right: "0px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#373e02",
      color: "#fff",
      borderRadius: "50%",
      border: "none",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 10,
    }}
  >
    ›
  </button>
);

const HomeShop = () => {
  const [items, setItems] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function loadItems() {
      const data = await fetchShopItems();
      setItems(data || []);
    }
    loadItems();
  }, []);

  /* ✅ LIMIT TO 5 ITEMS */
  const homeItems = items.slice(0, 5);

  if (!homeItems.length) return null;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3em 0em",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3em",
        }}
      >
        <Typography variant="h2" sx={{ color: "primary.dark" }}>
          Come Shop With Me
        </Typography>

        {/* ---------- Swiper Carousel ---------- */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: "visible",
          }}
        >
          <ArrowLeft onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowRight onClick={() => swiperRef.current?.slideNext()} />

          <Swiper
            modules={[Navigation]}
            loop
            grabCursor
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3, // LG (1280 lives here)
              },
              1600: {
                slidesPerView: 4, // XL
              },
            }}
          >
            {homeItems.map((item) => (
              <SwiperSlide key={item._id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* Clickable card → Amazon affiliate link */}
                  <Box
                    component="a"
                    href={item.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: "70%",
                      maxWidth: "200px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      textDecoration: "none",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "220px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      {item.image?.asset?.url && (
                        <Image
                          src={item.image.asset.url}
                          alt={item.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </Box>

                    <Typography
                      sx={{
                        mt: 1.5,
                        fontSize: "18px",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "primary.main",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* ---------- CTA BUTTON → /shop ---------- */}
        <Button
          component={Link}
          href="/shop"
          variant="contained"
          sx={{
            width: "30%",
            height: "60px",
            backgroundColor: "#373e02",
            color: "#d9d9d9",
            border: "2px solid #d9d9d9",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "primary.light",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomeShop;
