import { GrReactjs } from "react-icons/gr";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiGo, SiMongodb, SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Reveal from "@/components/animations/Reveal";

const TechStacks = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-center lg:justify-start w-[100%] ">
        <Reveal>
          <div className="text-5xl lg:text-7xl font-bold">Tech Stacks</div>
        </Reveal>
      </div>
      <div className=" flex flex-wrap text-7xl lg:text-[180px] text-white mt-5 w-[55%] gap-5 lg:gap-10 justify-center items-center">
        <Reveal>
          <SiMongodb className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <SiExpress className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <GrReactjs className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <FaNodeJs className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <TbBrandNextjs className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <SiGo className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
        <Reveal>
          <SiVite className="hover:text-indigo-500 transition ease-in duration-200" />
        </Reveal>
      </div>
    </div>
  );
};

export default TechStacks;
