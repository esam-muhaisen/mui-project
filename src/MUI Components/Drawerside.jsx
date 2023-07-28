import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function Drawerside(props) {
  const currentlocation = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: `${props.noneorblock}`, sm: "block" },
          width: `${props.width}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${props.width}px`,
            boxSizing: "border-box",
          },
        }}
        variant={props.drawertype}
        anchor="left"
        open={true}
        onClose={() => {
          props.hideDrawer();
        }}
      >
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );

                props.setMyMode(
                  theme.palette.mode === "light" ? "dark" : "light"
                );
              }}
              color="inherit"
            >
              {theme.palette.mode === "light" ? (
                <Brightness4 />
              ) : (
                <Brightness7 sx={{ color: "orange" }} />
              )}
            </IconButton>
          </ListItem>
          <Divider />

          <ListItem
            sx={{
              bgcolor:
                currentlocation.pathname === "/"
                  ? // @ts-ignore
                    theme.palette.lilocation.main
                  : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem
            sx={{
              bgcolor:
                currentlocation.pathname === "/create"
                  ? // @ts-ignore
                    theme.palette.lilocation.main
                  : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/create");
              }}
            >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Drawerside;
