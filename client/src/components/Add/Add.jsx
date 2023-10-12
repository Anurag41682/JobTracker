import { useEffect, useState } from "react";
import isAuth from "../../utils/isAuth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import decodeFn from "../../utils/decodeFn";
import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import { addApplication } from "../../api";

//--------------------------------------------------------------------------//

function Add() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = decodeFn(jwtToken);
  const [applicationData, setApplicationData] = useState({
    jobTitle: "",
    companyName: "",
    applicationDate: "",
    status: "",
    jobDescription: "",
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
    // console.log(applicationData);
    const formData = new FormData();
    formData.append("jobTitle", applicationData.jobTitle);
    formData.append("companyName", applicationData.companyName);
    formData.append("applicationDate", applicationData.applicationDate);
    formData.append("status", applicationData.status);
    formData.append("jobDescription", applicationData.jobDescription);
    formData.append("file", applicationData.resumeFile);
    addApplication(formData)
      .then((recieved) => {
        // add later something beautiful to give response to user for successful save.
        window.alert(recieved.data.message);
        // console.log(recieved);
      })
      .catch((error) => {
        // window.location.reload(); //reload to login page if the token is expired
        console.log(error);
      });
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
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "150px 100px",
              padding: "10px",
            }}
          >
            <Grid
              container
              gap={1}
              sx={{ justifyContent: "center", alignItems: "center" }}
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
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                  <MenuItem value="accepted">Accepted</MenuItem>
                </TextField>
              </Grid>
              <Grid xs={8} sm={8} md={8} item>
                <TextField
                  label="Job Description"
                  multiline
                  fullWidth
                  minRows={10}
                  name="jobDescription"
                  value={applicationData.jobDescription}
                  onChange={handleChange}
                  required
                ></TextField>
              </Grid>
              {/*---------- buttons ----------- */}
              <Grid item xs={8} sm={8} md={8}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  size="large"
                  sx={{ minWidth: "120px" }}
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
                    Please select your resume file.
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
                  sx={{ minWidth: "120px" }}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
        {/* ----------- */}
        <Footer />
      </div>
    );
  else return null;
}
export default Add;
