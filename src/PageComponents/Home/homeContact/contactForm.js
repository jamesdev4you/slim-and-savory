import React, { useRef } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function ContactForm() {
  const form = useRef();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#E4DCC0',
        padding: '20px',
        borderRadius: '15px',
        width: "100%",
      }}
    >
      <Typography variant='h2' sx={{ color: '#1B1E1E', fontFamily: 'Birds' }}>
        Contact
      </Typography>
      <Typography sx={{ fontSize: '16px', color: '#1B1E1E' }}>
        <span style={{ color: 'red' }}>*</span> INDICATES REQUIRED FIELD!
      </Typography>

      <form
        style={{
          paddingTop: '5px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '15px', // replaces spacing={2}
        }}
        ref={form}
      >
        <TextField
          name='user_firstname'
          label='First Name'
          placeholder='Enter First Name'
          variant='outlined'
          fullWidth
          required
          color='secondary'
          sx={textFieldStyles}
        />

        <TextField
          name='user_lastname'
          label='Last Name'
          placeholder='Enter Last Name'
          variant='outlined'
          fullWidth
          color='error'
          sx={textFieldStyles}
        />

        <TextField
          type='email'
          name='user_email'
          label='Email'
          placeholder='Enter Email'
          variant='outlined'
          fullWidth
          required
          color='error'
          sx={textFieldStyles}
        />

        <TextField
          type='number'
          name='user_phone'
          label='Number'
          placeholder='Enter Phone Number'
          variant='outlined'
          fullWidth
          required
          color='error'
          sx={textFieldStyles}
        />

        <TextField
          label='Message'
          name='message'
          multiline
          rows={4}
          placeholder='Enter information about your issue here'
          variant='outlined'
          fullWidth
          required
          color='error'
          sx={textFieldStyles}
        />

        <Button
          type='submit'
          value='Send'
          variant='contained'
          fullWidth
          color='primary'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

// Extract repeated styles to avoid duplication
const textFieldStyles = {
  '& label.Mui-focused': {
    color: '#1B1E1E',
  },
  '& .MuiFormLabel-root': {
    color: '#1B1E1E',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#1B1E1E',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1B1E1E',
    },
    '&:hover fieldset': {
      borderColor: '#1B1E1E',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
  '& .MuiInputBase-root': {
    color: '#1B1E1E',
  },
};