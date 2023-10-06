import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";
import paperStyles from "./styles/paperStyles";
import * as api from "../../api/index";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
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
        console.log(recieved);
        const token = recieved.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/");
      })
      .catch((error) => {
        console.log({ message: error });
      });
  };

  function isTokenExpired(token) {
    const currentTime = Date.now() / 1000;
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken.exp < currentTime;
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken && !isTokenExpired(jwtToken)) {
      navigate("/");
    } else {
      setShowLogin(true);
    }
  }, []);
  if (showLogin)
    return (
      <Container maxWidth="sm" style={{ margin: "35px auto" }}>
        <Paper elevation={10} style={paperStyles}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
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
            variant="body2"
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
