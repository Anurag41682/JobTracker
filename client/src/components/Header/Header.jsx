import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../../customTheme";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setProfilePicture } from "../../api";
import MyDataContext from "../../ApplicationDataContext";
function Header(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    applicationData,
    setApplicationData,
    pictureUrl: URL,
    setPictureUrl,
  } = useContext(MyDataContext);
  if (URL) localStorage.setItem("imgURL", JSON.stringify(URL));
  const pictureUrl = JSON.parse(localStorage.getItem("imgURL"));
  const fileInputRef = useRef(null);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    navigate("/login");
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click(); //trigger click to the element associated with this ref
  };
  const decodedToken = props.decoded;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleReturnHome = () => {
    navigate("/");
  };

  const handleSetProfile = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return; // No file selected, do nothing
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    // console.log(selectedFile);
    handleClose();
    try {
      const response = await setProfilePicture(formData);
      // console.log(response);
      setPictureUrl(response.data.URL);
    } catch (error) {
      console.log(error);
    }
  };
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleReturnHome}>
              <HomeIcon
                sx={{ fontSize: { xs: "26px", sm: "35px", md: "48px" } }}
              ></HomeIcon>
            </IconButton>
            <IconButton onClick={handleClick}>
              <Avatar
                sx={{
                  width: { xs: "22px", sm: "30px", md: "40px" },
                  height: { xs: "22px", sm: "30px", md: "40px" },
                }}
                src={pictureUrl}
              ></Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl} // prop already defined, near which item it should be shown
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleFileInputClick}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleSetProfile}
                  style={{ display: "none" }}
                  accept="image/*"
                ></input>
                Set Profile Photo
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
