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
import "./login.css";
import pattern from "../../assets/pattern.svg";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Stack direction="row">
      <Box className="left">
        <img src={pattern} alt="" />
      </Box>
      <Box className="right">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#664dd4 !important",
            alignSelf: "flex-start",
            borderRadius: "20px",
            fontSize: "12px !important",
            textTransform: "none",
            color: "#664dd4",
            position: "absolute",
            top: "20px",
            left: "20px",
            "&:hover": {
              backgroundColor: "rgb(102, 77, 212, 0.04)",
            },
          }}
          onClick={() => navigate("/")}
        >
          <i
            className="fa-solid fa-chevron-left"
            style={{ marginRight: "5px", color: "#664dd4" }}
          ></i>
          Home
        </Button>
        <Typography variant="h2">
          Filial<Typography variant="caption">Minds</Typography>
        </Typography>
        <Typography variant="body1">
          Welcome back, Login to get insights
        </Typography>
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
          <Typography variant="body1" style={{ margin: 0 }}>
            Forgot password?
          </Typography>
        </Stack>
        <Button variant="contained" className="common-button" fullWidth>
          Login
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
          Don't have an account?{" "}
          <Typography variant="caption" onClick={() => navigate("/register")}>
            Register
          </Typography>
        </Typography>
      </Box>
    </Stack>
  );
}
