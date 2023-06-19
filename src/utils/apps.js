// System
import Battery from "../../public/icons/system/Battery.ico";
import Calendar from "../../public/icons/system/Calendar.ico";
import Folder from "../../public/icons/system/Folder.ico";
import Windows from "../../public/icons/system/Windows.ico";
import Cortana from "../../public/icons/system/Cortana.ico";
import Trash from "../../public/icons/system/Trash.ico";
import Signin from "../../public/icons/system/signin.ico"
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

export const desktopApps = [
  { name: "Skills", icon: Folder,btnTarget:"skills" },
  { name: "Projects", icon: Folder,btnTarget:"projects" },
  { name: "Experience", icon: Folder,btnTarget:"experience" },
  
  { name: "Certifications", icon: Folder,btnTarget:"certifications" },
  { name: "Activities", icon: Folder,btnTarget:"activities" },
  
  
  { name: "Contact Me", icon: ContactMe,btnTarget:"contactme" },
];

export const pinnedApps = [
  // { name: "Adobe Photoshop", icon: AdobePhotoshop },
  // { name: "Google Chrome", icon: Chrome },
  // { name: "Discord", icon: Discord },
  // { name: "Google Docs", icon: Docs },
  // { name: "Microsoft Edge", icon: Edge },
  // { name: "Email", icon: Email },
  // { name: "Git", icon: Git },
  // { name: "Node JS", icon: Nodejs },
  // { name: "Microsoft Word", icon: Word },
  // { name: "MS Paint", icon: Paint },
  // { name: "Popcorn Time", icon: PopcornTime },
  // { name: "Powershell", icon: Powershell },
  // { name: "Python", icon: Python },
  // { name: "Spotify", icon: Spotify },
  // { name: "Steam", icon: Steam },
  // { name: "Sticky Notes", icon: StickyNote },
  // { name: "VLC Player", icon: VLC },
  // { name: "VS Code", icon: VSCode },
  { name: "Github", icon: Github,Link: "https://github.com/ROSDAD" },
  { name: "Linkedin", icon: Linkedin,Link: "https://www.linkedin.com/in/roshan-dadlani/" },
  { name: "Google Scholar", icon: GoogleScholar,Link:"https://scholar.google.com/citations?user=B2TnCsYAAAAJ&hl=en&oi=sra" },
  { name: "Youtube", icon: Youtube,Link: "https://www.youtube.com/@roshandadlani" },
];

export const recommendedApps = [
  { name: "Google Chrome (1)", icon: Chrome },
  { name: "Discord (ROSDAD)", icon: Discord },
  { name: "Email (Gmail, Live, Yahoo)", icon: Email },
  { name: "VS Code (Editor)", icon: VSCode },
  { name: "Python (3.8.0)", icon: Python },
  { name: "Node JS (16.9.0)", icon: Nodejs },
];

export const taskbarApps = [
  { name: "Github", icon: Github,Link: "https://github.com/ROSDAD" },
  { name: "Linkedin", icon: Linkedin,Link: "https://www.linkedin.com/in/roshan-dadlani/" },
  { name: "Google Scholar", icon: GoogleScholar,Link:"https://scholar.google.com/citations?user=B2TnCsYAAAAJ&hl=en&oi=sra" },
  { name: "Youtube", icon: Youtube,Link: "https://www.youtube.com/@roshandadlani" },
];

export const cortanaIcon = Cortana;
export const menuIcon = Windows;
export const calendarIcon = Calendar;
export const batteryIcon = Battery;
export const SigninIcon = Signin;
