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
  import { Row, Col, Card,ListGroup} from 'react-bootstrap';
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";
  import ProjectIcon from "../../../public/icons/system/projects.ico";
  import Background from "../../../public/projectBackground.png";
  import Deppy from "../../../public/projects/deppy.png";
  import MIME from "../../../public/projects/MIME.png";
  import Tweesent from "../../../public/projects/Tweesent.png";
  import Practo from "../../../public/projects/practo.png";
  import Click2Cart from "../../../public/projects/click2cart.png";
  import DFS from "../../../public/projects/DFS.png";



  const Projects = ({ open, ProjectWindow, handleClose }) => {
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
          }}>Projects</h1>
          <hr color={"#ffba00"} style={{width:"100%"}}/>  


          <Row style={{}} xs={1} md={2} lg={3} xl={4}> 
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={Deppy}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>Deppy: Your Virtual Companion</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Django, Python, JavaScript, Natural Language Processing (NLP), 
                    Web Scraping, HTML, CSS, Machine Learning, TensorFlow</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
            
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/Dr.-Deppy" target="_blank">GitHub</Card.Link>
                <Card.Link href="https://link.springer.com/chapter/10.1007/978-981-16-6460-1_37" target="_blank">Research Paper</Card.Link>
                <Card.Link href="https://www.youtube.com/watch?v=uun96RLq3P0" target="_blank">Youtube</Card.Link>
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
              src={MIME}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>MIME: Movement In Modern Electronics</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Django, Python, JavaScript, MediaPipe, HTML, CSS, OpenCV, Tensorflow</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
            
                <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/ASL-1" target="_blank">GitHub</Card.Link>
                <Card.Link href="https://ieeexplore.ieee.org/document/9673251" target="_blank">Research Paper 1</Card.Link>
                <br/>
                <Card.Link href="https://ieeexplore.ieee.org/document/9752213" target="_blank">Research Paper 2</Card.Link>
                <Card.Link href="https://www.youtube.com/watch?v=VQsse7N2dCk" target="_blank">Youtube</Card.Link>
                  </ListGroup.Item>
             
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
      
          </Col>
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={Practo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>Practo Clone</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>MongoDB, Express.js, React.js, Node.js, Redux, JavaScript, HTML, CSS</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
            <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/Web-Design-Final-Project" target="_blank">GitHub</Card.Link>
                
              </ListGroup.Item>
              {/* <ListGroup.Item style={{"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff"}}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff"}}>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
      
          </Col>
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={Click2Cart}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>Click-To-Cart</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Java, MySQL, OpenCage, Java Swing, SMTP</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/click-to-cart" target="_blank">GitHub</Card.Link>
                
              </ListGroup.Item>
              {/* <ListGroup.Item style={{"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff"}}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff"}}>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
      
          </Col>

          

          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={DFS}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>Distributed File System (DFS)</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Python, Distributed File Systems, Socket Programming</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/DFS-using-Python.git" target="_blank" >GitHub</Card.Link>
                </ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
      
          </Col>
          
          <Col style={{marginBottom:50}}>
            
            <Card style={{ width: '18rem',"background-color": "rgba(255, 255, 255, 0.2)",color:"#fff",margin:"auto",height:"100%" }}>
            {/* <Card.Img variant="top" src={Background} /> */}
            <Card.Img
              variant="top"
              src={Tweesent}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ opacity: isHovered ? "0.6" : "1" }}
            />
            <Card.Body>
              <Card.Title style={{
                color:"#ffba00"
              }}>TweeSent - Sentiment Analysis Of COVID’19 Tweets (IBM HACK CHALLENGE'20)</Card.Title>
              <Card.Text>
              <p 
                style={{
                  margin:0,
                  fontSize:14
                }}>
                  <i>Django, Python, JavaScript, Natural Language Processing (NLP), 
                    Tweepy, HTML, CSS, Machine Learning, TextBlob</i>
                </p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
          
              <ListGroup.Item style={{"background-color": "rgba(247, 247, 247, 0.4)",color:"#fff"}}>
                <Card.Link href="https://github.com/ROSDAD/Sentiment-Analysis-1.git" target="_blank">GitHub</Card.Link>
                <Card.Link href="https://www.youtube.com/watch?v=mIvGXdfe2J0" target="_blank">Youtube</Card.Link>
              </ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
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
  