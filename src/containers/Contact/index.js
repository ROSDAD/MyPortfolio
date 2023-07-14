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
    
    Slide

    
  } from "@mui/material";
  import React, {useState,useEffect,useRef} from "react";
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";
  // import Background from "../../../public/contactme.jpg";
  import Background from "../../../public/projectBackground.png";
  import { Row, Col,Card,CardDeck,CardBody,Container,Link,Icon, Form,Alert } from 'react-bootstrap';
  import emailjs from 'emailjs-com';
  import ContactMeIcon from "../../../public/icons/apps/Contact Me.ico"
  // import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
  // import { CaptchaJs } from "@solarwinter/captchajs";

  
  const Contact = ({ open, ProjectWindow, handleClose }) => {
    const theme = useTheme();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [dangerShow, setDangerShow] = useState(false);
    
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
  
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_4qyi368',
          'template_bl0fmth',
          form.current,
          'sgNWQhiLZgCVy5ptJ'
        )
        .then(
          (result) => {
           
            console.log(result.text);
            setShow(true);
           form.current.reset();
          },
          (error) => {
            alert('There was an Error! Please Try again!');
            console.log(error.text);
          }
        );
    };
const SuccessAlert = () => {
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Success!</Alert.Heading>
        <p>
          We have informed Roshan that were around and meaning to have a chat. Roshan will reach back to you on your Email!
        </p>
      </Alert>
    );
  }else{
    return ("")
  }
};
const DangerAlert = () => {
  if (dangerShow) {
    return (
      <Alert variant="danger" onClose={() => setDangerShow(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>
          There was an Unexpected Error! Please Try Again!
        </p>
      </Alert>
    );
  }else{
    return ("")
  }
};

    const MenuContent = () => (
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${Background['src']})`,
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
              <img style={{ width: 18, height: 18,marginRight:10 }} src={ContactMeIcon["src"]}/>

              {/* <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} /> */}
              <Typography>Contact Me</Typography>
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
            // background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background})`,
            backdropFilter: "blur(15px)",
            border: "1px solid #525252",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            overflowY:"auto",
            height:"100%"
          }}
        >
          
          <Container style={{"max-width":"600px",}}>
          
      <Card style={{  margin:"auto",
      // backgroundColor:"transparent",
      color:"#fff",
      backdropFilter: "blur(15px)",
    backgroundColor:"rgba(50, 50, 50, 0.5)",
    borderRadius:"20px",
    }}>
      
        <SuccessAlert/>
        <DangerAlert/>
        <Card.Body>
          <h3>Contact Me</h3>
        <Form id="contact-form" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name<span style={{color:"red"}}>*</span></Form.Label>
            <Form.Control   name="from_name" type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address<span style={{color:"red"}}>*</span></Form.Label>
            <Form.Control   name="reply_mail" type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message<span style={{color:"red"}}>*</span></Form.Label>
            <Form.Control  name="message" as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <div style={{
          
          textAlign:"center"}}>
          <Button style={{
          backgroundColor:"#fdd166",
          color:"#fff"}} type="submit">
            Submit
          </Button>
          </div>
        </Form>
        <div style={{textAlign:"center"}}>
        <a>OR</a>
        <h6>Email: <a href="mailto:dadlani.r@northeastern.edu">dadlani.r@northeastern.edu</a></h6>
        </div>
        </Card.Body>
        </Card>
      
      
    </Container>
          
          
        </Box>
  
        
        
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
  
  export default Contact;
  