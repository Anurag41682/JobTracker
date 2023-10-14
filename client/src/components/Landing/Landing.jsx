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
          minHeight: "100vh",
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
            <Typography color={theme.palette.primary[800]} variant="h6">
              ADD NEW APPLICATION
            </Typography>
            <Typography variant="h1" color={theme.palette.primary[800]}>
              +
            </Typography>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleAddClick}
              size="large"
              startIcon={<AddCircleIcon />}
              style={{ color: `${theme.palette.primary[800]}` }}
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
            <Typography variant="h6" color={theme.palette.primary[800]}>
              TOTAL APPLICATION TRACKED
            </Typography>
            <Typography variant="h1" color={theme.palette.primary[800]}>
              10
            </Typography>
            <StyledButton
              variant="contained"
              onClick={handleInfoClick}
              size="large"
              startIcon={<InfoIcon></InfoIcon>}
              style={{ color: `${theme.palette.primary[800]}` }}
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
