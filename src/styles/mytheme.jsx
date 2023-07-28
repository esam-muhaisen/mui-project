const { grey, cyan, deepPurple } = require("@mui/material/colors");

export const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              esam: {
                main: "#53687e",
              },
              favColor: {
                main: deepPurple[300],
              },
              lilocation: {
                main: grey[300],
              },
            }
          : {
              // palette values for dark mode
              esam: {
                main: "teal",
              },
              favColor: {
                main: cyan[400],
              },
              lilocation: {
                main: grey[800],
              },
            }),
            
      },
  });
  