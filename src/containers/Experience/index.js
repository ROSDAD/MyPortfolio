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
  import experienceIcon from "../../../public/icons/system/experience.ico";
  import Background from "../../../public/projectBackground.png";



  const Experience = ({ open, ProjectWindow, handleClose }) => {
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
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background})`,
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
              <img style={{ width: 18, height: 18,marginRight:10 }} src={experienceIcon}/>

              {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
              <Typography>Experience</Typography>
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
            paddingTop:0,
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
            paddingTop:15,
            color:"#ffba00",
            textAlign:"center"
          }}>Experience</h1>
          <Stack style={{ width:"100%" }}>
            
            <hr style={{width:"100%", "background-color":"#000"}}/>   
            <h4 style={{
              margin:0
            }}>
              Fidelity Investments  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Boston, MA</i></span>
              
            </h4>
            
            <p 
            style={{
              margin:0,
              fontSize:14,
              paddingBottom:15,
              color:"#ffba00",
            }}>
              <i>Full Stack Engineer, Co-op 
              <span style={{
                float:"right",
                
              }}>
              Jul 2023 – Dec 2023
              </span>
             </i>
              
            </p>
            
          <ul style={{ margin:0 }}>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
              Collaborated with a squad of 15, spearheading the development and maintenance of an End-to-End Document Extraction Tool.
              </p>
            </li>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
              Showcased expertise in Java 13, Spring Boot for REST APIs, AngularJS for UI, and SonarQube for code efficiency enhancements. 
              </p>
            </li>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
               Instrumentally elevated tool efficiency, system performance, and overall reliability to foster operational excellence.  
              </p>
            </li>
            
            </ul>
            </Stack>
          <Stack style={{ width:"100%" }}>
            
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h4 style={{
            margin:0
          }}>
            Weddingz Bell Pvt. Ltd.  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Pune, IN</i></span>
            
          </h4>
          
          <p 
          style={{
            margin:0,
            fontSize:14,
            paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Co-Founder, Full Stack Web Developer 
            <span style={{
              float:"right",
              
            }}>
            Dec 2020 – Feb 2022
            </span>
           </i>
            
          </p>
          
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Recognized a problem to consolidate the plan of all wedding events in one place.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Initiated an innovative idea to plan all wedding events using 
            distribution algorithms as per the user’s budget.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Raised and patented a company worth $6,100 (₹500,000).

            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Hired a team of 3 and developed the website and received a collaborative industry experience in MVC Framework, Project 
Management and Business Analysis.
            </p>
          </li>
          </ul>
          </Stack>
          
          <Stack style={{ width:"100%" }}>
            
            <hr style={{width:"100%", "background-color":"#000"}}/>   
            <h4 style={{
              margin:0
            }}>
              eWebsuite Technologies Pvt. Ltd.  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Mumbai, IN</i></span>
              
            </h4>
            
            <p 
            style={{
              margin:0,
              fontSize:14,
              paddingBottom:15,
              color:"#ffba00",
            }}>
              <i>Full Stack Web Developer Intern 
              <span style={{
                float:"right",
                
              }}>
              Sep 2020 – Nov 2020
              </span>
             </i>
              
            </p>
            
          <ul style={{ margin:0 }}>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
              Transformed an on-site education institution to a hybrid by creating Online Education Portal using Django.
              </p>
            </li>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
              Developed a visualization to evaluate the statistics of about 70 students by Chart.js. 
              </p>
            </li>
            <li>
              <p style={{
                "text-align":"justify"
              }}>
              Embedded a chatbox using Python Socket allowing students to communicate with teachers and vice-versa.
  
              </p>
            </li>
            
            </ul>
            </Stack>
            <Stack style={{ width:"100%" }}>
            
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h4 style={{
            margin:0
          }}>
            Smart Consultant Pvt. Ltd. Co.  <span style={{fontSize:18, fontWeight:"normal",float:"right",color:"#ffba00",}}><i>Mumbai, IN</i></span>
            
          </h4>
          
          <p 
          style={{
            margin:0,
            fontSize:14,
            paddingBottom:15,
            color:"#ffba00",
          }}>
            <i>Project Intern 
            <span style={{
              float:"right",
              
            }}>
            Jan 2020 – Apr 2020
            </span>
           </i>
            
          </p>
          
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Introduced a Hotel Management System in collaboration with a team that 
            allows customers to book and cancel rooms on the portal.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Included an online Booking Payment Gateway improving 
            data integrity and reducing paperwork by about 30%.

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
  
  export default Experience;
  