import "./comp.css";
import logo from "./img/logo.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  function toggleMenu(boolean) {
    if (boolean === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  const DrawerList = (
    <Box
      id="drawer"
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => {
        toggleMenu(open);
      }}
    >
      <List>
        <img id="logo" src={logo} alt="LOGO" />
        <br />
        <br />
        {["Home", "About", "Projects", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={"#" + text.toLowerCase()}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: 25,
                  fontWeight: 300,
                  marginLeft: "20px",
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div id="nav">
        <div id="nav-container">
          <img id="logo" src={logo} alt="LOGO" />
          <div id="nav-links">
            <a className="nav-link" href="#top">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
          <Button
            id="hamburger"
            onClick={() => {
              toggleMenu(false);
            }}
          >
            {!open ? (
              <MenuIcon htmlColor="black" fontSize="large" />
            ) : (
              <MenuOpenIcon htmlColor="black" fontSize="large" />
            )}
          </Button>
          <Drawer
            open={open}
            anchor="right"
            onClose={() => {
              toggleMenu(true);
            }}
          >
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Nav;
