import {
  useTheme,
  Stack,
  Snackbar,
  Alert
  

  
} from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { SigninIcon } from '../../utils/apps';
import lockscreenBg from '../../../public/lockscreen.jpg'
// import './lockscreen.scss'
const LockScreen = ({ open, handleClose, Transition }) => {
  const theme = useTheme();
  const [openALert, setOpenAlert] = React.useState(true);
  const [openLockscreen, setOpenLockscreen] = React.useState(true);
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  


var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
var days = [];
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months = []
months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentHours = d.getHours();
currentHours = ("0" + currentHours).slice(-2);
var currentMinutes = d.getMinutes();
currentMinutes = ("0" + currentMinutes).slice(-2);
  return (

      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
   <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${lockscreenBg})`,
          backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
          [theme.breakpoints.up("lg")]: {
            width: "100vw",
            height: "100vh",
          },
        }}
        onClick={handleClose}
      >
    <Snackbar
        // anchorOrigin={{ vertical, horizontal }}
        open={openALert}
        onClose={handleCloseAlert}
        
        // key={vertical + horizontal}
      >
        <Alert onClose={handleCloseAlert} severity="info" sx={{ width: '100%' }}>
          For the best experience use PC/Desktop
        </Alert>
        </Snackbar>   
    {/* <img
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Background})`,
          backgroundRepeat:"no-repeat",
            backgroundSize:"cover", }}
      src={lockscreenBg}
      alt="image"
    //   onClick={handleClose}
    /> */}
    <div style={{ width:"100%",position:"absolute",textAlign:"center",top:"10vh" }}>
        <h1 style={{margin:0,fontSize:"550%",fontFamily:"Segoe UI Light",fontWeight:"1000"}}>{currentHours}:{currentMinutes}</h1>
        <h6 style={{margin:0,fontSize:"140%",fontFamily:"Segoe UI Light",fontWeight:"1000"}}>{days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}</h6>
        
    </div>
    <div style={{ width:"100%",position:"absolute",textAlign:"center",top:"82vh"}}>
    <a href="#" onClick={handleClose}>    
    <img
      style={{ width:"40px",height:"40px" }}
      src={SigninIcon}
      alt="image"
    />
    </a>
    <br/>
    <h4 style={{margin:0,fontSize:"150%",fontFamily:"Segoe UI Light",fontWeight:"1000"}}>Click Anywhere To Unlock</h4>
    </div>
    </Stack>

      </Dialog>
  
  )
}

export default LockScreen