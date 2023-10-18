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
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setProfilePicture, getProfilePicture } from "../../api";
import MyDataContext from "../../ApplicationDataContext";
import URL from "../../utils/url";
function Header(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { applicationData, dispatch, dpFileName, setDpFileName } =
    useContext(MyDataContext);
  const fileInputRef = useRef(null);
  useEffect(() => {
    getProfilePicture()
      .then((recieved) => {
        if (recieved) setDpFileName(recieved.data.fileName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let imageURL = null;
  if (dpFileName) {
    imageURL = `${URL}/uploads/${dpFileName}`;
  }
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
      setDpFileName(response.data.fileName);
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
          height: "10vh",
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
                src={imageURL}
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
