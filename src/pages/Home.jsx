import { HeroHome } from "../components/HomeComps/Hero";
import { AboutMe } from "../components/HomeComps/AboutMe";
import { ProjectPreview } from "../components/HomeComps/ProjectPreview";
import { CurrentFocus } from "../components/HomeComps/CurrentFocus";
export function Home() {
  return (
    <>
      <HeroHome/>
      <AboutMe/>
      <ProjectPreview/>
      <CurrentFocus/>
    </>
  );
};
