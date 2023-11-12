import TechStacks from "../about/TechStacks";
import Experiences from "../about/Experiences";

const ExperienceSection = () => {
  return (
    <main
      id="experience"
      className="w-full min-h-screen flex flex-col justify-start items-center p-10"
    >
      <TechStacks />
      <Experiences />
    </main>
  );
};

export default ExperienceSection;
