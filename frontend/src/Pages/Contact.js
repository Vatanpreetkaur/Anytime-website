import React from 'react';
import { Button, TextField } from '@mui/material';


const Contact = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Contact;
