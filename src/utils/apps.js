// System
import Battery from "../../public/icons/system/Battery.ico";
import Calendar from "../../public/icons/system/Calendar.ico";
import Folder from "../../public/icons/system/Folder.ico";
import Windows from "../../public/icons/system/Windows.ico";
import Cortana from "../../public/icons/system/Cortana.ico";
import Trash from "../../public/icons/system/Trash.ico";
import Signin from "../../public/icons/system/signin.png";
import Skills from "../../public/icons/system/skills.ico";
import Projects from "../../public/icons/system/projects.ico";
import PDF from "../../public/icons/system/PDF1.ico";
import Activities from "../../public/icons/system/activities.ico";
import Experience from "../../public/icons/system/experience.ico";
import Certifications from "../../public/icons/system/certifications.ico";
import Education from "../../public/icons/apps/Education.ico";
// Apps
import AdobePhotoshop from "../../public/icons/apps/AdobePhotoshop.ico";
import Chrome from "../../public/icons/apps/Chrome.ico";
import Discord from "../../public/icons/apps/Discord.ico";
import Docs from "../../public/icons/apps/Docs.ico";
import Edge from "../../public/icons/apps/Edge.ico";
import Email from "../../public/icons/apps/Email.ico";
import Git from "../../public/icons/apps/Git.ico";
import Nodejs from "../../public/icons/apps/Nodejs.ico";
import Paint from "../../public/icons/apps/Paint.ico";
import PopcornTime from "../../public/icons/apps/PopcornTime.ico";
import Powershell from "../../public/icons/apps/Powershell.ico";
import Python from "../../public/icons/apps/Python.ico";
import Spotify from "../../public/icons/apps/Spotify.ico";
import Steam from "../../public/icons/apps/Steam.ico";
import StickyNote from "../../public/icons/apps/StickyNote.ico";
import VLC from "../../public/icons/apps/VLC.ico";
import VSCode from "../../public/icons/apps/VSCode.ico";
import Word from "../../public/icons/apps/Word.ico";
import Github from "../../public/icons/apps/Github.ico"
import Linkedin from "../../public/icons/apps/Linkedin.ico"
import Youtube from "../../public/icons/apps/Youtube.ico"
import GoogleScholar from "../../public/icons/apps/Google Scholar.ico"
import ContactMe from "../../public/icons/apps/Contact Me.ico"
import Slack from "../../public/icons/apps/Slack.ico"
import Instagram from "../../public/icons/apps/Instagram.ico"
import Outlook from "../../public/icons/apps/Outlook.ico"

import angularJs from "../../public/icons/skills/angularjs.png"
import aws from "../../public/icons/skills/aws.png"
import azure from "../../public/icons/skills/azure.png"
import bootstrap from "../../public/icons/skills/bootstrap.png"
import cProg from "../../public/icons/skills/c.png"
import css from "../../public/icons/skills/css.png"
import dfs from "../../public/icons/skills/dfs.png"
import django from "../../public/icons/skills/django.png"
import docker from "../../public/icons/skills/docker.png"
import etl from "../../public/icons/skills/etl.png"
import expressJs from "../../public/icons/skills/expressjs.png"
import flask from "../../public/icons/skills/flask.png"
import git from "../../public/icons/skills/git.png"
import html from "../../public/icons/skills/html.png"
import Javascript from "../../public/icons/skills/Javascript.png"
import jquery from "../../public/icons/skills/jquery.png"
import kali from "../../public/icons/skills/kali.png"
import laravel from "../../public/icons/skills/laravel.png"
import linux from "../../public/icons/skills/linux.png"
import macos from "../../public/icons/skills/macos.png"
import mongodb from "../../public/icons/skills/mongodb.png"
import mysql from "../../public/icons/skills/mysql.png"
import nodeJs from "../../public/icons/skills/nodejs.png"
import php from "../../public/icons/skills/php.png"
import python from "../../public/icons/skills/python.png"
import reactJs from "../../public/icons/skills/reactjs.png"
import restapi from "../../public/icons/skills/restapi.png"
import springboot from "../../public/icons/skills/springboot.png"
import sql from "../../public/icons/skills/sql.png"
import windows from "../../public/icons/skills/windows.png"
import uipath from "../../public/icons/skills/uipath.png"



export const desktopApps = [
  { name: "Education", icon: Education,btnTarget:"education" },
  { name: "Skills", icon: Skills,btnTarget:"skills" },
  { name: "Projects", icon: Projects  ,btnTarget:"projects" },
  { name: "Experience", icon: Experience,btnTarget:"experience" },
  
  { name: "Certifications", icon: Certifications,btnTarget:"certifications" },
  { name: "Activities", icon: Activities,btnTarget:"activities" },
  
  
  { name: "Contact Me", icon: ContactMe,btnTarget:"contactme" },
  { name: "Resume", icon: PDF,btnTarget:"resume" },
];
const domain = window.location.hostname;
export const pinnedApps = [
  { name: "Resume", icon: PDF,Link: "https://drive.google.com/file/d/1PSUacxh9CB_B-cKieMgHopbDRYnomsUw/view?usp=sharing" },
  { name: "Github", icon: domain + Github,Link: "https://github.com/ROSDAD" },
  { name: "Linkedin", icon: Linkedin,Link: "https://www.linkedin.com/in/roshan-dadlani/" },
  { name: "Scholar", icon: GoogleScholar,Link:"https://scholar.google.com/citations?user=B2TnCsYAAAAJ&hl=en&oi=sra" },
  { name: "Youtube", icon: Youtube,Link: "https://www.youtube.com/@roshandadlani" },
  
  
];

export const recommendedApps = [
  
  { name: "Linkedin", icon: Linkedin,Link: "https://www.linkedin.com/in/roshan-dadlani/", subtext:"@roshan-dadlani" },
  { name: "Slack", icon: Slack,Link: "https://acmeco.slack.com/team/U042F3WRYJK", subtext:"@ROSDAD" },
  { name: "Outlook", icon: Outlook,Link: "mailto:dadlani.r@northeastern.edu", subtext:"@Roshan Dadlani" },
  { name: "Discord", icon: Discord,Link: "https://discord.gg/TnZrHTyUPu", subtext:"@ROSDAD" },
  { name: "Instagram", icon: Instagram,Link: "https://www.instagram.com/roshan_dadlani/", subtext:"@roshan_dadlani" },
  { name: "Spotify", icon: Spotify,Link: "https://open.spotify.com/user/31nlhpj2gedrnkg2k6zvzsoghq6q?si=4a0179392f2b4f70", subtext:"@Roshan Dadlani" },
  
  
];

export const taskbarApps = [
  { name: "Github", icon: Github,Link: "https://github.com/ROSDAD" },
  { name: "Linkedin", icon: Linkedin,Link: "https://www.linkedin.com/in/roshan-dadlani/" },
  { name: "Scholar", icon: GoogleScholar,Link:"https://scholar.google.com/citations?user=B2TnCsYAAAAJ&hl=en&oi=sra" },
  { name: "Youtube", icon: Youtube,Link: "https://www.youtube.com/@roshandadlani" },
  { name: "Slack", icon: Slack,Link: "https://acmeco.slack.com/team/U042F3WRYJK" },
  { name: "Discord", icon: Discord,Link: "https://discord.gg/TnZrHTyUPu" },
];


export const programmingLanguages = [
  { name: "Python", icon: python,bgColor: "#fff",tColor:"#000" },
  { name: "JavaScript", icon: Javascript,bgColor: "#fff",tColor:"#000"},
  { name: "C/C++", icon: cProg,bgColor: "#fff",tColor:"#000"},
  { name: "HTML", icon: html,bgColor: "#fff",tColor:"#000"},
  { name: "CSS", icon: css,bgColor: "#fff",tColor:"#000" },
  { name: "SQL", icon: sql,bgColor: "#fff",tColor:"#000" },
  { name: "JQuery", icon: jquery,bgColor: "#fff",tColor:"#000" },
  { name: "PHP", icon: php,bgColor: "#fff",tColor:"#000"},
];

export const frameworks = [
  { name: "Bootstrap", icon: bootstrap,bgColor: "#fff",tColor:"#000" },
  { name: "Laravel", icon: laravel,bgColor: "#fff",tColor:"#000" },
  { name: "Django", icon: django,bgColor: "#fff",tColor:"#000" },
  { name: "Flask", icon: flask,bgColor: "#fff",tColor:"#000" },
  { name: "MVC", icon: "",bgColor: "#fff",tColor:"#000" },
  { name: "Spring Boot", icon: springboot,bgColor: "#fff",tColor:"#000" },
  { name: "Express.js", icon: expressJs,bgColor: "#fff",tColor:"#000" },
  { name: "AngularJS", icon: angularJs,bgColor: "#fff",tColor:"#000" },
  { name: "React.js", icon: reactJs,bgColor: "#fff",tColor:"#000" },
  { name: "Node.js", icon: nodeJs,bgColor: "#fff",tColor:"#000" },

];

export const dataManagement = [
  { name: "MySQL", icon: mysql,bgColor: "#fff",tColor:"#000" },
  { name: "DFS", icon: dfs,bgColor: "#fff",tColor:"#000" },
  { name: "NoSQL", icon: "",bgColor: "#fff",tColor:"#000" },
  { name: "MongoDB", icon: mongodb,bgColor: "#fff",tColor:"#000" },
  { name: "ETL", icon: etl,bgColor: "#fff",tColor:"#000" },
];

export const operatingSystems = [
  { name: "Linux", icon: linux,bgColor: "#fff",tColor:"#000" },
  { name: "Unix", icon: "",bgColor: "#fff",tColor:"#000" },
  { name: "Kali Linux", icon: kali,bgColor: "#fff",tColor:"#000" },
  { name: "Windows", icon: windows,bgColor: "#fff",tColor:"#000" },
  { name: "MacOS", icon: macos,bgColor: "#fff",tColor:"#000" },
];

export const others = [
  { name: "Git", icon: git,bgColor: "#fff",tColor:"#000" },
  { name: "AWS", icon: aws,bgColor: "#fff",tColor:"#000" },
  { name: "Azure", icon: azure,bgColor: "#fff",tColor:"#000" },
  { name: "Rest API", icon: restapi,bgColor: "#fff",tColor:"#000" },
  { name: "Docker", icon: docker,bgColor: "#fff",tColor:"#000" },
  { name: "UiPath", icon: uipath,bgColor: "#fff",tColor:"#000" },
];

export const cortanaIcon = Cortana;
export const menuIcon = Windows;
export const calendarIcon = Calendar;
export const batteryIcon = Battery;
export const SigninIcon = Signin;
