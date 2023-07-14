/* eslint-disable @next/next/no-img-element */
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuButton from "../../components/MenuButton";
import { cortanaIcon, menuIcon, taskbarApps } from "../../utils/apps";
import Menu from "../Menu";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const prefix = '/MyPortfolio'

  return (
    <Box
      sx={(theme) => ({
        
        width: "100vw",
        height: 50,
        // backgroundColor: `${theme.palette.background.grey}D9`,
        backgroundColor: `rgba(229,229,229,0.6)`,
        backdropFilter: "blur(2px)",
        
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={0.5}
        sx={{ height: "100%", pl: 1.8 }}
        justifyContent= 'center'

      >
        <MenuButton onClick={handleClick}>
          <img src={menuIcon} alt="Start" style={{ height: 34 }} />
        </MenuButton>

        {/* <MenuButton>
          <img src={cortanaIcon} alt="Cortana" style={{ height: 23 }} />
        </MenuButton> */}

        {taskbarApps.map((app, i) => (
          <a target="_blank" href={app.Link} style={{color:"#fff",textDecoration:"none"}}>
          <MenuButton key={i}>
           
              <img key={i} src={app.icon} alt={app.name} style={{ height: 26 }} />
            
          </MenuButton>
          </a>
        ))}
      </Stack>

      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  );
};

export default MenuBar;
