import React, { useState } from "react";
import "./Create.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {  useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.esam.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.esam.main,
    scale: "0.99",
  },
}));
function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box
      autoComplete="off"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        width: "380px",
      }}
    >
      <TextField
        onChange={(eo) => {
          settitle(eo.target.value);
        }}
        label="Transaction Title"
        sx={{ width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#128073;</InputAdornment>
          ),
        }}
        variant="filled"
      />

      <TextField
        onChange={(eo) => {
          // @ts-ignore
          setprice(Number(eo.target.value));
        }}
        label=" Amount"
        sx={{ width: "100%" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/");
          });
        }}
        endIcon={<KeyboardArrowRightIcon />}
        sx={{ width: "33.3%", mt: "22px" }}
        variant="contained"
      >
        Submit
      </ColorButton>
    </Box>
  );
}

export default Create;
