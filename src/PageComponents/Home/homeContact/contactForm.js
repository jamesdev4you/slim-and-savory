import React, { useRef } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

export default function ContactForm() {
  const form = useRef();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#7c8e76",
        padding: "20px",
        borderRadius: "15px",
        width: "100%",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#f7ffe5",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "secondary.main", fontFamily: "Birds" }}
      >
        Contact
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "#f7ffe5", mb: 2 }}>
        <span style={{ color: "red" }}>*</span> INDICATES REQUIRED FIELD!
      </Typography>

      <form
        style={{
          paddingTop: "5px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "15px",
        }}
        ref={form}
      >
        <TextField
          name="user_firstname"
          label="First Name"
          placeholder="Enter First Name"
          variant="outlined"
          fullWidth
          required
          color="#f7ffe5"
          sx={textFieldStyles}
        />

        <TextField
          name="user_lastname"
          label="Last Name"
          placeholder="Enter Last Name"
          variant="outlined"
          fullWidth
          color="#f7ffe5"
          sx={textFieldStyles}
        />

        <TextField
          type="email"
          name="user_email"
          label="Email"
          placeholder="Enter Email"
          variant="outlined"
          fullWidth
          required
          color="secondary.main"
          sx={textFieldStyles}
        />

        <TextField
          type="number"
          name="user_phone"
          label="Number"
          placeholder="Enter Phone Number"
          variant="outlined"
          fullWidth
          required
          color="secondary.main"
          sx={textFieldStyles}
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          placeholder="Enter information about your issue here"
          variant="outlined"
          fullWidth
          required
          color="secondary.main"
          sx={textFieldStyles}
        />

        <Button
          type="submit"
          value="Send"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ border: "1px solid white" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

// Extract repeated styles to avoid duplication
const textFieldStyles = {
  "& label.Mui-focused": {
    color: "#f7ffe5",
  },
  "& .MuiFormLabel-root": {
    color: "#f7ffe5",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#f7ffe5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f7ffe5",
    },
    "&:hover fieldset": {
      borderColor: "#f7ffe5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "yellow",
    },
  },
  "& .MuiInputBase-root": {
    color: "#f7ffe5",
  },
};
