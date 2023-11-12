import Reveal from "@/components/animations/Reveal";
import { experiences, ExperienceType } from "@/constants/experiences";

const Experiences = () => {
  return (
    <div className="w-full flex flex-col mt-10">
      <div className="text-5xl lg:text-7xl font-bold w-full text-center lg:text-left mb-10">
        Experiences
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10">
        {experiences.map((experience: ExperienceType) => (
          <div className="lg:pl-10 flex flex-col">
            <Reveal>
              <div className="font-semibold text-4xl">{experience.company}</div>
            </Reveal>
            <Reveal>
              <div className="text-2xl">{experience.position}</div>
            </Reveal>
            <Reveal>
              <div>
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
