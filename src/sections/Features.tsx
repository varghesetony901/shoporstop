"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import CenteredCircle from "@/components/CenteredCircle";
import { twMerge } from "tailwind-merge";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import nextjsLogo from "../assets/images/next.png";
import nodejsLogo from "../assets/images/node.png";
import tailwindLogo from "../assets/images/tailwind.png";
import typescriptLogo from "../assets/images/typescript.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";

const pricingTiers = [
  {
    title: "Web Development",
    description: "Crafting Engaging and High-Performing Websites",
    buttonText: "Build a website that drives growth. Let’s make it happen!",
    features: [
      "Tailored websites that reflect your brand identity",
      "Seamless experiences across all devices",
      "Fast-loading websites with a focus on user experience",

      "Scalable and secure",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Mobile App Development",
    description: "Intuitive Apps for the Mobile-First World",

    buttonText: "Turn your vision into a mobile app. Let’s start today!",
    features: [
      "Stunning apps for iOS and Android",
      "Intuitive interfaces for better engagement",
      "Easily connects with existing systems and APIs",
      "Optimized for speed and reliability",
      " Push notifications, geolocation, and offline capabilities",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "SEO",
    description: "Rank Higher, Reach Wider, and Grow Smarter",

    buttonText: "Boost your online visibility with expert SEO strategies!",
    features: [
      "Well-structured content and metadata",
      "Website audit, speed optimization, and mobile-friendliness",
      "Targeting the right audience with the right keywords",
      "Engaging blogs and landing pages",
      "Track progress with actionable insights",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;

  buttonText: string;
  features: string[];
  color: string;
  className: string;
}[];

const logos = [
  {
    src: nextjsLogo,
    alt: "nextjs logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: typescriptLogo,
    alt: "typescript logo",
    rotate: 225,
  },
  {
    src: nodejsLogo,
    alt: "nodejs logo",
    rotate: 270,
  },
  {
    src: tailwindLogo,
    alt: "tailwind logo",
    rotate: 315,
  },
];

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selectedTab]);

  return (
    <section className="py-10 md:py-14">
      <div id="features" className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter ">
          Explore Our Expertise
        </h2>
        <p className=" text-white/70 text-lg text-center  mt-5 max-w-2xl mx-auto">
          Explore a suite of powerful features designed to deliver outstanding
          digital experiences across web and mobile platforms.
        </p>

        <div className=" flex flex-col gap-2.5">
          <div className="mt-12 flex flex-col lg:flex-row gap-4 items-start">
            {pricingTiers.map((tier, index) => (
              <div
                onClick={() => setSelectedTab(index)}
                ref={tabRef}
                key={tier.title}
                className={twMerge(
                  "border border-[var(--color-border)] rounded-xl px-6 py-12 max-w-sm mx-auto flex-1 relative"
                )}
              >
                {selectedTab === index && (
                  <motion.div
                    className="absolute inset-0 border border-[#A369FF] rounded-xl -mx-px"
                    style={{ maskImage }}
                  ></motion.div>
                )}
                <h3
                  className={twMerge(
                    "font-semibold text-4xl lg:min-h-20",
                    tier.color === "violet" && "text-violet-400",
                    tier.color === "teal" && "text-white",
                    tier.color === "amber" && "text-yellow-400"
                  )}
                >
                  {tier.title}
                </h3>
                <p className="mt-4 mb-6 text-gray-400 lg:min-h-12">
                  {tier.description}
                </p>

                <h4
                  className={twMerge(
                    "border p-2 rounded-xl text-base",
                    tier.color === "violet" && "border-violet-400/40",
                    tier.color === "teal" && "border-white/30",
                    tier.color === "amber" && "border-yellow-400/40"
                  )}
                >
                  {tier.buttonText}
                </h4>
                <ul className="flex flex-col gap-y-4 mt-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-t border-[var(--color-border)] pt-4 flex gap-4"
                    >
                      <CircleCheck className="size-6 text-violet-400 flex-shrink-0" />

                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center flex-shrink-0 pt-32 pb-14 container overflow-hidden ">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-medium  tracking-tighter max-w-xl">
            Tools That Power Innovation
          </h2>
          <p className=" text-white/70 text-lg my-8 max-w-xl lg:max-w-2xl mx-auto">
            Empowering creativity and progress with cutting-edge tools designed
            to transform ideas into reality. Drive innovation, streamline
            workflows, and achieve exceptional results effortlessly.
          </p>
        </div>

        <div className="flex justify-center flex-shrink-0 lg:w-[500px]">
          <div className="size-[270px] md:size-[380px]  lg:size-[450px] relative flex flex-shrink-0">
            <div className="absolute inset-0">
              <CenteredCircle className="size-full" />
            </div>
            <div className="absolute-center">
              <CenteredCircle className="size-[180px] md:size-[220px] lg:size-[300px]" />
            </div>
            <div className="absolute-center">
              <div className="h-auto inline-flex ">
                <div className="text-[21px] lg:text-[22px] font-bold tracking-wide ">
                  Adcelerate
                </div>
                <div className="text-[21px] lg:text-[22px] font-bold tracking-wide text-yellow-400 ">
                  X
                </div>
              </div>
            </div>
            {logos.map(({ src, alt, rotate }) => (
              <motion.div
                key={alt}
                className="absolute inset-0"
                initial={{ rotate: rotate }}
                animate={{
                  rotate: [
                    rotate,
                    rotate + 45,
                    rotate + 45,
                    rotate + 90,
                    rotate + 90,
                    rotate + 135,
                    rotate + 135,
                    rotate + 180,
                    rotate + 180,
                    rotate + 225,
                    rotate + 225,
                    rotate + 270,
                    rotate + 270,
                    rotate + 315,
                    rotate + 315,
                    rotate + 360,
                    rotate + 360,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                }}
              >
                <motion.div
                  className="inline-flex size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2  bg-gray-950"
                  initial={{
                    translate: "-50% -50%",
                    rotate: -rotate,
                  }}
                  animate={{
                    rotate: [
                      -rotate,
                      -rotate - 45,
                      -rotate - 45,
                      -rotate - 90,
                      -rotate - 90,
                      -rotate - 135,
                      -rotate - 135,
                      -rotate - 180,
                      -rotate - 180,
                      -rotate - 225,
                      -rotate - 225,
                      -rotate - 270,
                      -rotate - 270,
                      -rotate - 315,
                      -rotate - 315,
                      -rotate - 360,
                      -rotate - 360,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                  }}
                >
                  <Image src={src} alt={alt} className="size-6 md:size-9" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
