"use client";

import Reveal from "@/components/animations/Reveal";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import MainDetails from "./MainDetails";
const MainHeader = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(255,255,255,0)" }, { duration: 1.5 });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(255,255,255,1)" }, { duration: 0.15 });
  };

  return (
    <main className="bg-black w-full h-screen flex justify-center items-center text-white">
      <div
        ref={scope}
        className="absolute grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <MainDetails />
    </main>
  );
};

export default MainHeader;
