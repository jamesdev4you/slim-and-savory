"use client";
import * as React from "react";
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

export type FilterSectionProps = {
  heading: string;
  options: { title: string; value: string }[];
  /** Optional controlled value */
  value?: string[];
  /** Optional controlled onChange */
  onChange?: (values: string[]) => void;
  /** Start open or closed */
  defaultOpen?: boolean;
};

export default function BlogFilterItem({
  heading,
  options,
  value,
  onChange,
  defaultOpen = true,
}: FilterSectionProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [internal, setInternal] = React.useState<string[]>([]);

  const selected = value ?? internal;
  const setSelected = onChange ?? setInternal;

  const toggle = (v: string) => {
    const newArray = selected.includes(v)
      ? selected.filter((x) => x !== v)
      : [...selected, v];

    setSelected(newArray);
  };

  const checkboxSx = {
    "& .MuiSvgIcon-root": { fontSize: 12 },
    color: "secondary.main",
    "&.Mui-checked": { color: "secondary.main" },
  } as const;

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
                    sx={checkboxSx}
                  />
                }
                label={opt.title}
                sx={{
                  "& .MuiFormControlLabel-label": { color: "secondary.main" },
                  "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label":
                    {
                      color: "secondary.main",
                      fontWeight: 600,
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
