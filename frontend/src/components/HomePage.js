// // src/components/HomePage.js
// import React from 'react';
// import { Container, Typography, Box } from '@mui/material';
// import Home from '../Pages/Home'

// const HomePage = () => (
//   <Container>
    
//     hi
//     <Box my={4}>
//       <Typography variant="h2" component="h1" gutterBottom>
//         Welcome to Dock & Door Company
//       </Typography>
//       <Typography variant="h5" component="h2" gutterBottom>
//         Your trusted partner for all dock and door solutions.
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         We provide high-quality dock and door installation, repair, and maintenance services for businesses of all sizes.
//       </Typography>
//     </Box>
//   </Container>
// );

// export default HomePage;

// import React from 'react';
// import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
// import { styled } from '@mui/system';
// import pimg3 from '../assets/homepage/pex3.jpg';
// import pimg2 from '../assets/homepage/pex2.jpg';
// import pimg1 from '../assets/homepage/pex1.jpg';
// import pimg4 from '../assets/homepage/pex4.jpg';
// import pimg5 from '../assets/homepage/pex5.jpg';


// // Styled components
// const HeroContainer = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   textAlign: 'center',
//   color: 'white',
//   backgroundImage: `url(${pimg3})`, // Replace with your image path
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   [theme.breakpoints.down('sm')]: {
//     height: '70vh',
//   },
// }));

// const Overlay = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const HeroText = styled(Box)({
//   textAlign: 'center',
// });

// const CTAButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(1, 4),
//   backgroundColor: '#007BFF',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: '#0056b3',
//   },
// }));

// const FeaturesSection = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(8, 0),
// }));

// const FeatureItem = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   textAlign: 'center',
//   height: '100%',
// }));

// const HomePage = () => {
//   return (
//     <Container disableGutters maxWidth={false}>
//       {/* Hero Section */}
//       <HeroContainer>
//         <Overlay>
//           <HeroText>
//             <Typography variant="h3" component="h2" margin='2rem' gutterBottom>
//               Professional Door and Dock Services Both Residential and Commercial
//             </Typography>
//             <Typography variant="h5" component="h2" gutterBottom>
//               Reliable installations and repairs for all types of doors and docks.
//             </Typography>
//             <CTAButton variant="contained" href="#contact">
//               Get a Quote
//             </CTAButton>
//           </HeroText>
//         </Overlay>
//       </HeroContainer>

//       {/* Features Section */}
//       <FeaturesSection>
//         <Container>
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             Our Services
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="h6" component="h3">
//                   Installation
//                 </Typography>
//                 <Typography variant="body1">
//                   High-quality installation of doors and docks to meet your needs.
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="h6" component="h3">
//                   Repair
//                 </Typography>
//                 <Typography variant="body1">
//                   Expert repair services to ensure your doors and docks are functioning smoothly.
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="h6" component="h3">
//                   Maintenance
//                 </Typography>
//                 <Typography variant="body1">
//                   Regular maintenance to extend the life of your doors and docks.
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//           </Grid>
//         </Container>
//       </FeaturesSection>

//       {/* About Us Section */}
//       <Container>
//         <Box py={8}>
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             About Us
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="body1">
//                 We are a dedicated team providing top-notch door and dock services. Our commitment to quality and customer satisfaction sets us apart.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <img src="/path/to/your/about-us-image.jpg" alt="About Us" style={{ width: '100%', borderRadius: '8px' }} /> {/* Replace with your image */}
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>

//       {/* Testimonials Section */}
//       <Container>
//         <Box py={8} bgcolor="#f5f5f5">
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             What Our Clients Say
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="body1">
//                   "Excellent service and attention to detail. Highly recommend!"
//                 </Typography>
//                 <Typography variant="subtitle2" align="right">
//                   - Jane Doe
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="body1">
//                   "The team was professional and efficient. Our dock looks great!"
//                 </Typography>
//                 <Typography variant="subtitle2" align="right">
//                   - John Smith
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <FeatureItem>
//                 <Typography variant="body1">
//                   "Fast and reliable repair services. Will use again."
//                 </Typography>
//                 <Typography variant="subtitle2" align="right">
//                   - Emily Johnson
//                 </Typography>
//               </FeatureItem>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>

//       {/* Contact Section */}
//       <Container id="contact">
//         <Box py={8}>
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             Contact Us
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="body1">
//                 <strong>Phone:</strong> (123) 456-7890
//                 <br />
//                 <strong>Email:</strong> contact@dockanddoor.com
//                 <br />
//                 <strong>Address:</strong> 123 Dock St, Harbor City, ST 12345
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <form>
//                 <Typography variant="h6" component="h3" gutterBottom>
//                   Send us a Message
//                 </Typography>
//                 <input type="text" placeholder="Your Name" required style={{ width: '100%', marginBottom: '1em' }} />
//                 <input type="email" placeholder="Your Email" required style={{ width: '100%', marginBottom: '1em' }} />
//                 <textarea placeholder="Your Message" required style={{ width: '100%', marginBottom: '1em' }} rows="4" />
//                 <Button variant="contained" color="primary" type="submit">
//                   Send Message
//                 </Button>
//               </form>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </Container>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import pimg1 from '../assets/homepage/pex1.jpg';
import pimg2 from '../assets/homepage/pex2.jpg';
import pimg3 from '../assets/homepage/pex3.jpg';

import pimg5 from '../assets/homepage/pex5.jpg';

// Array of images
const images = [pimg1, pimg2, pimg3, pimg5];

// Styled components
const HeroContainer = styled(Box)(({ backgroundImage }) => ({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  backgroundImage: `url(${backgroundImage})`, // Dynamic background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));


const FeaturesSection = styled(Box)({
  padding: '4rem 0',
});

const FeatureItem = styled(Box)({
  textAlign: 'center',
  padding: '1rem',
});

export default function HomePage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      
      <HeroContainer backgroundImage={images[backgroundIndex]}>
        <Typography variant="h3" component="h3" gutterBottom sx={{background: 'rgba(0, 0, 0, 0.8)', padding: '1rem', borderRadius: '8px'}}>
          Professional Door and Dock Services
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{background: 'rgba(0, 0, 0, 0.8)', padding: '1rem', borderRadius: '8px'}}>
          Reliable installations and repairs for all types of doors and docks.
        </Typography>
        <Button variant="contained" href="#contact" sx={{ marginTop: '2rem' }}>
          Get a Quote
        </Button>
      </HeroContainer>

      {/* Features Section */}
      <FeaturesSection>
        <Container>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="h6" component="h3">
                  Installation
                </Typography>
                <Typography variant="body1">
                  High-quality installation of doors and docks to meet your needs.
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="h6" component="h3">
                  Repair
                </Typography>
                <Typography variant="body1">
                  Expert repair services to ensure your doors and docks are functioning smoothly.
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="h6" component="h3">
                  Maintenance
                </Typography>
                <Typography variant="body1">
                  Regular maintenance to extend the life of your doors and docks.
                </Typography>
              </FeatureItem>
            </Grid>
          </Grid>
        </Container>
      </FeaturesSection>

      {/* About Us Section */}
      <Container>
        <Box py={8}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                We are a dedicated team providing top-notch door and dock services. Our commitment to quality and customer satisfaction sets us apart.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/path/to/your/about-us-image.jpg"
                alt="About Us"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Container>
        <Box py={8} bgcolor="#f5f5f5">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="body1">
                  "Excellent service and attention to detail. Highly recommend!"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Jane Doe
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="body1">
                  "The team was professional and efficient. Our dock looks great!"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - John Smith
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <Typography variant="body1">
                  "Fast and reliable repair services. Will use again."
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Emily Johnson
                </Typography>
              </FeatureItem>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Contact Section */}
      <Container id="contact">
        <Box py={8}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <strong>Phone:</strong> (123) 456-7890
                <br />
                <strong>Email:</strong> contact@dockanddoor.com
                <br />
                <strong>Address:</strong> 123 Dock St, Harbor City, ST 12345
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form>
                <Typography variant="h6" component="h3" gutterBottom>
                  Send us a Message
                </Typography>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  style={{ width: '100%', marginBottom: '1em' }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  style={{ width: '100%', marginBottom: '1em' }}
                />
                <textarea
                  placeholder="Your Message"
                  required
                  style={{ width: '100%', marginBottom: '1em' }}
                  rows="4"
                />
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
