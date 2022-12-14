import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarBar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", top: "10px", width: "100vw" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cool New Animation Every Week
          </Typography>
          <a
            href="https://www.github.com/kaviarasuns/oauth-social-frontend/blob/master/src/components/Magic.js"
            target="_blank"
          >
            <Button
              color="inherit"
              style={{ fontWeight: "bold", color: "black" }}
            >
              For Github Source
            </Button>
          </a>

          <Button color="inherit" style={{ fontWeight: "bold" }}>
            {currentUser.displayName}
          </Button>
          <Avatar src={currentUser && currentUser.photoURL} />
          {/* <img src={currentUser.photoURL} alt="" /> */}
          <Button
            color="inherit"
            onClick={handleAuth}
            style={{ fontWeight: "bold" }}
          >
            {currentUser ? "LOGOUT" : "LOGIN"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
