import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const OTP_Form = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(otp);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          label="Enter OTP"
          style={{ width: '300px' }}
          InputProps={{
            style: { color: 'black' },
          }}
          InputLabelProps={{
            style: { color: 'black' },
          }}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button type="submit" variant="contained" style={{ marginTop: '15px', marginLeft: '8px' }}>Submit</Button>
      </div>
    </Box>
  );
};

export default OTP_Form;
