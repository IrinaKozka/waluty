import { useState, useEffect, useContext } from "react";
import { authContext } from "../../helpers/authContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../helpers/interfaces";
import { auth, storage } from "../../firebaseConfig"

import { ref, getDownloadURL } from "firebase/storage";

const pages = ["EUR", "USD"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [profilePhoto, setProfilePhoto] = useState("/");

  const loggedIn = useContext(authContext);

  useEffect(() => {
    if (loggedIn && auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      getDownloadURL(storageRef)
        .then((url) => setProfilePhoto(url))
        .catch((err) => console.error(err.message));
    }
  }, [loggedIn]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
  )
