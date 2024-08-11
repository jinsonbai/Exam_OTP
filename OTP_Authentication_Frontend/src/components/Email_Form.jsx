import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Email_Form = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(email); // Pass email to parent component
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Attach handleSubmit to form submission
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundImage: "url('https://www.shutterstock.com/image-vector/abstract-light-blue-minimal-vector-260nw-2147461373.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          style={{ width: '300px' }}
          InputProps={{
            style: { color: 'black' },
          }}
          InputLabelProps={{
            style: { color: 'black' },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained" style={{ marginTop: '15px', marginLeft: '8px' }}>Submit</Button>
      </div>
    </Box>
  );
};

export default Email_Form;
