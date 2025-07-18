import React from "react";
import { Typography, Box, Button, Link } from '@mui/material';
import ContactForm from "./contactForm";
import food1 from '../../assets/food1.jpg';

const HomeContact = () => {
  return (

     <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          background: '#1B1E1E',
          paddingTop: '50px',
          padding: '2em'
        }}
      >
        <Box sx={{width: '40%', height: '70%', display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column'}}>
                                    <Box sx={{width: '90%', height: '40%',               backgroundImage: `url(${food1})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',}}/>
            <Typography variant='h3' sx={{marginTop: '.5em'}}>Don't Be A Stranger</Typography>
            <Typography variant='h5'>Will Respond To All Inquires (:</Typography>
        </Box>
        <Box sx={{width: '50%', gap: '1em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box
            sx={{
              width: {
                xl: '40%',
                lg: '100%',
                md: '100%',
                sm: '90%',
                xs: '100%',
              },
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: {
                xl: '0px',
                lg: '0px',
                md: '50px',
                sm: '50px',
                xs: '50px',
              },
              marginTop: {
                xl: '0px',
                lg: '0px',
                md: '50px',
                sm: '50px',
                xs: '50px',
              },
            }}
          >
            <ContactForm />
          </Box>
          
          </Box>
            </Box>
       

  );
};

export default HomeContact