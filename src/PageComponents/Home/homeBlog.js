import React from "react";
import { Typography, Box, Button } from '@mui/material';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';

const HomeBlog = () => {

  const dataList = [
    {
        "Picture": food1,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food2,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food3,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food4,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food1,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food2,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food3,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
    {
        "Picture": food4,
        "Button": <Button variant='contained'>Click Me</Button>,
        "Category": "RECIPE",
        "Date": "2025-07-17",
        "Title": "Orange chicken with a tangy BBQ"
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 2,
      }}
    >
      {/* Top/Header */}
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4">Our Latest Blogs</Typography>
        <Typography variant="h6" color="text.secondary">
          Updated Weekly
        </Typography>
      </Box>

      {/* Blog Flex Layout */}
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {dataList.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '23%',
              minWidth: '230px', // Optional: Prevent squishing on smaller screens
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '2em'
            }}
          >
            {/* Image */}
            <Box
              sx={{
                height: { xl: '50vh', md: '30vh', sm: '30vh', xs: '180px' },
                backgroundImage: `url(${item.Picture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Content */}
            <Box sx={{ pl: 2,pr: 2, pt:1, pb: 1, textAlign: 'left' }}>
              <Typography variant="h6" sx={{ marginTop: '.em' }}>
                {item.Title}
              </Typography>
              {item.Button}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {item.Category} | {item.Date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeBlog;
