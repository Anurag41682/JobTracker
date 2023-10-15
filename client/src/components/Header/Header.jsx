import { AppBar, Toolbar, Avatar, Typography } from "@mui/material";
import theme from "../../customTheme";
function Header(props) {
  const decodedToken = props.decoded;
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary[500],
          height: "16vh",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              color={theme.palette.primary[800]}
              sx={{
                fontSize: {
                  xs: 24,
                  sm: 30,
                  md: 40,
                },
              }}
            >
              {`${decodedToken.firstName} ${decodedToken.lastName}`}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  sm: 16,
                  md: 20,
                },
              }}
              color={theme.palette.primary[800]}
            >
              {`${decodedToken.email}`}
            </Typography>
          </div>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
