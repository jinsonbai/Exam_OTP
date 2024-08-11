const OTP = require('../models/otpModel');
const transporter = require('../config/mailConfig');
const crypto = require('crypto');

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();

  try {
    // Save OTP to DB
    const newOtp = new OTP({ email, otp });
    await newOtp.save();

    // Send OTP via email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending OTP');
      } else {
        res.send('OTP sent');
      }
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const record = await OTP.findOne({ email, otp });

    if (record) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
