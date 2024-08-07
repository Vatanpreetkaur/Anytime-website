// import React, { useState } from 'react';
// import { Button, TextField } from '@mui/material';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     contact_fullname: '',
//     contact_email: '',
//     contact_message: '',
//     contact_type: '',
//     contact_phone: '',
//     contact_address: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/contacts', formData); 
//       console.log('Contact saved:', response.data);
//       setFormData({
//         contact_fullname: '',
//         contact_email: '',
//         contact_message: '',
//         contact_type: '',
//         contact_phone: '',
//         contact_address: ''
//       });
//       console.log('Contact information submitted successfully!');
//     } catch (error) {
//       console.error('There was an error saving the contact:', error);
//       console.log('Failed to submit contact information. Please try again.');
//     }
//   };

//   return (
//     <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//       <TextField
//         label="Full Name"
//         name="contact_fullname"
//         value={formData.contact_fullname}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Email"
//         name="contact_email"
//         value={formData.contact_email}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Phone"
//         name="contact_phone"
//         value={formData.contact_phone}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Address"
//         name="contact_address"
//         value={formData.contact_address}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Service Type"
//         name="contact_type"
//         value={formData.contact_type}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Service Details"
//         name="contact_message"
//         value={formData.contact_message}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         multiline
//         rows={4}
//       />
//       <Button variant="contained" color="primary" type="submit">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

// Styled components
const ContactContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    contact_fullname: '',
    contact_email: '',
    contact_message: '',
    contact_type: '',
    contact_phone: '',
    contact_address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/contacts', formData); 
      console.log('Contact saved:', response.data);
      setFormData({
        contact_fullname: '',
        contact_email: '',
        contact_message: '',
        contact_type: '',
        contact_phone: '',
        contact_address: ''
      });
      console.log('Contact information submitted successfully!');
    } catch (error) {
      console.error('There was an error saving the contact:', error.response ? error.response.data : error.message);
      alert('Failed to submit contact information. Please try again.');
    }
  };

  return (
    <ContactContainer>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Request Service
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <FormPaper>
            <Typography variant="h6" component="h2" align="center" gutterBottom>
              Fill Out the Form Below
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <StyledTextField
                label="Full Name"
                name="contact_fullname"
                value={formData.contact_fullname}
                onChange={handleChange}
                variant="outlined"
                required
              />
              <StyledTextField
                label="Email"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                variant="outlined"
                type="email"
                required
              />
              <StyledTextField
                label="Phone"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                label="Address"
                name="contact_address"
                value={formData.contact_address}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                label="Service Type"
                name="contact_type"
                value={formData.contact_type}
                onChange={handleChange}
                variant="outlined"
              />
              <StyledTextField
                label="Service Details"
                name="contact_message"
                value={formData.contact_message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </form>
          </FormPaper>
        </Grid>
      </Grid>
    </ContactContainer>
  );
};

export default Contact;

