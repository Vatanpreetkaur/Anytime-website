// // import React from 'react'

// // const About = () => {
// //   return (
// //     <div>
// //       Meet our Team
// //     </div>
// //   )
// // }

// // export default About


// // import React from 'react';
// // import { Container, Typography, Box, Grid, Paper } from '@mui/material';
// // import { styled } from '@mui/system';

// // // Styled components
// // const AboutContainer = styled(Container)(({ theme }) => ({
// //   padding: theme.spacing(8, 0),
// // }));

// // const TeamMember = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(4),
// //   textAlign: 'center',
// //   height: '100%',
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// // }));

// // const TeamImage = styled('img')({
// //   borderRadius: '50%',
// //   width: '150px',
// //   height: '150px',
// //   objectFit: 'cover',
// // });

// // const About = () => {
// //   return (
// //     <AboutContainer>
// //       <Typography variant="h4" component="h1" align="center" gutterBottom>
// //         About Us
// //       </Typography>
// //       <Box mb={4}>
// //         <Typography variant="h6" component="h2" align="center" paragraph>
// //         Anytime Dock and Door: Exceptional Repair and Maintenance Solutions for Your Business and Home
// // At Anytime Dock and Door, we deliver unparalleled repair and maintenance services designed to keep your residential and commercial properties running smoothly. Our company is dedicated to providing swift, high-quality solutions for all your dock and door needs, ensuring minimal disruption to your operations and daily life.
// // </Typography>
// //         <Typography variant="body1" align="center">
// //         Why We Stand Out:
// // * 24/7 Availability: We offer around-the-clock emergency services, ensuring you have immediate access to expert help whenever you need it.
// // * Highly Skilled Professionals: Our team consists of certified technicians with extensive experience in both residential and commercial systems, guaranteeing precision and reliability in every job.
// // * Comprehensive Maintenance Programs: We provide proactive maintenance solutions tailored to your specific requirements, reducing the risk of unexpected issues and extending the lifespan of your equipment.
// // * Commitment to Excellence: We pride ourselves on delivering exceptional service with a focus on quality, safety, and customer satisfaction.
// // Choose Anytime Dock and Door for a partner who understands the importance of reliability and efficiency in your operations. Our dedicated team is here to ensure that your docks and doors are always in optimal condition, allowing you to focus on what matters most.
// //         </Typography>
// //       </Box>

// //       <Typography variant="h5" component="h2" align="center" gutterBottom>
// //         Meet Our Team
// //       </Typography>

// //       <Grid container spacing={4}>
// //         <Grid item xs={12} md={4}>
// //           <TeamMember>
// //             <TeamImage src="/path/to/member1.jpg" alt="Team Member 1" /> {/* Replace with actual image */}
// //             <Typography variant="h6" component="h3" gutterBottom>
// //               John Doe
// //             </Typography>
// //             <Typography variant="body1">
// //               Lead Technician with 10+ years of experience in door and dock installations.
// //             </Typography>
// //           </TeamMember>
// //         </Grid>
// //         <Grid item xs={12} md={4}>
// //           <TeamMember>
// //             <TeamImage src="/path/to/member2.jpg" alt="Team Member 2" /> {/* Replace with actual image */}
// //             <Typography variant="h6" component="h3" gutterBottom>
// //               Jane Smith
// //             </Typography>
// //             <Typography variant="body1">
// //               Project Manager ensuring smooth operations and customer satisfaction.
// //             </Typography>
// //           </TeamMember>
// //         </Grid>
// //         <Grid item xs={12} md={4}>
// //           <TeamMember>
// //             <TeamImage src="/path/to/member3.jpg" alt="Team Member 3" /> {/* Replace with actual image */}
// //             <Typography variant="h6" component="h3" gutterBottom>
// //               Emily Johnson
// //             </Typography>
// //             <Typography variant="body1">
// //               Customer Service Specialist dedicated to addressing client needs and queries.
// //             </Typography>
// //           </TeamMember>
// //         </Grid>
// //       </Grid>
// //     </AboutContainer>
// //   );
// // };

// // export default About;

// import React from 'react';
// import { Typography, Box, Grid, Container, Paper } from '@mui/material';
// import { styled } from '@mui/system';

// const AboutSection = styled(Box) ({
//   backgroundColor: 'white',
//   padding: '4rem 0',
// });

// const AboutContent = styled(Container)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   textAlign: 'center',
// });

// const AboutTitle = styled(Typography) ({
//   color: "pink",
//   marginBottom: '2rem',
//   fontWeight: 'bold',
// });

// const AboutText = styled(Typography)({
//   color: 'green',
//   lineHeight: 1.8,
//   marginBottom: '1.5rem',
// });

// const CoreValuesSection = styled(Grid) ({
//   marginTop: '3rem',
//   gap: '2rem',
//   textAlign: 'center',
// });

// const CoreValueItem = styled(Paper) ({
//   padding: '2rem',
//   backgroundColor: 'red',
//   color: 'white',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
// });

// const TeamSection = styled(Box)({
//   marginTop: '3rem',
//   textAlign: 'center',
// });

// export default function AboutUs() {
//   return (
//     <AboutSection>
//       <AboutContent maxWidth="md">
//         <AboutTitle variant="h4">About Us</AboutTitle>
        
//         <AboutText variant="body1">
//           We are a leading provider of professional door and dock services, committed to delivering top-notch solutions for both residential and commercial clients. Our team of skilled professionals brings years of experience and expertise to every project, ensuring that we meet and exceed our customers' expectations.
//         </AboutText>

//         <AboutText variant="body1">
//           Our mission is to provide reliable, efficient, and high-quality door and dock installations, repairs, and maintenance services. We strive to build lasting relationships with our clients by offering exceptional service and unmatched craftsmanship.
//         </AboutText>

//         <CoreValuesSection container justifyContent="center">
//           <Grid item xs={12} md={3}>
//             <CoreValueItem>
//               <Typography variant="h6">Quality</Typography>
//               <Typography variant="body2">
//                 We believe in delivering only the best quality work that stands the test of time.
//               </Typography>
//             </CoreValueItem>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <CoreValueItem>
//               <Typography variant="h6">Integrity</Typography>
//               <Typography variant="body2">
//                 We operate with transparency, honesty, and respect in all our interactions.
//               </Typography>
//             </CoreValueItem>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <CoreValueItem>
//               <Typography variant="h6">Customer Satisfaction</Typography>
//               <Typography variant="body2">
//                 Your satisfaction is our priority. We go above and beyond to ensure your needs are met.
//               </Typography>
//             </CoreValueItem>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <CoreValueItem>
//               <Typography variant="h6">Innovation</Typography>
//               <Typography variant="body2">
//                 We continuously improve our services and embrace new technologies to better serve our clients.
//               </Typography>
//             </CoreValueItem>
//           </Grid>
//         </CoreValuesSection>

//         <TeamSection>
//           <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '3rem' }}>
//             Our Team
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
//             Our dedicated team is composed of certified professionals who are passionate about what they do. We invest in ongoing training and development to stay ahead of industry standards and ensure we deliver the best results.
//           </Typography>
//         </TeamSection>
//       </AboutContent>
//     </AboutSection>
//   );
// }

import React from 'react';
import { Typography, Box, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { EmojiObjectsOutlined, SecurityOutlined, ThumbUpOutlined, VerifiedUserOutlined, FlashOnOutlined, FavoriteOutlined } from '@mui/icons-material'; // Import icons
import aboutUsImage from '../assets/anytimeImages/aboutus.svg'

const AboutContainer = styled(Container)({
  padding: '2rem 0',
   // Adjusted max width to fit the layout
  margin: '0 auto',  // Center the content
});

const AboutSection = styled(Box) ({
  backgroundColor: 'white',
  padding: '4rem 0',
});

const AboutContent = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const AboutTitle = styled(Typography) ({
  marginBottom: '2rem',
  fontWeight: 'bold',
  fontSize: '2.5rem',  // Adjusted font size
});

const AboutText = styled(Typography)({
  lineHeight: 1.8,
  marginBottom: '1.5rem',
  maxWidth: '700px',  // Restrict text width
  color: '#666',  // Subtle text color
});

const CoreValuesSection = styled(Grid) ({
  marginTop: '3rem',
  gap: '2rem',
  textAlign: 'center',
});

const CoreValueItem = styled(Paper) ({
  padding: '2rem',
  backgroundColor: '#f9f9f9',  // Light background for the cards
  color: '#333',
  boxShadow: 'none',  // Remove shadow
  borderRadius: '8px',
  textAlign: 'center',
});

const IconWrapper = styled(Box) ({
  marginBottom: '1rem',
  fontSize: '2rem',
  color: '#ff6b35',  // Use a distinct color for icons
});

export default function AboutUs() {
  return (
    <AboutSection>
      <AboutContainer>
  <Typography variant="h" component="h1" align="center" gutterBottom sx={{fontWeight: "bold"}}>
    About Us
  </Typography>
  
  <Box mb={4} display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={4}>
  {/* Left Column */}
  <Box>
    <Typography variant="h4" component="h3" align="left" gutterBottom sx={{ background: 'beige' }}>
      Why We Stand Out
    </Typography>

    <Box component="ul" pl={2} sx={{ listStyleType: 'none' }}>
      <Box component="li" display="flex" alignItems="center" mb={3} sx={{ marginLeft: 2 }}>
        <FlashOnOutlined sx={{ mr: 1, color: '#ff6b35' }} />
        <Typography variant="body1">
          <strong>24/7 Availability:</strong> We offer around-the-clock emergency services, ensuring you have immediate access to expert help whenever you need it.
        </Typography>
      </Box>

      <Box component="li" display="flex" alignItems="center" mb={3} sx={{ marginLeft: 2 }}>
        <VerifiedUserOutlined sx={{ mr: 1, color: '#ff6b35' }} />
        <Typography variant="body1">
          <strong>Highly Skilled Professionals:</strong> Our team consists of certified technicians with extensive experience in both residential and commercial systems, guaranteeing precision and reliability in every job.
        </Typography>
      </Box>

      <Box component="li" display="flex" alignItems="center" mb={3} sx={{ marginLeft: 2 }}>
        <SecurityOutlined sx={{ mr: 1, color: '#ff6b35' }} />
        <Typography variant="body1">
          <strong>Comprehensive Maintenance Programs:</strong> We provide proactive maintenance solutions tailored to your specific requirements, reducing the risk of unexpected issues and extending the lifespan of your equipment.
        </Typography>
      </Box>

      <Box component="li" display="flex" alignItems="center" sx={{ marginLeft: 2 }}>
        <ThumbUpOutlined sx={{ mr: 1, color: '#ff6b35' }} />
        <Typography variant="body1">
          <strong>Commitment to Excellence:</strong> We pride ourselves on delivering exceptional service with a focus on quality, safety, and customer satisfaction.
        </Typography>
      </Box>
    </Box>
  </Box>

  {/* Right Column */}
  <Box display="flex" flexDirection="column" alignItems="center">
    <img src={aboutUsImage} alt="About Us" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />

    <Typography variant="body1" align="left" paragraph mt={2}>
      At Anytime Dock and Door, we deliver unparalleled repair and maintenance services designed to keep your residential and commercial properties running smoothly. Our company is dedicated to providing swift, high-quality solutions for all your dock and door needs, ensuring minimal disruption to your operations and daily life.
    </Typography>
  </Box>
</Box>

</AboutContainer>

      <AboutContent maxWidth="xxl">
        <AboutTitle variant="h4">Our Core Values</AboutTitle>
        
        <AboutText variant="body1">
          We are a leading provider of professional door and dock services, committed to delivering top-notch solutions for both residential and commercial clients. Our team of skilled professionals brings years of experience and expertise to every project, ensuring that we meet and exceed our customers' expectations.
        </AboutText>

        <CoreValuesSection container justifyContent="center">
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><SecurityOutlined /></IconWrapper>
              <Typography variant="h6">Trust</Typography>
              <Typography variant="body2">
                We treat our customer and team like family.
              </Typography>
            </CoreValueItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><VerifiedUserOutlined /></IconWrapper>
              <Typography variant="h6">Integrity</Typography>
              <Typography variant="body2">
                We do it the right way.
              </Typography>
            </CoreValueItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><ThumbUpOutlined /></IconWrapper>
              <Typography variant="h6">Accountability</Typography>
              <Typography variant="body2">
                We keep our promises.
              </Typography>
            </CoreValueItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><EmojiObjectsOutlined /></IconWrapper>
              <Typography variant="h6">Pride</Typography>
              <Typography variant="body2">
                We will not stoop to our competition.
              </Typography>
            </CoreValueItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><FlashOnOutlined /></IconWrapper>
              <Typography variant="h6">Boldness</Typography>
              <Typography variant="body2">
                Never be afraid to stand up when it's needed.
              </Typography>
            </CoreValueItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <CoreValueItem>
              <IconWrapper><FavoriteOutlined /></IconWrapper>
              <Typography variant="h6">Passion</Typography>
              <Typography variant="body2">
                We want the ball.
              </Typography>
            </CoreValueItem>
          </Grid>
        </CoreValuesSection>
        <Typography variant="body1" align="center" mt={3}>
      Choose Anytime Dock and Door for a partner who understands the importance of reliability and efficiency in your operations. Our dedicated team is here to ensure that your docks and doors are always in optimal condition, allowing you to focus on what matters most.
    </Typography>
      </AboutContent>
    </AboutSection>
  );
}

