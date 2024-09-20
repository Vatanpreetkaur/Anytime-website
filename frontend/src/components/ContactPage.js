import React from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, Autocomplete } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const serviceOptions = [
  "Residential Service/Repair",
  "Residential Garage Doors",
  "Residential Garage Door Openers",
  "Commercial Doors",
  "Commercial High Performance Doors",
  "Commercial Operators",
  "Commercial Service/Repair",
  "Dock Equipment",
  "Dock Equipment Service/Repair",
  "Other"
];

// Yup validation schema
const validationSchema = Yup.object({
  contact_fullname: Yup.string().required('Full Name is required'),
  contact_email: Yup.string().email('Invalid email format').required('Email is required'),
  contact_message: Yup.string().required('Service Details are required'),
  contact_type: Yup.string().required('Service Type is required'),
  contact_phone: Yup.string().required('Phone is required'),
  contact_address: Yup.string().required('ZIP Code is required')
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      contact_fullname: '',
      contact_email: '',
      contact_message: '',
      contact_type: '',
      contact_phone: '',
      contact_address: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('http://localhost:8000/contacts', values);
        console.log('Contact saved:', response.data);

        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: 'Thank you for contacting us. Our team will get back to you soon!',
          confirmButtonText: 'OK'
        });

        resetForm(); // Reset the form after submission
      } catch (error) {
        console.error('There was an error saving the contact:', error.response ? error.response.data : error.message);
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Failed to submit contact information. Please try again.',
          confirmButtonText: 'OK'
        });
      }
    }
  });

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
            <form action='/' method="post" name="contact" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <StyledTextField
                label="Full Name"
                name="contact_fullname"
                value={formik.values.contact_fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact_fullname && Boolean(formik.errors.contact_fullname)}
                helperText={formik.touched.contact_fullname && formik.errors.contact_fullname}
                variant="outlined"
                required
              />
              <StyledTextField
                label="Email"
                name="contact_email"
                value={formik.values.contact_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact_email && Boolean(formik.errors.contact_email)}
                helperText={formik.touched.contact_email && formik.errors.contact_email}
                variant="outlined"
                type="email"
                required
              />
              <StyledTextField
                label="Phone"
                name="contact_phone"
                value={formik.values.contact_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact_phone && Boolean(formik.errors.contact_phone)}
                helperText={formik.touched.contact_phone && formik.errors.contact_phone}
                variant="outlined"
                required
              />
              <StyledTextField
                label="ZIP Code"
                name="contact_address"
                value={formik.values.contact_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact_address && Boolean(formik.errors.contact_address)}
                helperText={formik.touched.contact_address && formik.errors.contact_address}
                variant="outlined"
                required
              />
              <Autocomplete
                freeSolo
                options={serviceOptions}
                value={formik.values.contact_type}
                name="contact_type"
                onInputChange={(event, newValue) => formik.setFieldValue('contact_type', newValue)}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    label="Service Type"
                    variant="outlined"
                    placeholder={formik.values.contact_type === "Other" ? "Enter Your Service Type Here" : "Choose Service"}
                    error={formik.touched.contact_type && Boolean(formik.errors.contact_type)}
                    helperText={formik.touched.contact_type && formik.errors.contact_type}
                    required
                  />
                )}
              />
              <StyledTextField
                label="Service Details"
                name="contact_message"
                value={formik.values.contact_message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact_message && Boolean(formik.errors.contact_message)}
                helperText={formik.touched.contact_message && formik.errors.contact_message}
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
