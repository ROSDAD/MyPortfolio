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




  const Projects = ({ open, ProjectWindow, handleClose }) => {
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
              <img style={{ width: 18, height: 18,marginRight:10,marginBottom:4 }} src={Folder}/>

              {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
              <Typography>Projects</Typography>
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
            
            backgroundColor: `${theme.palette.background.grey}F7`,
            backdropFilter: "blur(5px)",
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
         
          <Stack style={{ width:"100%" }}>
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h2 style={{
            margin:0
          }}>
            Click-To-Cart - <span style={{ fontSize:15 }}><a href="https://github.com/ROSDAD/click-to-cart" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0
          }}>
            <i>Tech Stack</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            Sep 2022 - Dec 2022
          </h4>
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Worked with over 23 Java Classes to develop an E-Commerce Clone Java Swing Application using Java.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Assisted users in ordering anything from the retail stores nearby and allow admins to control Cities,
             Organizations and Departments.
            </p>
          </li>
          </ul>
          </Stack>
          <Stack >
          <hr style={{width:"100%"}}/>   
          <h2 style={{
            margin:0
          }}>
            Project name - <span style={{ fontSize:15 }}><a href="#" style={{color:"#6666ff"}}><u>GitHub</u></a>,
            <a style={{color:"#6666ff"}}>Youtube</a></span>
            
          </h2>
          
          <p 
          style={{
            margin:0
          }}>
            <i>Tech Stack</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            2022 — 2023
          </h4>
        <ul style={{ margin:0 }}>
        <li>
          <p style={{
            "text-align":"justify"
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </li>
          </ul>
          </Stack>
          <Stack >
          <hr style={{width:"100%"}}/>   
          <h2 style={{
            margin:0
          }}>
            Project name - <span style={{ fontSize:15 }}><a href="#" style={{color:"#6666ff"}}><u>GitHub</u></a>,
            <a style={{color:"#6666ff"}}>Youtube</a></span>
            
          </h2>
          
          <p 
          style={{
            margin:0
          }}>
            <i>Tech Stack</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            2022 — 2023
          </h4>
        <ul style={{ margin:0 }}>
        <li>
          <p style={{
            "text-align":"justify"
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </li>
          </ul>
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
  
  export default Projects;
  