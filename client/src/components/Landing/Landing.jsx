import { Typography, CardContent, Grid } from "@mui/material";
import { StyledCard, StyledButton } from "./styles";
import theme from "../../customTheme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/add");
  };
  const handleInfoClick = () => {};
  return (
    <>
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
              onClick={handleInfoClick}
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
              onClick={handleAddClick}
              size="large"
              startIcon={<AddCircleIcon />}
              style={{ color: `${theme.palette.primary.darkT}` }}
            >
              Add
            </StyledButton>
          </CardContent>
        </StyledCard>
      </Grid>
    </>
  );
}
export default Landing;
