import { Grid } from "@mui/material";
import { useContext } from "react";
import MyDataContext from "../../ApplicationDataContext";

function formatDate(dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Use toLocaleDateString to format the date in 'dd/mm/yyyy' format
  return date.toLocaleDateString("en-GB");
}
function ApplicationList() {
  const { applicationData } = useContext(MyDataContext);
  if (applicationData) {
    localStorage.setItem("data", JSON.stringify(applicationData));
  }
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          marginTop: "18vh",
        }}
      >
        <ul>
          {data?.map((item) => (
            <li key={item._id}>
              <strong>Job Title:</strong> {item.jobTitle}
              <br />
              <strong>Company Name:</strong> {item.companyName}
              <br />
              <strong>Status:</strong> {item.status}
              <br />
              <strong>Application Date:</strong>
              {formatDate(item.applicationDate)}
              <br />
              <strong>Job Description:</strong> {item.jobDescription}
              <br />
              <strong>Resume File Name:</strong> {item.resumeFileName}
            </li>
          ))}
        </ul>
      </Grid>
    </>
  );
}
export default ApplicationList;
