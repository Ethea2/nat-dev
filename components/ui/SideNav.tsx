"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const NUM_LINES = 35;
// Position key will place the title on the Nth
// line of the sidebar
const navItems = [
  { position: 2, title: "Main", path: "main" },
  { position: 8, title: "About Me", path: "about" },
  { position: 15, title: "Experience", path: "experience" },
  { position: 25, title: "Projects", path: "projects" },
  { position: 33, title: "Contact Me", path: "contact" },
];

interface NavItem {
  position: number;
  title: string;
}

interface LinkLineProps {
  mouseY: any;
  isHovered: boolean;
  title?: string | undefined;
  path?: string | undefined;
}

const SideNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.nav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-4 pl-8 z-20"
    >
      {Array.from(Array(NUM_LINES).keys()).map((i) => {
        const linkContent = navItems.find((item) => item.position === i + 1);

        return (
          <LinkLine
            title={linkContent?.title}
            isHovered={isHovered}
            mouseY={mouseY}
            key={i}
            path={linkContent?.path}
          />
        );
      })}
    </motion.nav>
  );
};

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 200,
  damping: 15,
};

const LinkLine = ({ mouseY, isHovered, title, path }: LinkLineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();

    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  // Styles for non-link lines
  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 100, 15]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  // Styles for link lines
  const linkWidth = useSpring(25, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(150);
    } else {
      linkWidth.set(25);
    }
  }, [isHovered]);

  if (title) {
    return (
      <Link href={`#${path}`}>
        <motion.div
          ref={ref}
          className="group relative bg-white transition-colors hover:bg-indigo-400"
          style={{ width: linkWidth, height: 2 }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-neutral-500 transition-colors group-hover:text-indigo-300"
              >
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        className="relative bg-white"
        style={{ width: lineWidth, height: 2 }}
      />
    );
  }
};

export default SideNav;
