/* eslint-disable @next/next/no-img-element */
import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Projects from "../../containers/Projects"

const AppButton = ({ id, left, top, name, icon }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  const [ProjectWindow, setProjectWindow] = useState(null);
  const open = Boolean(ProjectWindow);
  console.log(ProjectWindow)
  console.log(open)
  const handleClick = (e) => {
    setProjectWindow(e.currentTarget);
  };

  const handleClose = () => {
    console.log("in here")
    setProjectWindow(null);
  };

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div>
    <Button
      ref={drag}
      sx={{
        position: "absolute",
        left,
        top,
        color: "#fff",
        textTransform: "inherit",
        textShadow: "1px 4px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
      onClick={handleClick}
    >
      <Stack
        spacing={1}
        alignItems="center"
        sx={{ maxWidth: 50, textAlign: "center" }}
      >
        <img src={icon} alt={name} style={{ height: 30 }} />

        <Typography variant="caption">{name}</Typography>
      </Stack>
      
    </Button>
    <Projects open={open} ProjectWindow={ProjectWindow} handleClose={handleClose} />
    </div>
  );
};

export default AppButton;
