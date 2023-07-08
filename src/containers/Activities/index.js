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
  import activitiesIcon from "../../../public/icons/system/activities.ico";
  import Background from "../../../public/projectBackground.png";


  const Activities = ({ open, ProjectWindow, handleClose }) => {
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
            <img style={{ width: 18, height: 18,marginRight:10 }} src={activitiesIcon}/>

            {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
            <Typography>Activities</Typography>
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
        }}>Activities</h1>
        <Stack style={{ width:"100%" }}>
          
        <hr style={{width:"100%", "background-color":"#000"}}/>   
        <h4 style={{
          margin:0
        }}>
          <span>Chairperson </span>
           <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Aug 2021 – May 2022</i></span>
          
        </h4>
        <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Indian Society for Technical Education
            
           </i>
            
          </p>
        <ul style={{ paddingTop:10 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Undertook crucial decisions for society and raised funds of over $2,400 (₹192,000) 
            through memberships and sponsorships annually
            </p>
          </li>
          
        </ul>

        </Stack>
        <Stack style={{ width:"100%" }}>
          
        <hr style={{width:"100%", "background-color":"#000"}}/>   
        <h4 style={{
          margin:0
        }}>
          <span>Managing Secretary</span> 
          <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Aug 2020 – May 2021</i></span>
          
        </h4>
        <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Indian Society for Technical Education
            
           </i>
            
          </p>
        <ul style={{ paddingTop:10 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Managed Technical, Operations, Graphics and Public Relations Teams efficiently and implemented technical events smoothly with 
            record-breaking participation of more than 2500 annually with a team of 40 reporting directly to me.

            </p>
          </li>
          
        </ul>

        </Stack>
        <Stack style={{ width:"100%" }}>
          
        <hr style={{width:"100%", "background-color":"#000"}}/>   
        <h4 style={{
          margin:0
        }}>
          <span >Technical Officer</span>  
          <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Aug 2019 – May 2020</i></span>
          
        </h4>
        <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Indian Society for Technical Education
            
           </i>
            
          </p>
        <ul style={{ paddingTop:10 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
             Organized and maintained about 15 highly functioning seamless Technical Events in a team of 14 and scored more than 1500 
              participants in an annual period.

            </p>
          </li>
          
        </ul>

        </Stack>

        <Stack style={{ width:"100%" }}>
          
        <hr style={{width:"100%", "background-color":"#000"}}/>   
        <h4 style={{
          margin:0
        }}>
          <span > Class Respresentative </span> 
          <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Aug 2018 – May 2022</i></span>
          
        </h4>
        <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Vivekanand Education Society's Institute of Technology
            
           </i>
            
          </p>
        <ul style={{ paddingTop:10 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
             Served as a proactive Class Representative for a diverse cohort of 73 students, 
             bridging the communication divide between fellow students and college authorities to enhance overall operational efficiency.

            </p>
          </li>
          
        </ul>

        </Stack>
        
        <Stack style={{ width:"100%" }}>
          
        <hr style={{width:"100%", "background-color":"#000"}}/>   
        <h4 style={{
          margin:0
        }}>
          <span > Volunteer </span> 
          <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Jan 2019 – Mar 2019</i></span>
          
        </h4>
        <p 
          style={{
            margin:0,
            fontSize:20,
            // paddingBottom:15,
            color:"#ffba00",
          }}>
            <i> Saraswati Shikshan Sanstha, Ramabai Baalsadan (NGO)
            
           </i>
            
          </p>
        <ul style={{ paddingTop:10 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
             Volunteered to support the distribution of clothing and books, the celebration of Indian festivals, 
             and the teaching of graciousness to more than 50 underprivileged children.

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
  
  export default Activities;
  