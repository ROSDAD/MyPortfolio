import { Box } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { useDrop } from "react-dnd";
import AppButton from "../../components/AppButton";
import { desktopApps } from "../../utils/apps";
import Projects from "../Projects";

const Apps = () => {
  const [apps, setApps] = useState({});

  useEffect(() => {
    const _apps = {};
    const count = 0;
    const leftoffset = 0;
    const topoffset = 0;
    desktopApps.map((app, i) => { 
      
    
      
      
      // console.log(screen.height - (topoffset * 100 + 20));
      if(i!=0){
      if((screen.height - (topoffset * 100 + 20)) < 400 ){
          leftoffset++;
          topoffset = 0;
       
      }else{
        
        topoffset++
        }
      }
     
      _apps[app.name] = {
        left: leftoffset*80 + 20,
        top: topoffset * 100 + 20,
        name: app.name,
        icon: app.icon,
        btnTarget:app.btnTarget
      };
    
    });

    setApps(_apps);
  }, []);

  const moveBox = useCallback(
    (id, left, top) => {
      setApps((old) => {
        const _apps = { ...old };
        _apps[id] = { ..._apps[id], left, top };

        return _apps;
      });
    },
    [setApps]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <Box
      ref={drop}
      sx={{ width: "100%", height: "100%", position: "relative"}}
    >
      {Object.keys(apps).map((key) => {
        const { left, top, name, icon,btnTarget } = apps[key];


        return (
          <AppButton
            key={key}
            id={key}
            left={left}
            top={top}
            name={name}
            icon={icon}
            btnTarget={btnTarget}
          />
        );
      })}
    </Box>
  );
};

export default Apps;
