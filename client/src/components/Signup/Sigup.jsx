import { useState } from "react";
import { Container, Paper, Button, Typography, TextField } from "@mui/material";
import paperStyles from "./styles/paperStyles";
import { Link } from "react-router-dom";
import * as api from "../../api/index";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errorContent, setErrorContent] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    api
      .signup(formData)
      .then((recieved) => {
        const token = recieved.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorContent(err);
      });
  };
  return (
    <Container maxWidth="sm" style={{ margin: "35px auto" }}>
      <Paper elevation={10} style={paperStyles}>
        <Typography variant="h4" align="center" gutterBottom>
          Signup
        </Typography>
        <form>
          <TextField
            required
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            label="E-mail"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={errorContent?.response?.data?.errorId === "email_taken"}
            helperText={
              errorContent?.response?.data?.errorId === "email_taken"
                ? errorContent.response.data.errorMessage
                : ""
            }
          ></TextField>
          <TextField
            required
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={
              errorContent?.response?.data?.errorId === "password_mismatch"
            }
            helperText={
              errorContent?.response?.data?.errorId === "password_mismatch"
                ? errorContent.response.data.errorMessage
                : ""
            }
          ></TextField>
          <TextField
            required
            label="Confirm Password"
            name="confirmPassword"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
          >
            Signup
          </Button>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "16px" }}
          >
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
}
export default Signup;
