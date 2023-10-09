import { Paper, Avatar, Typography } from "@mui/material";
import theme from "../../customTheme";
function Header(props) {
  const decodedToken = props.decoded;
  return (
    <>
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
    </>
  );
}

export default Header;
