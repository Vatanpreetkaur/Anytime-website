// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       Meet our Team
//     </div>
//   )
// }

// export default About


import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const AboutContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const TeamMember = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TeamImage = styled('img')({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
});

const About = () => {
  return (
    <AboutContainer>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" component="h2" align="center" paragraph>
        Anytime Dock and Door: Exceptional Repair and Maintenance Solutions for Your Business and Home
At Anytime Dock and Door, we deliver unparalleled repair and maintenance services designed to keep your residential and commercial properties running smoothly. Our company is dedicated to providing swift, high-quality solutions for all your dock and door needs, ensuring minimal disruption to your operations and daily life.
</Typography>
        <Typography variant="body1" align="center">
        Why We Stand Out:
* 24/7 Availability: We offer around-the-clock emergency services, ensuring you have immediate access to expert help whenever you need it.
* Highly Skilled Professionals: Our team consists of certified technicians with extensive experience in both residential and commercial systems, guaranteeing precision and reliability in every job.
* Comprehensive Maintenance Programs: We provide proactive maintenance solutions tailored to your specific requirements, reducing the risk of unexpected issues and extending the lifespan of your equipment.
* Commitment to Excellence: We pride ourselves on delivering exceptional service with a focus on quality, safety, and customer satisfaction.
Choose Anytime Dock and Door for a partner who understands the importance of reliability and efficiency in your operations. Our dedicated team is here to ensure that your docks and doors are always in optimal condition, allowing you to focus on what matters most.
        </Typography>
      </Box>

      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Meet Our Team
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <TeamMember>
            <TeamImage src="/path/to/member1.jpg" alt="Team Member 1" /> {/* Replace with actual image */}
            <Typography variant="h6" component="h3" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body1">
              Lead Technician with 10+ years of experience in door and dock installations.
            </Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} md={4}>
          <TeamMember>
            <TeamImage src="/path/to/member2.jpg" alt="Team Member 2" /> {/* Replace with actual image */}
            <Typography variant="h6" component="h3" gutterBottom>
              Jane Smith
            </Typography>
            <Typography variant="body1">
              Project Manager ensuring smooth operations and customer satisfaction.
            </Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} md={4}>
          <TeamMember>
            <TeamImage src="/path/to/member3.jpg" alt="Team Member 3" /> {/* Replace with actual image */}
            <Typography variant="h6" component="h3" gutterBottom>
              Emily Johnson
            </Typography>
            <Typography variant="body1">
              Customer Service Specialist dedicated to addressing client needs and queries.
            </Typography>
          </TeamMember>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
