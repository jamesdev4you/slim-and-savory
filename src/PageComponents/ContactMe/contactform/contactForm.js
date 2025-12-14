"use client";
import React, { useRef } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

export default function ContactForm() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const payload = {
      firstName: formData.get("user_firstname"),
      lastName: formData.get("user_lastname"),
      email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f7ffe5",
        padding: "20px",
        borderRadius: "15px",
        width: "70%",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#373e02",
      }}
    >
      <form
        onSubmit={handleSubmit}
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
          sx={{
            border: "1px solid white",
            "&:hover": { backgroundColor: "#373e02" },
          }}
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
    color: "#373e02",
  },
  "& .MuiFormLabel-root": {
    color: "#373e02",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#373e02",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#373e02",
    },
    "&:hover fieldset": {
      borderColor: "#373e02",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#373e02",
    },
  },
  "& .MuiInputBase-root": {
    color: "#373e02",
  },
};
