import { Box } from '@mui/material'
import React from 'react'

const Welcome = () => {
  return (
    <Box 
      sx={{
        backgroundImage: "url('https://www.shutterstock.com/image-vector/abstract-light-blue-minimal-vector-260nw-2147461373.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      }}
    >
      <img 
        src="https://cdn3.slideserve.com/7025568/slide1-n.jpg" 
        alt="Welcome" 
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover'
        }} 
      />
    </Box>
  )
}

export default Welcome