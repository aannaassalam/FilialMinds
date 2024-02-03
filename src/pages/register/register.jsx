import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./register.css";
import pattern from "../../assets/pattern.svg";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <Stack direction="row">
      <Box className="left">
        <img src={pattern} alt="" />
      </Box>
      <Box className="right">
        <Typography variant="h2">
          Filial<Typography variant="caption">Minds</Typography>
        </Typography>
        <Typography variant="body1">
          Get your free acouunt now, Register with FilialMinds
        </Typography>
        <Stack direction="row" alignItems="center" gap="10px">
          <TextField
            variant="outlined"
            fullWidth
            label="First name"
            type="text"
            className="input"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Last name"
            type="text"
            className="input"
          />
        </Stack>
        <TextField
          variant="outlined"
          fullWidth
          label="Email"
          type="email"
          className="input"
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Username"
          type="text"
          className="input"
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Password"
          type="password"
          className="input"
          style={{ marginBottom: "5px" }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginBottom: "20px" }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label="Remeber me"
            className="checkbox"
          />
          {/* <Typography variant="body1" style={{ margin: 0 }}>
            Forgot password?
          </Typography> */}
        </Stack>
        <Button variant="contained" className="common-button" fullWidth>
          Register
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          gap="20px"
          className="or-section"
        >
          <Box className="line" />
          <Typography variant="body1" style={{ margin: 0, color: "#ccc" }}>
            OR
          </Typography>
          <Box className="line" />
        </Stack>
        <img src={google} alt="" className="google-btn" />
        <Typography variant="body1" className="register">
          Already a member?{" "}
          <Typography variant="caption" onClick={() => navigate("/login")}>
            Login
          </Typography>
        </Typography>
      </Box>
    </Stack>
  );
}
