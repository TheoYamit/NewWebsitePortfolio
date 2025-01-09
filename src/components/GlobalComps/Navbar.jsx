import { HomeSvg, ProjectSvg, ProgressSvg, ContactSvg } from "../../assets/NavbarSvgs/NavbarSvgs"
import { useNavigate } from "react-router";
import { useState } from 'react';
import profile from "../../assets/Pics/profile.jpg"

export function Navbar() {
  const [isActiveItem, setIsActiveItem] = useState("home");
  const navigate = useNavigate();

  function navigateToPage(item) {
    if (item === "home") {
      navigate('/');
      setIsActiveItem("home");
    }
    else if (item === "projects") {
      navigate('/Projects');
      setIsActiveItem("projects");
    }

    else if (item === "progress") {
      navigate('/Progress');
      setIsActiveItem("progress");
    }

    else if (item === "contact") {
      navigate('/Contact');
      setIsActiveItem("contact")
    }
  }

  return (
    <>
      <div className="flex flex-row justify-around items-center m-auto w-3/5 border-2 rounded-full pt-4 pb-2 mt-8">
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem === "home" ? '-translate-y-1' : 'none'}`} onClick={() => navigateToPage("home")}>
            <HomeSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center font-proximaBold ${isActiveItem == "home" ? 'visible':'invisible'}`}>
            Home
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "projects" ? '-translate-y-1': 'none'}`} onClick={() => navigateToPage("projects")}>
            <ProjectSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center font-proximaBold ${isActiveItem == "projects" ? 'visible text-project-blue':'invisible'}`}>
            Projects
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "progress" ? '-translate-y-1': 'none'}`} onClick={() => navigateToPage("progress")}>
            <ProgressSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center font-proximaBold ${isActiveItem == "progress" ? 'visible text-progress-green':'invisible'}`}>
            Progress
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "contact" ? '-translate-y-1': 'none'}`} onClick={() => navigateToPage("contact")}>
            <ContactSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center font-proximaBold ${isActiveItem == "contact" ? 'visible text-contact-orange':'invisible'}`}>
            Contact
          </div>
        </div>
      </div>
    </>
  )
};