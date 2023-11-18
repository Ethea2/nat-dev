import Reveal from "@/components/animations/Reveal";
import { experiences, ExperienceType } from "@/constants/experiences";

const Experiences = () => {
  return (
    <div className="w-full flex flex-col mt-10 min-h-full">
      <div className="text-5xl lg:text-7xl font-bold w-full text-center lg:text-left mb-10">
        Experiences
      </div>

      <div className="w-full flex-wrap flex flex-col justify-evenly lg:flex-row gap-10">
        {experiences.map((experience: ExperienceType, index: number) => (
          <div className=" flex flex-col lg:w-1/4 w-full" key={index}>
            <Reveal>
              <div className="font-semibold text-4xl">{experience.company}</div>
            </Reveal>
            <Reveal>
              <div className="text-2xl">{experience.position}</div>
            </Reveal>
            <Reveal>
              <div className="text-justify">
                {experience.description}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
