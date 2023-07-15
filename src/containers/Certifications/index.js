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
  import certificationsIcon from "../../../public/icons/system/certifications.ico";
  import Background from "../../../public/projectBackground.png";
  import DP900 from "../../../public/certifications/DP900.png";
  import AZ900 from "../../../public/certifications/AZ900.png";
  import { Row, Col, Card,ListGroup} from 'react-bootstrap';

  const Certifications = ({ open, ProjectWindow, handleClose }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
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
      <div>
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
              <img style={{ width: 18, height: 18,marginRight:10}} src={certificationsIcon}/>

              {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
              <Typography>Certifications</Typography>
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
            // backgroundColor: `${theme.palette.background.grey}F7`,
            backdropFilter: "blur(15px)",
            border: "1px solid #525252",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflowY:"auto",
            
            
          }}
        >
          
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}
        
        style={{
          margin:0,
          width:"100%",
          
          
        }}>
         
          <Stack style={{ width:"100%" }}>
          <h1 style={{
            
            color:"#ffba00",
            textAlign:"center"
          }}>Certifications</h1>
          <hr color={"#ffba00"} style={{width:"100%"}}/>  


          <Row style={{}} xs={1} md={2} lg={3} xl={4}> 
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={AZ900}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>
              Microsoft Certified: Azure Fundamentals</Card.Title>
              <Card.Text>
              {/* <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Django, Python, JavaScript, Natural Language Processing (NLP), 
                    Web Scraping, HTML, CSS, Machine Learning, TensorFlow</i>
                </p> */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
            
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
             
                <Card.Link href="https://www.credly.com/badges/129ab566-be35-42c9-bad8-30c95e55e955/public_url" target="_blank">Link</Card.Link>
                
                
              </ListGroup.Item>
             
             
            </ListGroup>
            {/* <Card.Body>
              
            </Card.Body> */}
          </Card>
      
          </Col>
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={DP900}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>
              Microsoft Certified: Azure Data Fundamentals</Card.Title>
              <Card.Text>
              {/* <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Django, Python, JavaScript, Natural Language Processing (NLP), 
                    Web Scraping, HTML, CSS, Machine Learning, TensorFlow</i>
                </p> */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
            
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                {/* <Card.Link href="https://github.com/ROSDAD/Dr.-Deppy" target="_blank">GitHub</Card.Link>
                <Card.Link href="https://link.springer.com/chapter/10.1007/978-981-16-6460-1_37" target="_blank">Research Paper</Card.Link>
                <Card.Link href="https://www.youtube.com/watch?v=uun96RLq3P0" target="_blank">Youtube</Card.Link> */}
                <Card.Link href="https://www.credly.com/badges/c3f1f726-f007-4661-89b3-ac9365863952/public_url" target="_blank">Link</Card.Link>
              </ListGroup.Item>
             
             
            </ListGroup>
            {/* <Card.Body>
              
            </Card.Body> */}
          </Card>
      
          </Col>
          
          </Row>

 

         
          </Stack>

          <hr style={{width:"100%", "background-color":"#000"}}/> 
        </Grid>
          
          
        </Box>
  
        {/* User */}
        
      </Stack>
      </div>
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
  
  export default Certifications;
  