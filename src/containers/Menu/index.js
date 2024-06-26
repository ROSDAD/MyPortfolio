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
} from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import { pinnedApps, recommendedApps } from "../../utils/apps";
import LockScreen from "../Lockscreen";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Menu = ({ open, anchorEl, handleClose }) => {
  const theme = useTheme();
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const [openModal, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    handleClose();
    setOpen(true);
  };

  const handleCloseModal = () => {
    
    setOpen(false);
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
    <Stack
      sx={{
        width: "94vw",
        height: "90vh",
        [theme.breakpoints.up("lg")]: {
          width: "38vw",
          height: "90vh",
          maxHeight:780,
          maxWidth:638
        },
        [theme.breakpoints.up("md")]: {
          width: 500,
          height: "85vh",
          maxHeight:780,
          maxWidth:638
        },
        [theme.breakpoints.up("xs")]: {
          width: "94vw",
          height: "80vh",
          maxHeight:780,
          maxWidth:638
        },
       
        
      }}
    >
      {/* Apps */}
      <Box
        sx={{
          p: 3,
          flex: 1,
          backgroundColor: `${theme.palette.background.grey}F7`,
          backdropFilter: "blur(5px)",
          border: "1px solid #525252",
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          overflowY:"auto"
          // overflowY:"auto"
        }}
      >
        {/* Search */}
        <TextField
          variant="filled"
          fullWidth
          size="small"
          hiddenLabel
          sx={{
            pb: { xs: 2, lg: 4 },
            "& .MuiFilledInput-root": {
              background: "rgba(0,0,0,0.3)",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/* Pinned Text */}
        <MenuLabel title="Pinned" buttonText="All Apps >" />

        {/* Pinned Apps */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{ mb: 3,
          overflowY:"auto" }}
        >
          {pinnedApps.map((app, i) => (
            <a target="_blank" href={app.Link} style={{ color:"#fff",textDecoration:"none"}}>
            <Button
              key={app.name}
              
              sx={{
                height: 85,
                minWidth: 98,
                width: 98,
                color: "#fff",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              
              <Stack
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >

                    <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                  
                <Typography variant="caption">{app.name}</Typography>
              </Stack>
              
            </Button>
            </a>
          ))}
        </Stack>

        {/* Recommended Text */}
        <MenuLabel title="Recommended" buttonText="More >" />

        {/* Recommended Apps */}
        
        <Grid
          container
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          spacing={2}
          sx={{ 
          px: 2,
          overflowY:"auto"
         }}

          
        >
          {recommendedApps.map((app, i) => (
            <Grid item key={app.name} xs={12} lg={6}>
              <a target="_blank" href={app.Link} style={{color:"#fff",textDecoration:"none"}}>
              <Button
                fullWidth
                sx={{
                  py: 1,
                  px: 2,
                  justifyContent: "flex-start",
                  textTransform: "inherit",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                
                <Stack direction="row" alignItems="center" spacing={2}>
                
                  <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                
                  <Stack alignItems="flex-start">
                    <Typography variant="caption" sx={{ color: "#fff" }}>
                      {app.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: theme.palette.primary.light }}
                    >
                      {app.subtext}
                    </Typography>
                  </Stack>
                </Stack>
                
              </Button>
              </a>
            </Grid>
          ))}
          
        </Grid>
        
      </Box>

      {/* User */}
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
          sx={{ px: { xs: 2, lg: 4 } }}

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
            <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} />
            <Typography>Roshan</Typography>
          </Button>

          <IconButton size="small" onClick={handleClickOpen}>
            <PowerSettingsNewIcon fontSize="small" />
          </IconButton>
          <LockScreen open={openModal} handleClose={handleCloseModal} Transition={Transition}/>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      transformOrigin={{ vertical: "bottom", horizontal: 130 }}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
      style={{overflowY:"hidden"}}
      keepMounted
    >
      <MenuContent />
      
    </Popover>
  );
};

export default Menu;
