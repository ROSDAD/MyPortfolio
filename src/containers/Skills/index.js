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
    Slide,
    Chip

    
  } from "@mui/material";
  import React, {useState} from "react";
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";
  import menuIcon from "../../utils/apps"



  const Skills = ({ open, ProjectWindow, handleClose }) => {
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
              <Typography>Skills</Typography>
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
        sx={{px: 3,}}
        style={{
          
          margin:0,
          width:"100%",
         justifyContent:"center"
        }}>

         <Chip style={{ margin:5 }} avatar={<Avatar alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg" />} label="primary" color="primary" />
         
         
          
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
  
  export default Skills;
  