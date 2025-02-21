/* eslint-disable @next/next/no-img-element */
import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import Projects from "../../containers/Projects";
import Skills from "../../containers/Skills";
import Experience from "../../containers/Experience";
import Activities from "../../containers/Activities";
import Certifications from "../../containers/Certifications";
import Contact from "../../containers/Contact";
import Education from "../../containers/Education";


const AppButton = ({ id, left, top, name, icon,btnTarget }) => {
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
  const [SkillsWindow, setSkillsWindow] = useState(null);
  const [ExperienceWindow, setExperienceWindow] = useState(null);
  const [CertificationsWindow, setCertificationsWindow] = useState(null);
  const [ActivitiesWindow, setActivitiesWindow] = useState(null);
  const [ContactWindow, setContactWindow] = useState(null);
  const [EducationWindow, setEducationWindow] = useState(null);
  
  const openProjectWindow = Boolean(ProjectWindow);
  const openSkillsWindow = Boolean(SkillsWindow);
  const openExperienceWindow = Boolean(ExperienceWindow);
  const openCertificationsWindow = Boolean(CertificationsWindow);
  const openActivitiesWindow = Boolean(ActivitiesWindow);
  const openContactWindow = Boolean(ContactWindow);
  const openEducationWindow = Boolean(EducationWindow);
  
  const handleClick = (e) => {

    
    if(btnTarget === "projects"){
      setProjectWindow(e.currentTarget);
    }
    else if(btnTarget === "skills"){
      setSkillsWindow(e.currentTarget);
    }
    else if(btnTarget === "experience"){
      setExperienceWindow(e.currentTarget);
    }
    else if(btnTarget === "certifications"){
      setCertificationsWindow(e.currentTarget);
    }
    else if(btnTarget === "activities"){
      setActivitiesWindow(e.currentTarget);
    }
    else if(btnTarget === "contactme"){
      setContactWindow(e.currentTarget);
    }else if(btnTarget === "resume"){
      window.open(
        'https://drive.google.com/file/d/1hy5NVFDBTKZ4CxFeyvnZ8JIjNBj7xp5t/view?usp=drive_link',
        '_blank' 
      );
      
    }else if(btnTarget === "education"){
      setEducationWindow(e.currentTarget);
    }
  };

  const handleClose = () => {
    

    setProjectWindow(null);
    setSkillsWindow(null);
    setExperienceWindow(null);
    setCertificationsWindow(null);
    setActivitiesWindow(null);
    setContactWindow(null);
    setEducationWindow(null);
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
        <img src={icon} alt={name} style={{ height: 35 }} />

        <Typography variant="caption">{name}</Typography>
      </Stack>
      
    </Button>
    <Projects open={openProjectWindow} ProjectWindow={ProjectWindow} handleClose={handleClose} />
    <Skills open={openSkillsWindow} SkillsWindow={SkillsWindow} handleClose={handleClose} />
    <Experience open={openExperienceWindow} ExperienceWindow={ExperienceWindow} handleClose={handleClose} />
    <Certifications open={openCertificationsWindow} CertificationsWindow={CertificationsWindow} handleClose={handleClose} />
    <Activities open={openActivitiesWindow} ActivitiesWindow={ActivitiesWindow} handleClose={handleClose} />
    <Contact open={openContactWindow} ContactWindow={ContactWindow} handleClose={handleClose} />
    <Education open={openEducationWindow} EducationWindow={EducationWindow} handleClose={handleClose} />
    
    </div>
  );
};

export default AppButton;
