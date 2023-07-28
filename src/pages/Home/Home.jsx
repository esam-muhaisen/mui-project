import React from "react";
import "./Home.css";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Paper, Typography, IconButton, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

  const colors = useTheme(); 
  // const [totlePrice, settotlePrice]= useState(0);
 let totlePrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totlePrice+=item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
              position: "relative",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: "500",
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });

                const newarray = mydata.filter((myObject)=>{
                  return(
                    myObject.id !== item.id
                  )
                })
                setmydata(newarray);
              }}
              aria-label=""
              sx={{ position: "absolute", top: "-5px", right: "0" }}
            >
              <CloseIcon sx={{}} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography variant="h6" sx={{textAlign:"center",mt:"20px"}}>
      &#128073; You Spend ${totlePrice}
      </Typography>

      <Typography
        mt={10}
        variant="h5"
        color={
          // @ts-ignore
          colors.palette.favColor.main
        }
      >
        esam
      </Typography>
    </Box>
  );
}
export default Home;
