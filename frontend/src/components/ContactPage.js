import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:8000/contacts', formData); // Updated API endpoint
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
      console.error('There was an error saving the contact:', error);
      console.log('Failed to submit contact information. Please try again.');
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        name="contact_fullname"
        value={formData.contact_fullname}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="contact_email"
        value={formData.contact_email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="contact_phone"
        value={formData.contact_phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="contact_address"
        value={formData.contact_address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Service Type"
        name="contact_type"
        value={formData.contact_type}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Service Details"
        name="contact_message"
        value={formData.contact_message}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Contact;
