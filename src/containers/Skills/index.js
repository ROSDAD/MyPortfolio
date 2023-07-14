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
    Chip,
    Item

    
  } from "@mui/material";
  import { Row, Col} from 'react-bootstrap';
  import React, {useState} from "react";
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps,programmingLanguages,frameworks,dataManagement,operatingSystems,others } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";
  import menuIcon from "../../utils/apps"
  import skills from "../../../public/skills.png"
  import SkillIcon from "../../../public/icons/system/skills.ico";
  import Background from "../../../public/projectBackground.png";
  
 

  const Skills = ({ open, ProjectWindow, handleClose }) => {
    const theme = useTheme();
    
  
    const Skills = ({ name, icon, bgColor, tColor,fLetter }) => (
      // if(icon!=""){
        
      <Chip style={{ margin:5,backgroundColor:{bgColor},color:{tColor} }} alt="N"avatar={<Avatar alt="N" src={icon["src"]}>{fLetter}</Avatar>} label={name} />
      
    );
    
  
    const MenuContent = () => (
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background['src']})`,
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
              <img style={{ width: 18, height: 18,marginRight:10 }} src={SkillIcon["src"]}/>

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
            
            // backgroundColor: `${theme.palette.background.grey}F7`,
            backdropFilter: "blur(15px)",
            border: "1px solid #525252",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflowY:"auto",
            
          }}
          
        >
        <img src={skills["src"]} style={{
          display:"block",
          marginLeft:"auto",
          marginRight:"auto",
          width:"300px",
          height:"200px",
        
          }}/>
          <hr style={{ textAlign:"center",width:"100%" }}/>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}
        sx={{px: 3,}}
        style={{
          
          margin:0,
          width:"100%",
         justifyContent:"center",
         
        }}>
          
          <Row style={{
            backgroundColor:"rgba(50, 50, 50, 0.5)",
            borderRadius:"20px",
            padding:20,
          }}>
            <Col>
            <div style={{"height":"65px"}}>
              <h4 style={{textAlign:"center"}}>Programming Languages</h4>
            </div>
              {programmingLanguages.map((skill, i) => (
                <Skills name={skill.name} icon={skill.icon} bgColor={skill.bgColor} tColor={skill.tColor} fLetter={skill.name.substring(0, 1)} />
              ))}
      
            
            </Col>
            <Col>
            <div style={{"height":"65px"}}>
            <h4 style={{textAlign:"center"}}>Frameworks</h4>
            </div>
            {frameworks.map((skill, i) => (
                <Skills name={skill.name} icon={skill.icon} bgColor={skill.bgColor} tColor={skill.tColor} fLetter={skill.name.substring(0, 1)} />
              ))}
        
            </Col>
            <Col>
            <div style={{"height":"65px"}}>
            <h4 style={{textAlign:"center"}}>Data Management</h4>
            </div>
            {dataManagement.map((skill, i) => (
                <Skills name={skill.name} icon={skill.icon} bgColor={skill.bgColor} tColor={skill.tColor} fLetter={skill.name.substring(0, 1)} />
              ))}
            </Col>
            <Col>
            <div style={{"height":"65px"}}>
            <h4 style={{textAlign:"center"}}>Operating Systems</h4>
            </div>
            {operatingSystems.map((skill, i) => (
                <Skills name={skill.name} icon={skill.icon} bgColor={skill.bgColor} tColor={skill.tColor} fLetter={skill.name.substring(0, 1)} />
              ))}
            </Col>
        
            
            
            
            <Col>
            <div style={{"height":"65px"}}>
            <h4 style={{textAlign:"center"}}>Others</h4>
            </div>
            {others.map((skill, i) => (
                <Skills name={skill.name} icon={skill.icon} bgColor={skill.bgColor} tColor={skill.tColor} fLetter={skill.name.substring(0, 1)} />
              ))}
           
            </Col>
            </Row>


            
          {/* </Grid> */}
         
         
         
          
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
  