import { Grid, IconButton, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import MyDataContext from "../../ApplicationDataContext";
import {
  Card,
  Container,
  CardContent,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../customTheme";
import { deleteApplication } from "../../actions/applicationAction";
import { useNavigate } from "react-router-dom";
import URL from "../../utils/url";
function formatDate(dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString);
  // Use toLocaleDateString to format the date in 'dd/mm/yyyy' format
  return date.toLocaleDateString("en-GB");
}
function ApplicationList() {
  const navigate = useNavigate();
  const { applicationData: data, dispatch } = useContext(MyDataContext);
  const handleDisplayResume = (item) => {
    window.open(`${URL}/uploads/${item.resumeFileName}`, "_blank");
  };
  const handleDelete = (item) => {
    deleteApplication(dispatch, item._id);
  };
  const handleEdit = (item) => {
    navigate(`/home/edit/${item._id}`, { state: { item } }); // second parameter object state can be passed it is optional
  };
  const [sortedData, setSortedData] = useState(data);
  const [sortingOption, setSortingOption] = useState("none");
  useEffect(() => {
    setSortedData(data);
  }, [data]);
  const handleSortingOptionChange = (event) => {
    const option = event.target.value;

    if (option === "date") {
      const sortedByDate = [...data].sort(
        (a, b) => new Date(a.applicationDate) - new Date(b.applicationDate)
      );
      setSortedData(sortedByDate);
    } else if (option === "pending") {
      const sortedByPending = [...data].filter(
        (item) => item.status === "pending"
      );
      setSortedData(sortedByPending);
    } else if (option === "accepted") {
      const sortedByAccepted = [...data].filter(
        (item) => item.status === "accepted"
      );
      setSortedData(sortedByAccepted);
    } else if (option === "rejected") {
      const sortedByRejected = [...data].filter(
        (item) => item.status === "rejected"
      );
      setSortedData(sortedByRejected);
    } else {
      setSortedData(data);
    }

    setSortingOption(option);
  };

  return (
    <>
      <div>
        {data.length ? (
          <Container sx={{ mt: "18vh" }}>
            <Select value={sortingOption} onChange={handleSortingOptionChange}>
              <MenuItem value="none">Sort / Filter</MenuItem>
              <MenuItem value="date">By Date</MenuItem>
              <MenuItem value="accepted">By Accepted</MenuItem>
              <MenuItem value="pending">By Pending</MenuItem>
              <MenuItem value="rejected">By Rejected</MenuItem>
            </Select>
          </Container>
        ) : null}
      </div>
      <Grid
        container
        sx={{
          minHeight: "82vh",
          mt: "5vh",
          mb: "18vh",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.length ? (
          sortedData.map((item) => (
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
                      onClick={() => handleEdit(item)}
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
                      onClick={() => handleDelete(item)}
                    >
                      <DeleteIcon />
                      <Typography>Delete</Typography>
                    </IconButton>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography sx={{ fontSize: { md: "40px", sm: "30px", xm: "20p3" } }}>
            No Data To Show
          </Typography>
        )}
      </Grid>
    </>
  );
}
export default ApplicationList;
