import { Box } from "@mui/material";
import React from "react";
import Background from "../public/background.jpg";
import MenuBar from "../src/containers/MenuBar";
import Apps from "../src/containers/Apps";
import LockScreen from "../src/containers/Lockscreen";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Home = () => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const [openModal, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleCloseModal = () => {
    
    setOpen(false);
  };
  
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
    {/* <LockScreen open={openModal} handleClose={handleCloseModal} Transition={Transition}/> 
    <button style={{position:'absolute', top:0}} onClick={handleClickOpen}>TRIAL</button>   */}
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
            borderRadius:"50px",
            fontWeight:"Bolder",
            fontSize:"22px",
            // borderTopRightRadius: 5,
            // borderTopLeftRadius: 5,
          }}
        >
        
          <p>Hi! You're Now Signed In As <br/><u style={{ fontSize:25}}>Roshan Dadlani</u>. <br/>Feel Free To Roam Around! 😄 <br/><br/> <span style={{ fontSize:"15px" }}>Created With ❤️ & ☕</span></p>
        </Box>
      <Box sx={{ height: "100%", }}>
        <Apps />
      </Box>
      
      <Box sx={{ bottom: "0px", position: "fixed" }}>
        <MenuBar />
      </Box>
      
    </Box>
   
   
   
    
  );
};

export default Home;
