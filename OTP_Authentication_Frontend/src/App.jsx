import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Email_Form from './components/Email_Form';
import OTP_Form from './components/OTP_Form';
import Welcome from './components/Welcome';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (email) => {
    console.log('Email submitted:', email); // Log the submitted email
    try {
      const response = await axios.post('http://localhost:5000/api/send-otp', { email });
      console.log('API response:', response); // Log the API response
      if (response.status === 200) {
        setOtpSent(true);
        navigate('/otp-form');
      }
    } catch (error) {
      console.error('Error sending OTP:', error); // Log any errors
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Email_Form onSubmit={handleEmailSubmit} />} />
      <Route path="/otp-form" element={<OTP_Form />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default App;
