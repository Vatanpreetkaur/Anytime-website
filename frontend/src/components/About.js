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
          At Dock & Door Company, we are dedicated to providing high-quality door and dock solutions. With years of experience, our team is committed to delivering exceptional service and ensuring customer satisfaction.
        </Typography>
        <Typography variant="body1" align="center">
          Our mission is to offer reliable and efficient installation, repair, and maintenance services for all types of doors and docks. We take pride in our work and strive to exceed our clients' expectations with every project.
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
