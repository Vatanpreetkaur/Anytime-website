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


// import React, { useState, useEffect } from 'react';
// import { Typography, Box, Button, Grid, Container } from '@mui/material';
// import { styled } from '@mui/system';
// import pimg1 from '../assets/homepage/pex1.jpg';
// import pimg2 from '../assets/homepage/pex2.jpg';
// import pimg3 from '../assets/homepage/pex3.jpg';

// import pimg5 from '../assets/homepage/pex5.jpg';

// import { Parallax } from 'react-parallax';

// const serviceItems = [
//   {
//     title: "Knowledgeable Staff",
//     description: "Our skilled team of specialists is here to support you.",
//     icon: <BookIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
//   {
//     title: "Wide Range of Product Options",
//     description: "For all building types with solutions for doors, loading docks, and security systems.",
//     icon: <ListIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
//   {
//     title: "Custom Solutions",
//     description: "Customized solutions engineered to meet the unique needs of your business.",
//     icon: <CreateIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
//   {
//     title: "Affordable Rates",
//     description: "We offer competitive pricing without compromising on quality.",
//     icon: <AttachMoneyIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
//   {
//     title: "Dependable Service",
//     description: "We are committed to providing reliable and timely services.",
//     icon: <BuildIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
//   {
//     title: "Building Lifecycle Management",
//     description: "Comprehensive management solutions for the entire lifecycle of your building.",
//     icon: <ApartmentIcon style={{ fontSize: 60, color: '#c0392b' }} />, // Replace with the actual icon
//   },
// ];

// const ServicesSection = styled(Box)({
//   textAlign: 'center',
//   padding: '4rem 0',
// });

// const ServiceCard = styled(Box)({
//   padding: '2rem',
//   border: '1px solid #e0e0e0',
//   borderRadius: '8px',
//   transition: 'transform 0.3s ease-in-out',
//   background: '#fff',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//   },
// });

// const ServiceIcon = styled(Box)({
//   marginBottom: '1rem',
// });


// // Array of images
// const images = [pimg1, pimg2, pimg3, pimg5];

// // Styled components
// const HeroContainer = styled(Box)(({ backgroundImage }) => ({
//   position: 'relative',
//   textAlign: 'center',
//   color: 'white',
//   backgroundImage: `url(${backgroundImage})`, // Dynamic background image
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));


// const FeaturesSection = styled(Box)({
//   padding: '4rem 0',
// });

// const FeatureItem = styled(Box)({
//   textAlign: 'center',
//   padding: '1rem',
// });

// export default function HomePage() {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); // Change every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
      
//       <HeroContainer backgroundImage={images[backgroundIndex]}>
//         <Typography variant="h3" component="h" gutterBottom sx={{background: 'rgba(0, 0, 0, 0.8)', padding: '1rem', borderRadius: '8px'}}>
//           Professional Door and Dock Services
//         </Typography>
//         <Typography variant="h5" component="h2" gutterBottom sx={{background: 'rgba(0, 0, 0, 0.8)', padding: '1rem', borderRadius: '8px'}}>
//           Reliable installations and repairs for all types of doors and docks.
//         </Typography>
//         <Button variant="contained" href="#contact" sx={{ marginTop: '2rem' }}>
//           Get a Quote
//         </Button>
//       </HeroContainer>

//       {/* Features Section */}
//       <FeaturesSection>
//         <Container>
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             Our Services
//           </Typography>
//           <Parallax bgImage="/path-to-your-parallax-image.jpg" strength={500}>
//         <ServicesSection>
//           <Container>
//             <Typography variant="h4" component="h2" align="center" gutterBottom>
//               Our Mission
//             </Typography>
//             <Typography variant="body1" align="center" gutterBottom>
//               Our mission is to provide affordable quality service to every customer. From simple maintenance to custom builds, we stand by our commitment to top-notch work, products, and customer service.
//             </Typography>
//             <Grid container spacing={4} justifyContent="center">
//               {serviceItems.map((item, index) => (
//                 <Grid item xs={12} md={4} key={index}>
//                   <ServiceCard>
//                     <ServiceIcon>
//                       {item.icon}
//                     </ServiceIcon>
//                     <Typography variant="h6" component="h3" gutterBottom>
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body1">
//                       {item.description}
//                     </Typography>
//                   </ServiceCard>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </ServicesSection>
//       </Parallax>
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
//               <img
//                 src="/path/to/your/about-us-image.jpg"
//                 alt="About Us"
//                 style={{ width: '100%', borderRadius: '8px' }}
//               />
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
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   style={{ width: '100%', marginBottom: '1em' }}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   style={{ width: '100%', marginBottom: '1em' }}
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   required
//                   style={{ width: '100%', marginBottom: '1em' }}
//                   rows="4"
//                 />
//                 <Button variant="contained" color="primary" type="submit">
//                   Send Message
//                 </Button>
//               </form>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// }





import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Grid, Container, Toolbar, AppBar } from '@mui/material';
import { styled } from '@mui/system';
import pimg1 from '../assets/homepage/pex1.jpg';
import pimg2 from '../assets/homepage/pex2.jpg';
import pimg3 from '../assets/homepage/pex3.jpg';
import pimg5 from '../assets/homepage/pex5.jpg';
import ConstructionIcon from '@mui/icons-material/Construction';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';

// Array of images
const images = [pimg1, pimg2, pimg3, pimg5];

// Styled components
const TopBar = styled(AppBar)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.5rem 1rem',
  position: 'relative',
});

const TopBarContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const PhoneNumber = styled(Typography)({
  fontSize: '1rem',
  marginRight: '1rem',
});

const HeroContainer = styled(Box)(({ backgroundImage }) => ({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)', 
}));

const HeroText = styled(Typography)({
  background: 'rgba(0, 0, 0, 0.7)',
  padding: '1rem',
  borderRadius: '8px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
});

const FeaturesSection = styled(Box)({
  padding: '4rem 0',
});

const FeatureItem = styled(Box)({
  textAlign: 'center',
  padding: '1rem',
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    color: '#1976d2',
  },
});

const AboutUsSection = styled(Box)({
  padding: '4rem 0',
  backgroundColor: '#f5f5f5',
});

const TestimonialCard = styled(Box)({
  padding: '2rem',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '& input, & textarea': {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
});

export default function HomePage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TopBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <TopBarContent>
              <Typography variant="h6">Dock & Door Services</Typography>
              <Box display="flex" alignItems="center">
                <PhoneNumber>(123) 456-7890</PhoneNumber>
                <Button variant="contained" color="secondary" href="#quote">
                  Get a Quote
                </Button>
              </Box>
            </TopBarContent>
          </Toolbar>
        </Container>
      </TopBar>

      <HeroContainer backgroundImage={images[backgroundIndex]}>
        <HeroText variant="h2" component="h1">
          Welcome to Dock & Door Services
        </HeroText>
        <HeroText variant="h5" component="h2" sx={{ marginTop: '1rem' }}>
          Professional Solutions for Residential & Commercial Needs
        </HeroText>
        <Button variant="contained" color="primary" sx={{ marginTop: '2rem' }}>
          Learn More
        </Button>
      </HeroContainer>

       <Container maxWidth="lg">
        {/*}
        <FeaturesSection>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <ConstructionIcon />
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
                <BuildIcon />
                <Typography variant="h6" component="h3">
                  Repair
                </Typography>
                <Typography variant="body1">
                  Expert repair services to keep your doors and docks in top condition.
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureItem>
                <SettingsIcon />
                <Typography variant="h6" component="h3">
                  Maintenance
                </Typography>
                <Typography variant="body1">
                  Regular maintenance to ensure the longevity and safety of your installations.
                </Typography>
              </FeatureItem>
            </Grid>
          </Grid>
        </FeaturesSection> 
        */}
        <FeaturesSection>
    <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <FeatureItem sx={{
          backgroundColor: '#f9f9f9',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)' }
        }}>
          <ConstructionIcon sx={{ fontSize: 40, color: '#1976d2' }} />
          <Typography variant="h6" component="h3" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Installation
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '0.5rem', color: '#666' }}>
            High-quality installation of doors and docks to meet your needs.
          </Typography>
        </FeatureItem>
      </Grid>
      <Grid item xs={12} md={4}>
        <FeatureItem sx={{
          backgroundColor: '#f9f9f9',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)' }
        }}>
          <BuildIcon sx={{ fontSize: 40, color: '#1976d2' }} />
          <Typography variant="h6" component="h3" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Repair
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '0.5rem', color: '#666' }}>
            Expert repair services to keep your doors and docks in top condition.
          </Typography>
        </FeatureItem>
      </Grid>
      <Grid item xs={12} md={4}>
        <FeatureItem sx={{
          backgroundColor: '#f9f9f9',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          '&:hover': { boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)' }
        }}>
          <SettingsIcon sx={{ fontSize: 40, color: '#1976d2' }} />
          <Typography variant="h6" component="h3" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Maintenance
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '0.5rem', color: '#666' }}>
            Regular maintenance to ensure the longevity and safety of your installations.
          </Typography>
        </FeatureItem>
      </Grid>
    </Grid>
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Button variant="contained" color="primary" href="/services">
        Learn More
      </Button>
    </Box>
  </FeaturesSection>


        <AboutUsSection>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ padding: '2rem', lineHeight: '1.6' }}>
            We are a dedicated team providing top-notch door and dock services. Our commitment to quality and customer satisfaction sets us apart. With years of experience and a focus on safety and efficiency, we ensure that every project is completed to the highest standard.
          </Typography>
        </AboutUsSection>

        {/* <Box sx={{ padding: '4rem 0' }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Typography variant="body1">
                  "Excellent service and attention to detail. Highly recommend!"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Jane Doe
                </Typography>
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Typography variant="body1">
                  "Professional team, timely execution. Couldn't be happier with the results."
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - John Smith
                </Typography>
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Typography variant="body1">
                  "Reliable and efficient service. Will definitely use again!"
                </Typography>
                <Typography variant="subtitle2" align="right">
                  - Sarah Lee
                </Typography>
              </TestimonialCard>
            </Grid>
          </Grid>
        </Box> */}

        <Box sx={{ padding: '4rem 0' }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
                If you have any questions or need a quote, feel free to contact us. Our team is here to assist you with all your door and dock service needs.
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> (123) 456-7890
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> info@dockanddoorservices.com
              </Typography>
              <Typography variant="body1">
                <strong>Address:</strong> 1234 Main St, Anytown, USA
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm>
                <Typography variant="h6" component="h3" gutterBottom>
                  Send us a Message
                </Typography>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required rows="4" />
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </ContactForm>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
