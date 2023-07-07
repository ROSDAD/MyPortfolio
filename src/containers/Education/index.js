/* eslint-disable @next/next/no-img-element */
import {
    Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    Popover,
    Stack,
    TextField,
    Typography,
    useTheme,
    Modal,
    Dialog,
    ListItemText,
    List,
    ListItem,
    Divider,
    AppBar,
    Toolbar,
    Container,
    Slide

    
  } from "@mui/material";
  import React, {useState} from "react";
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";
  import EducationIcon from "../../../public/icons/apps/Education.ico";
  import Background from "../../../public/projectBackground.png";



  const Education = ({ open, ProjectWindow, handleClose }) => {
    const theme = useTheme();
    
  
    const MenuLabel = ({ title, buttonText }) => (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: { xs: 2, lg: 4 }, mb: 2 }}
      >
        <Typography variant="body2">{title}</Typography>
  
        <Button
          size="small"
          variant="contained"
          disableElevation
          sx={{
            ...theme.typography.caption,
            textTransform: "inherit",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          {buttonText}
        </Button>
      </Stack>
    );
  
    const MenuContent = () => (
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${Background})`,
          backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
          [theme.breakpoints.up("lg")]: {
            width: "100vw",
            height: "92vh",
          },
        }}
      >
          <Stack
          justifyContent="center"
          sx={{
            px: 3,
            height: 60,
            backgroundColor: theme.palette.background.darkgrey,
            border: "1px solid #525252",
            borderTop: "none",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: { xs: 2, lg: 2 } }}
          >
            <Button
              direction="row"
              spacing={1}
              
              sx={{
                textTransform: "inherit",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              {/* <Folder/> */}
              <img style={{ width: 18, height: 18,marginRight:10 }} src={EducationIcon}/>

              {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
              <Typography>Education</Typography>
            </Button>
            <div>
            <IconButton size="small" onClick={handleClose}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" >
              <CropSquareIcon fontSize="small" />
            </IconButton>
            
            <IconButton size="small" onClick={handleClose} >
              <CloseIcon fontSize="small" />
            </IconButton>
            </div>
          </Stack>
        </Stack>
        {/* Apps */}
        <Box
          sx={{
            p: 6,
            flex: 1,
            paddingTop:3,
            // backdropFilter: "blur(15px)",
            // backgroundColor: `${theme.palette.background.grey}F7`,
            backdropFilter: "blur(15px)",
            border: "1px solid #525252",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflowY:"auto"
          }}
        >
          
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}
        
        style={{
          margin:0,
          width:"100%",
          
        }}>
         <h1 style={{
            
            color:"#ffba00",
            textAlign:"center"
          }}>Education</h1>
          <Stack style={{ width:"100%" }}>
            
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h4 style={{
            margin:0
          }}>
            Northeastern University, Boston  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>GPA: 3.76/4.0</i></span>
            
          </h4>
          
          <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Master of Science in Information Systems 
            <span style={{
              float:"right",
              fontSize:18
            }}>
            Sep 2022 – May 2024
            </span>
           </i>
            
          </p>

          <p 
          style={{
            margin:0,
            fontSize:15,
            paddingBottom:15,
            color:"#fff",
          }}>
            <i><b>Coursework:</b> Data Science, Program Structures and Algorithms, Web Design, Application Engineering and Development 
           </i>
            
          </p>

          </Stack>
          <Stack style={{ width:"100%" }}>
            
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h4 style={{
            margin:0
          }}>
            University of Mumbai, India  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>GPA: 8.17/10</i></span>
            
          </h4>
          
          <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Bachelor of Engineering in Computer Engineering 
            <span style={{
              float:"right",
              fontSize:18
            }}>
            Aug 2018 – May 2022
            </span>
           </i>
            
          </p>

          <p 
          style={{
            margin:0,
            fontSize:15,
            paddingBottom:15,
            color:"#fff",
          }}>
            <i><b>Coursework:</b> Data Structures and Algorithms, Analysis of Algorithms, 
            Operating Systems, Distributed Computing, Web Development, Object Oriented Programming
           </i>
            
          </p>

          </Stack>
          



       

          <hr style={{width:"100%", "background-color":"#000"}}/> 
        </Grid>
          
          
        </Box>
  
        {/* User */}
        
      </Stack>
    );
  
    return (
      // <Popover
      //   open={open}
      //   ProjectWindow={ProjectWindow}
      //   onClose={handleClose}
      //   anchorOrigin={{
      //     vertical: "top",
      //     horizontal: "center",
      //   }}
      //   transformOrigin={{ vertical: "center", horizontal: "center" }}
      // PaperProps={{
      //   style: { backgroundColor: "transparent", boxShadow: "none" },
      // }}
      // keepMounted>
      //   <MenuContent />
        
        

      // </Popover>
      <Dialog
        fullScreen
        open={open}
        ProjectWindow={ProjectWindow}
        onClose={handleClose}
        // TransitionComponent={Transition}
        keepMounted
      >
      <MenuContent />
      </Dialog>
    );
  };
  
  export default Education;
  