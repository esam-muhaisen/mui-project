import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import Appbar from "MUI Components/Appbar";
import Drawerside from "MUI Components/Drawerside";
import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "styles/mytheme";

const drawerwidth = 240;
function Root() {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [noneorblock, setnoneorblock] = useState("none");
  const [drawer, setdrawer] = useState("permanent");
  const showdrawer = () => {
    setdrawer("temporary");
    setnoneorblock("block");
  };

  const hideDrawer = () => {
    setnoneorblock("none");

    setdrawer("permanent");
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          width={drawerwidth}
          setnoneorblock={setnoneorblock}
          drawertype={drawer}
          setdrawer={setdrawer}
          showdrawer={showdrawer}
        />
        <Drawerside
          width={drawerwidth}
          setMyMode={setMyMode}
          noneorblock={noneorblock}
          drawertype={drawer}
          setdrawer={setdrawer}
          setnoneorblock={setnoneorblock}
          hideDrawer={hideDrawer}
        />
        <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: { sm: `${drawerwidth}px` },
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
