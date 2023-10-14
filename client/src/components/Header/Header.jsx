import { Paper, Avatar, Typography } from "@mui/material";
import theme from "../../customTheme";
function Header(props) {
  const decodedToken = props.decoded;
  return (
    <>
      <Paper
        elevation={10}
        sx={{
          backgroundColor: theme.palette.primary[500],
          display: "flex",
          position: "fixed",
          justifyContent: "space-between",
          alignItems: "center",
          top: "0",
          right: "0",
          left: "0",
          zIndex: "100",
          padding: "0 100px",
          height: "16vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            color={theme.palette.primary[800]}
            variant="h3"
          >{`${decodedToken.firstName} ${decodedToken.lastName}`}</Typography>
          <Typography variant="h5" color={theme.palette.primary[800]}>
            {`${decodedToken.email}`}
          </Typography>
        </div>
        <Avatar></Avatar>
      </Paper>
    </>
  );
}

export default Header;
