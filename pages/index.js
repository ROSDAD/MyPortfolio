import { Box } from "@mui/material";
import React from "react";
import Background from "../public/background.jpg";
import MenuBar from "../src/containers/MenuBar";
import Apps from "../src/containers/Apps";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Box
          sx={{
            p: 3,
            flex: 1,
            width:"30vw",
            position:"relative",
            float:"right",
            top:"50vh",
            minWidth:"300px",
            justifyContent:"center",
            margin:"10px",
            background: "rgba(0,0,0,.2)",
            color:"#fff",
            backdropFilter: "blur(5px)",
            fontFamily:"Merriweather",
            // border: "1px solid #525252",
            fontWeight:"Bolder",
            fontSize:"22px",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        >
        
          <p>Hi! You're Now Signed In As <u style={{ fontSize:25}}>Roshan Dadlani</u>. <br/>Feel Free To Roam Around! 😄 <br/><br/> <span style={{ fontSize:"15px" }}>Created With ❤️ & ☕</span></p>
        </Box>
      <Box sx={{ height: "100%" }}>
        <Apps />
      </Box>
      
      <Box sx={{ bottom: "0px", position: "fixed" }}>
        <MenuBar />
      </Box>
      
    </Box>
  );
};

export default Home;
