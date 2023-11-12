import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

const About = () => {
  return (
    <main
      id="about"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-10 lg:flex-row p-10"
    >
      <div className="w-full lg:w-1/2">
        <Image
          src="/main-photo.JPG"
          alt="Nathan's about photo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center h-full gap-2">
        <Reveal>
          <div className="text-5xl lg:text-7xl font-bold hover:text-indigo-500 transition duration-200 ease-in cursor-pointer">
            About Me
          </div>
        </Reveal>
        <Reveal>
          <div className="text-2xl lg:text-3xl text-center">
            Hello, I&apos;m Wray Nathan Andres, a dedicated web developer
            passionate about creating seamless digital experiences. With a track
            record of crafting web applications for various organizations, I
            thrive on exploring and applying diverse technologies to elevate my
            projects. I&apos;m committed to continuous learning, ensuring that
            my work reflects the latest industry advancements. Let&apos;s build
            something remarkable together.
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default About;