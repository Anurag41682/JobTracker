import { Grid } from "@mui/material";
import { useContext } from "react";
import MyDataContext from "../../ApplicationDataContext";
import { Card, CardContent, Typography } from "@mui/material";
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
        container
        sx={{
          minHeight: "100vh",
          marginTop: "18vh",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item) => (
          <Grid key={item._id} item xs={8} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.jobTitle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.companyName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {item.status}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Application Date: {formatDate(item.applicationDate)}
                </Typography>
                <Typography variant="body1">Job Description:</Typography>
                <Typography variant="body2">{item.jobDescription}</Typography>
                {/* {resumeUrl && (
                <Button
                  startIcon={<Description />}
                  onClick={() => window.open(resumeUrl, "_blank")}
                >
                  Open Resume
                </Button>
              )} */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ApplicationList;
