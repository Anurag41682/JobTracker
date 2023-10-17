import { Typography, CardContent, Grid } from "@mui/material";
import { StyledCard, StyledButton } from "./styles";
import theme from "../../customTheme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/home/add");
  };
  const handleInfoClick = () => {
    navigate("/home/info");
  };
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          marginTop: "20vh",
          alignContent: "start",
        }}
        gap={10}
        container
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
            <Typography
              sx={{
                fontSize: {
                  //values are in pixel
                  md: 20,
                  xs: 15,
                },
              }}
              color={theme.palette.primary[800]}
            >
              ADD NEW APPLICATION
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: 80,
                  sm: 60,
                  xs: 40,
                },
              }}
              color={theme.palette.primary[800]}
            >
              +
            </Typography>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleAddClick}
              startIcon={<AddCircleIcon />}
              style={{
                color: `${theme.palette.primary[800]}`,
              }}
            >
              Add
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
            <Typography
              //2nd method for responsive fontsize
              // sx={{ typography: { sm: "body2", xs: "body1" } }}

              //3rd method for reponsive fontsize(most customizable)
              sx={{
                fontSize: {
                  //values are in pixel
                  md: 20,
                  xs: 15,
                },
              }}
              color={theme.palette.primary[800]}
            >
              TOTAL APPLICATION TRACKED
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: 80,
                  sm: 60,
                  xs: 40,
                },
              }}
              color={theme.palette.primary[800]}
            >
              10
            </Typography>
            <StyledButton
              variant="contained"
              onClick={handleInfoClick}
              startIcon={<InfoIcon></InfoIcon>}
              style={{
                color: `${theme.palette.primary[800]}`,
              }}
            >
              View details
            </StyledButton>
          </CardContent>
        </StyledCard>
      </Grid>
    </>
  );
}
export default Landing;
