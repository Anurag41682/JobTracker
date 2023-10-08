import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Avatar, CardContent, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import theme from "../../customTheme";
import { StyledCard, StyledButton, StyledFooter } from "./styles/styles";

function home() {
  const [showHome, setShowHome] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {};

  //atob is used to convert base64 to javascript string
  // split is used to convert a string into array of substring with the specified delimter in this case "."
  //json parse is used to convert jsonString to jsonObject
  const jwtToken = localStorage.getItem("jwtToken");
  const decodedToken = JSON.parse(atob(jwtToken.split(".")[1]));
  function isTokenExpired() {
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime; //return true if not expired
  }
  useEffect(() => {
    if (jwtToken && !isTokenExpired()) {
      setShowHome(true);
    } else {
      navigate("/login");
    }
  }, []);
  if (showHome)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              color={theme.palette.primary.darkT}
              variant="h3"
            >{`${decodedToken.firstName} ${decodedToken.lastName}`}</Typography>
            <Typography variant="h5" color={theme.palette.primary.darkT}>
              {`${decodedToken.email}`}
            </Typography>
          </div>
          <Avatar></Avatar>
        </Paper>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          gap={10}
        >
          <StyledCard>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" color={theme.palette.primary.darkT}>
                Total application tracked
              </Typography>
              <Typography variant="h1" color={theme.palette.primary.darkT}>
                10
              </Typography>
              <StyledButton
                variant="contained"
                onClick={handleButtonClick}
                size="large"
                startIcon={<InfoIcon></InfoIcon>}
                style={{ color: `${theme.palette.primary.darkT}` }}
              >
                View details
              </StyledButton>
            </CardContent>
          </StyledCard>

          <StyledCard>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={theme.palette.primary.darkT} variant="h5">
                Add new application
              </Typography>
              <Typography variant="h1" color={theme.palette.primary.darkT}>
                +
              </Typography>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleButtonClick}
                size="large"
                startIcon={<AddCircleIcon />}
                style={{ color: `${theme.palette.primary.darkT}` }}
              >
                Add
              </StyledButton>
            </CardContent>
          </StyledCard>
        </Grid>
        <StyledFooter>Made with &lt;3 by Anur4g</StyledFooter>
      </div>
    );
  else return null;
}
export default home;
