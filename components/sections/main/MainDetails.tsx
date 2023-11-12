import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

const MainDetails = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center p-20">
      <div
        id="main-details-container"
        className="flex flex-col p-4 text-left gap-4"
      >
        <div id="main-details-title" className="text-6xl font-bold">
          <Reveal>
            Hello, I&apos;m Nathan!
          </Reveal>
        </div>
        <div className="text-left w-full">
          <Reveal>
            I am an aspiring web developer hailing from Manila! I am currently
            studying in DLSU as a Bachelor of Science in Computer Science Major
            in Software Technology.
          </Reveal>
        </div>
      </div>
      <Image src={'/profile-picture.png'} width={1200} height={600} className="z-10" alt="Nathan's Profile Picture"/>
    </div>
  );
};

export default MainDetails;
