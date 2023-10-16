import { Grid, IconButton } from "@mui/material";
import { useContext } from "react";
import MyDataContext from "../../ApplicationDataContext";
import { Card, CardContent, Typography } from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../customTheme";
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
  const handleDisplayResume = (item) => {
    window.open(item.resumeURL, "_blank");
  };
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "82vh",
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
                <Typography variant="body1" color="textSecondary">
                  Status: {item.status}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Application Date: {formatDate(item.applicationDate)}
                </Typography>
                <Typography variant="body2">Job Description:</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {item.jobDescription}
                </Typography>
                <br></br>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: theme.palette.primary[700],
                      gap: "0.5rem",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={() => handleDisplayResume(item)}
                  >
                    <Typography>View Resume</Typography>
                    <FilePresentIcon></FilePresentIcon>
                  </IconButton>
                </div>

                <Grid
                  container
                  justifyContent={"space-around"}
                  alignItems={"center"}
                >
                  <IconButton
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "0.5rem",
                      color: theme.palette.primary[700],
                    }}
                  >
                    <EditIcon />
                    <Typography>Edit</Typography>
                  </IconButton>
                  <IconButton
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "0.5rem",
                      color: theme.palette.primary[700],
                    }}
                  >
                    <DeleteIcon />
                    <Typography>Delete</Typography>
                  </IconButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default ApplicationList;
