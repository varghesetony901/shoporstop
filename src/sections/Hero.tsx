"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Button from "@/components/Button";
import StarsBg from "@/assets/stars.png";
import Link from "next/link";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: StarsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: "linear",
      }}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.1)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* start planet*/}
      <div
        className="absolute size-28 md:size-36 lg:size-44 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
       bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] "
      ></div>
      {/* end planet*/}
      {/* start ring1*/}

      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        style={{ translateY: "-50%", translateX: "-50%" }}
        className="absolute h-[344px] w-[344px] md:h-[480px] md:w-[480px] lg:h-[580px] lg:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-4 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-5  rounded-full top-1/2 left-full border border-white/ -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* end ring1*/}
      {/* start ring2*/}
      <motion.div
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        style={{ translateY: "-50%", translateX: "-50%" }}
        className="absolute w-[444px] h-[444px] md:h-[680px] md:w-[680px] lg:h-[780px] lg:w-[780px] border-dashed rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      {/* end ring2*/}
      {/* start ring3*/}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 150,
          ease: "linear",
        }}
        style={{ translateY: "-50%", translateX: "-50%" }}
        className="absolute w-[544px] h-[544px] md:h-[880px] md:w-[880px] lg:h-[980px] lg:w-[980px] rounded-full border border-white  opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-4 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* end ring1*/}

      <div className="container relative mt-28">
        <h2 className=" text-center text-[50px] md:text-[70px] lg:text-[100px] leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          Adcelerate<span className="text-yellow-500">X</span>
        </h2>
        <h1 className="text-center text-base tracking-widest font-semibold">
          BUILDING TOMORROW&apos;S DIGITAL SOLUTIONS TODAY
        </h1>

        <div className="flex justify-center items-center mt-6 md:mt-16">
          <Link href={"#features"}>
            <Button className="cursor-pointer">Get Started</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
