"use client";
import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function BlogFilterList() {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState<string[]>([]);

  const options = ["female", "male", "other"];

  const handleToggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const checkboxSx = {
    "& .MuiSvgIcon-root": { fontSize: 12 },
    color: "secondary.main",
    "&.Mui-checked": { color: "secondary.main" },
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{ width: "100%", color: "secondary.main" }}
        >
          By Category
        </Typography>
        <IconButton
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label="Toggle category filters"
          sx={{ color: "secondary.main" }}
        >
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
        </IconButton>
      </Box>

      <Collapse in={open} unmountOnExit sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%", mt: 1 }}>
          <FormGroup>
            {options.map((opt) => (
              <FormControlLabel
                key={opt}
                control={
                  <Checkbox
                    checked={selected.includes(opt)}
                    onChange={() => handleToggle(opt)}
                    sx={checkboxSx}
                  />
                }
                label={opt.charAt(0).toUpperCase() + opt.slice(1)}
                sx={{
                  "& .MuiFormControlLabel-label": { color: "secondary.main" },
                  "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label":
                    {
                      color: "secondary.main",
                    },
                }}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Collapse>
    </Box>
  );
}
