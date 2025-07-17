import React from "react";
import { Typography, Box, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import food1 from '../assets/food1.jpg';


const icons = [FacebookIcon, LinkedInIcon, YouTubeIcon, InstagramIcon]

const HomeLearnMore = () => {
  return (
<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '70vh'}}>
        <Box sx={{width: '80%', height: '80%', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0em 3em'}}>
            <Box sx={{width: '70%', padding: '3em 0em', height: {xl: '90%', md: '100%'}, display:'flex', flexDirection: 'column', alignItems:'start', justifyContent:'start',  }}>
                                <Typography variant="h4">Learn More About</Typography>
                                <Typography variant="h2">Suzie Aragon</Typography>
                                <Typography variant="h5"  sx={{marginTop: '10px'}}>Join Suzie Aragon's Newsletter and be the first to</Typography>
                                <Typography variant="h5" sx={{marginTop: '10px'}}>know when her innovative cookbook arrives!</Typography>

                                <Box
                                      sx={{
                                        width: {xl: '40%', md:'60%',},
                                        height: {xl: '15%', md:'20%'},
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '1em'
                                      }}
                                    >
                                      {icons.map((Icon, index) => (
                                        <Icon
                                          key={index}
                                          sx={{
                                            height: '100%',
                                            width: 'auto',
                                            color: 'white',
                                            backgroundColor: 'black',
                                            borderRadius: '50%',
                                            padding: '10px'
                                          }}
                                        />
                                      ))}
                                </Box>

                                
            
                                <Button
                          variant="contained"
                          sx={{
                            width: { xl: '30%', md: '30%' },
                            height: '40px',
                            fontSize: { xl: '1em', md: '1em' },
                            borderRadius: '0px',
                            backgroundColor: '#FFFFFF',
                            color: '#004225', // Dark Green text
                            border: '2px solid #004225', // Dark Green border
                            '&:hover': {
                              backgroundColor: '#F0F0F0', // Optional: subtle hover effect
                            },
                            borderRadius: '15px',
                            marginTop: {xl: '1em', md:'1em'}
                          }}
                        >
                          Learn More
                        </Button>
                          </Box>
                        <Box sx={{width: '40%', height: '90%',               backgroundImage: `url(${food1})`,
                                      backgroundSize: 'cover',
                                      backgroundPosition: 'center',}}/>
                        
        
        </Box>
</Box>
  );
};

export default HomeLearnMore;