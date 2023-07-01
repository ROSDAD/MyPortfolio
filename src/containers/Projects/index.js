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
  import ProjectIcon from "../../../public/icons/system/projects.ico";




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
              <img style={{ width: 18, height: 18,marginRight:10}} src={ProjectIcon}/>

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
            paddingTop:0,
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
          <h1 style={{
            
            color:"#ffba00"
          }}>Projects</h1>
          <hr color={"#ffba00"} style={{width:"100%"}}/>   
          <h2 style={{
            margin:0
          }}>
            Click-To-Cart - <span style={{ fontSize:15 }}><a href="https://github.com/ROSDAD/click-to-cart" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0,
            fontSize:14
          }}>
            <i>Java, MySQL, OpenCage, Java Swing, SMTP</i>
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
          
          <Stack style={{ width:"100%" }}>
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h2 style={{
            margin:0
          }}>
            
        MIME: Movement In Modern Electronics - <span style={{ fontSize:15 }}>
          <a href="https://github.com/ROSDAD/ASL-1" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>,
          <a href="https://ieeexplore.ieee.org/document/9673251" target="_blank" style={{color:"#6666ff"}}><u> Research Paper 1</u></a>,
          <a href="https://ieeexplore.ieee.org/document/9752213" target="_blank" style={{color:"#6666ff"}}><u> Research Paper 2</u></a>,
          <a href="https://www.youtube.com/watch?v=VQsse7N2dCk" target="_blank" style={{color:"#6666ff"}}><u> Youtube</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0,
            fontSize:14
          }}>
            <i>Django, Python, JavaScript, HTML, MediaPipe, CSS, OpenCV, Tensorflow</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            Aug 2021 - May 2022
          </h4>
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Devised an application demonstrating the power of using hand gestures to control computer devices.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Used Computer Vision (OpenCV) and Media Pipe to plot and analyze points on the user’s hand.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Included a WebApp for the deaf and dumb allowing non-native speakers to grasp the language of the extraordinary.
            </p>
          </li>
          </ul>
          </Stack>


          <Stack style={{ width:"100%" }}>
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h2 style={{
            margin:0
          }}>
            Distributed File System (DFS) - <span style={{ fontSize:15 }}><a href="https://github.com/ROSDAD/DFS-using-Python.git" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0,
            fontSize:14
          }}>
            <i>Python, Distributed File Systems, Socket Programming</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            Jan 2022 - May 2022
          </h4>
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Developed a Distributed File System and built the communication between 4 data centric servers using Python Socket.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Successfully demonstrated data consistency, server stability and data availability.
            </p>
          </li>
          </ul>
          </Stack>


          <Stack style={{ width:"100%" }}>
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h2 style={{
            margin:0
          }}>
            
            Deppy: Your Virtual Companion - <span style={{ fontSize:15 }}>
          <a href="https://github.com/ROSDAD/Dr.-Deppy" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>,
          <a href="https://link.springer.com/chapter/10.1007/978-981-16-6460-1_37" target="_blank" style={{color:"#6666ff"}}><u> Research Paper</u></a>,
          <a href="https://www.youtube.com/watch?v=uun96RLq3P0" target="_blank" style={{color:"#6666ff"}}><u> Youtube</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0,
            fontSize:14
          }}>
            <i>Django, Python, JavaScript, Natural Language Processing (NLP), Web Scraping, HTML, CSS, Machine Learning, TensorFlow</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            Aug 2020 - May 2021
          </h4>
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Collaborated with a team of 4 to create a Web Application associated with an AI chatbot to counter depression by featuring a user-friendly chat using DNN, NLP and Machine Learning.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Impacted users to improve their mental health by 22%-38% by chatting with the bot and avoiding judgements of people.
            </p>
          </li>
          
          </ul>
          </Stack>


          <Stack style={{ width:"100%" }}>
          <hr style={{width:"100%", "background-color":"#000"}}/>   
          <h2 style={{
            margin:0
          }}>
            
            TweeSent - Sentiment Analysis Of COVID’19 Tweets (IBM HACK CHALLENGE'20) - <span style={{ fontSize:15 }}>
          <a href="https://github.com/ROSDAD/Sentiment-Analysis-1.git" target="_blank" style={{color:"#6666ff"}}><u>GitHub</u></a>,
          <a href="https://www.youtube.com/watch?v=mIvGXdfe2J0" target="_blank" style={{color:"#6666ff"}}><u> Youtube</u></a>
            </span>
            
          </h2>
          
          <p 
          style={{
            margin:0,
            fontSize:14
          }}>
            <i>Django, Python, JavaScript, Natural Language Processing (NLP), Tweepy, HTML, CSS, Machine Learning, TextBlob</i>
          </p>
          <h4 
          style={{
            margin:0,
            color:"#ffba00"
          }}>
            May 2020 - Jun 2020
          </h4>
        <ul style={{ margin:0 }}>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Participated in IBM HACK CHALLENGE 2020 Hackathon to create a sentiment analysis application.
            </p>
          </li>
          <li>
            <p style={{
              "text-align":"justify"
            }}>
            Used Tweepy to fetch Realtime Tweets and analyzed sentiments based on Covid-19 using NLP.
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
  