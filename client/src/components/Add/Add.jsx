import { useEffect, useState } from "react";
import isAuth from "../../utils/isAuth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import decodeFn from "../../utils/decodeFn";
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
function Add() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server
  };

  useEffect(() => {
    if (isAuth(jwtToken)) {
      setShow(true);
    } else {
      navigate("/login");
    }
  }, []);
  if (show)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Header decoded={decodedToken} />
        {/* --------- */}
        <form>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 100px",
              padding: "10px",
            }}
          >
            <Grid container gap={1} sx={{ alignItems: "center" }}>
              <Grid md={4} item>
                <TextField label="Job Title" required />
              </Grid>
              <Grid md={4} item>
                <TextField label="Company" required />
              </Grid>
              <Grid md={4} item>
                <DatePicker format="D/M/YYYY" />
              </Grid>

              <Grid item md={4}>
                <FormControl sx={{ minWidth: "200px" }}>
                  <InputLabel>Status</InputLabel>
                  <Select label="Status">
                    <MenuItem>Pending</MenuItem>
                    <MenuItem>Rejected</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid md={8} item>
                <TextField
                  label="Job Description"
                  multiline
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Resume
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Paper>
        </form>
        {/* ----------- */}
        <Footer />
      </div>
    );
  else return null;
}
export default Add;
