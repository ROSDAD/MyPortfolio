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
    Modal
    
  } from "@mui/material";
  import React, {useState} from "react";
  import { PowerSettingsNewIcon } from "@mui/icons-material/PowerSettingsNew";
  import CloseIcon from '@mui/icons-material/Close';
  import CropSquareIcon from '@mui/icons-material/CropSquare';
  import RemoveIcon from '@mui/icons-material/Remove';
  import SearchIcon from "@mui/icons-material/Search";
  import { pinnedApps, recommendedApps } from "../../utils/apps";
  import Folder from "../../../public/icons/system/Folder.ico";

  const Projects = ({ open, ProjectWindow, handleClose }) => {
    const theme = useTheme();
    
  
    // const handleClick = (e) => {
    //   setProjectWindow(e.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setProjectWindow(null);
    // };
    console.log(handleClose);
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
              {/* <Folder/> */}
              <img style={{ width: 18, height: 18,marginRight:10,marginBottom:4 }} src={Folder}/>

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
            p: 3,
            flex: 1,
            
            backgroundColor: `${theme.palette.background.grey}F7`,
            backdropFilter: "blur(5px)",
            border: "1px solid #525252",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
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
            sx={{ mb: 3 }}
          >
            {pinnedApps.map((app, i) => (
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
            sx={{ px: 2 }}
          >
            {recommendedApps.map((app, i) => (
              <Grid item key={app.name} xs={12} lg={6}>
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
                        Recently Added
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* User */}
        
      </Stack>
    );
  
    return (
      <Popover
        open={open}
        ProjectWindow={ProjectWindow}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{ vertical: "center", horizontal: "center" }}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
      keepMounted>
        <MenuContent />
        
        

      </Popover>
    );
  };
  
  export default Projects;
  