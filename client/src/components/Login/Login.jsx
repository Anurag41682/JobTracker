import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";
import paperStyles from "./styles/paperStyles";
import isAuth from "../../utils/isAuth";
import * as api from "../../api/index";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errorContent, setErrorContent] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    api
      .login({ email, password })
      .then((recieved) => {
        const token = recieved.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/");
      })
      .catch((error) => {
        setErrorContent(error);
      });
  };

  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (isAuth(jwtToken)) {
      navigate("/");
    } else {
      setShow(true);
    }
  }, []);
  if (show)
    return (
      <Container maxWidth="sm" style={{ margin: "35px auto" }}>
        <Paper elevation={10} style={paperStyles}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="E-Mail"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              error={errorContent?.response?.data?.errorId === "invalid_email"}
              helperText={
                errorContent?.response?.data?.errorId === "invalid_email"
                  ? errorContent.response.data.errorMessage
                  : ""
              }
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              error={
                errorContent?.response?.data?.errorId === "incorrect_password"
              }
              helperText={
                errorContent?.response?.data?.errorId === "incorrect_password"
                  ? errorContent.response.data.errorMessage
                  : ""
              }
              autoComplete="on"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "16px" }}
          >
            Don't have an account? <Link to="/signup">Signup</Link>
          </Typography>
        </Paper>
      </Container>
    );
  return null;
}

export default Login;
