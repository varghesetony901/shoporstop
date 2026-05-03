"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

import gridLines from "@/assets/grid-lines.png";
import StarsBg from "@/assets/stars.png";
import Button from "@/components/Button";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const imageMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundImage: `url(${StarsBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: StarsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: "linear",
      }}
      className="py-20 md:py-24 "
    >
      <div className="container">
        <div
          ref={borderDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{ backgroundImage: `url(${StarsBg.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage: imageMask,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-xl mx-auto text-center font-medium tracking-tighter">
              Take Your Business To The Next Level
            </h2>
            <p className="text-center text-white/70 text-lg  px-4 mt-8 max-w-xl mx-auto">
              Whether you need a high-performing website, a stunning mobile app,
              or expert SEO strategies, we’re here to help you succeed.
            </p>
            <div className="flex justify-center pt-12">
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:support@adceleratex.com?subject=Inquiry")
                }
                className="cursor-pointer"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
