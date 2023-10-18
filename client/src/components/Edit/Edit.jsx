import { useContext, useEffect, useState } from "react";
import isAuth from "../../utils/isAuth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import decodeFn from "../../utils/decodeFn";
import MyDataContext from "../../ApplicationDataContext";

import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import { updateApplication } from "../../actions/applicationAction";

//--------------------------------------------------------------------------//

function Add() {
  const { _, dispatch: dispatchApplication } = useContext(MyDataContext);
  const { state } = useLocation();
  const { item } = state;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  const [applicationData, setApplicationData] = useState({
    jobTitle: item.jobTitle,
    companyName: item.companyName,
    applicationDate: item.applicationDate,
    status: item.status,
    jobDescription: item.jobDescription,
    resumeFile: null,
  });

  const handleFileChange = (event) => {
    setApplicationData({
      ...applicationData,
      resumeFile: event.target.files[0],
    });
  };

  const handleChange = (event) => {
    setApplicationData({
      ...applicationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", applicationData.resumeFile);
    formData.append("jobTitle", applicationData.jobTitle);
    formData.append("companyName", applicationData.companyName);
    formData.append("applicationDate", applicationData.applicationDate);
    formData.append("status", applicationData.status);
    formData.append("jobDescription", applicationData.jobDescription);
    // formData.append("applicationId", item._id);
    updateApplication(dispatchApplication, formData, item._id);
    navigate("/home");
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
        <form onSubmit={handleSubmit}>
          <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Paper
              elevation={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: "20vh",
                padding: "10px",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ textDecoration: "underline" }}
              >
                Edit Application
              </Typography>
              <Grid
                container
                gap={3}
                sx={{ justifyContent: "center", alignItems: "center", my: 4 }}
              >
                <Grid xs={8} sm={8} md={8} item>
                  <TextField
                    name="jobTitle"
                    fullWidth
                    label="Job Title"
                    required
                    value={applicationData.jobTitle}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={8} sm={8} md={8} item>
                  <TextField
                    name="companyName"
                    value={applicationData.companyName}
                    fullWidth
                    label="Company"
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid xs={8} sm={8} md={8} item>
                  <DatePicker
                    onChange={(newValue) =>
                      setApplicationData({
                        ...applicationData,
                        applicationDate: newValue,
                      })
                    }
                    slotProps={{ textField: { fullWidth: true } }}
                    format="D/M/YYYY"
                  />
                </Grid>

                <Grid item xs={8} sm={8} md={8}>
                  <TextField
                    name="status"
                    value={applicationData.status}
                    label="Status"
                    select
                    required
                    fullWidth
                    onChange={handleChange}
                  >
                    <MenuItem value="accepted">Accepted</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                  </TextField>
                </Grid>
                <Grid xs={8} sm={8} md={8} item>
                  <TextField
                    multiline
                    maxRows={6}
                    minRows={6}
                    fullWidth
                    label="Job Description"
                    name="jobDescription"
                    onChange={handleChange}
                    value={applicationData.jobDescription}
                    required
                  />
                </Grid>
                {/*---------- buttons ----------- */}
                <Grid item xs={8} sm={8} md={8}>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    size="large"
                    sx={{
                      minWidth: "120px",
                      boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.5)",
                    }}
                    fullWidth
                  >
                    Resume
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      name="resumeFile"
                      id="resumeFile"
                      required={!applicationData.resumeFile}
                      onChange={handleFileChange}
                    />
                  </Button>
                  {!applicationData.resumeFile && (
                    <Typography color="#616161">
                      Select your resume file<sup> *</sup>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    size="large"
                    sx={{
                      minWidth: "120px",
                      boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.5)",
                    }}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </form>
        {/* ----------- */}
        <Footer />
      </div>
    );
  else return null;
}
export default Add;
