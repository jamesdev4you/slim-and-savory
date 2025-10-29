"use client";
import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export type FilterSectionProps = {
  heading: string;
  options?: { title: string; value: string }[]; // defaulted below
  value?: string[];
  onChange?: (values: string[]) => void;
  defaultOpen?: boolean;
};

export default function BlogFilterItem({
  heading,
  options = [],
  value,
  onChange,
  defaultOpen = true,
}: FilterSectionProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [internal, setInternal] = React.useState<string[]>([]);
  const selected = value ?? internal;
  const setSelected = onChange ?? setInternal;

  const toggle = (v: string) => {
    const next = selected.includes(v)
      ? selected.filter((x) => x !== v)
      : [...selected, v];
    setSelected(next);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
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
          {heading}
        </Typography>
        <IconButton
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label={`Toggle ${heading}`}
          sx={{ color: "secondary.main" }}
        >
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
        </IconButton>
      </Box>

      <Collapse in={open} unmountOnExit>
        <FormControl sx={{ width: "100%", mt: 1 }}>
          <FormGroup>
            {options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                control={
                  <Checkbox
                    checked={selected.includes(opt.value)}
                    onChange={() => toggle(opt.value)}
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 12 },
                      color: "secondary.main",
                      "&.Mui-checked": { color: "secondary.main" },
                    }}
                  />
                }
                label={opt.title}
                sx={{
                  "& .MuiFormControlLabel-label": { color: "secondary.main" },
                  "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label":
                    {
                      color: "secondary.main",
                    },
                  marginRight: "auto",
                }}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Collapse>
    </Box>
  );
}
