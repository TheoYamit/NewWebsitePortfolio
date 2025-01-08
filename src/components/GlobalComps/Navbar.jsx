import { ProjectSvg, ProgressSvg, ContactSvg } from "../../assets/NavbarSvgs/NavbarSvgs"
import { useNavigate } from "react-router";
import { useState } from 'react';
import profile from "../../assets/Pics/profile.jpg"

export function Navbar() {
  const [isActiveItem, setIsActiveItem] = useState(false);
  const navigate = useNavigate();

  function navigateToPage(item) {
    if (item === "projects") {
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
      <div className="flex flex-row justify-evenly m-auto w-3/5">
        <div className="flex flex-col">
          <div className="rounded-full w-10 h-10">
            <img className="rounded-full" src={profile}/>
          </div>
          <div>Theo</div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "projects" ? '-translate-y-1.5': 'none'}`} onClick={() => navigateToPage("projects")}>
            <ProjectSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center ${isActiveItem == "projects" ? 'visible text-project-blue':'invisible'}`}>
            Projects
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "progress" ? '-translate-y-1.5': 'none'}`} onClick={() => navigateToPage("progress")}>
            <ProgressSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center ${isActiveItem == "progress" ? 'visible text-progress-green':'invisible'}`}>
            Progress
          </div>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className={`${isActiveItem == "contact" ? '-translate-y-1.5': 'none'}`} onClick={() => navigateToPage("contact")}>
            <ContactSvg isActiveItem={isActiveItem}/>
          </div>
          <div className={`text-center ${isActiveItem == "contact" ? 'visible text-contact-orange':'invisible'}`}>
            Contact
          </div>
        </div>
      </div>
    </>
  )
};