import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Link } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function Appbar(props) {
  return (
    <div>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${props.width}px)` },
          ml: { xs: 0, sm: `${props.width}px` },
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              {
                props.showdrawer();
              }
            }}
            aria-label=""
            sx={{ mr: "9px", display: { sm: "none" } }}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Link
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { fontSize: "16.5px", transition: "0.2s ease-in-out" },
            }}
            color="inherit"
            href="/"
          >
            My expenses
          </Link>

          <Typography mr={2} variant="body1" color="inherit">
            Esam
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
