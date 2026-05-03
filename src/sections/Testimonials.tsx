"use client";
import { motion } from "framer-motion";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

import tony from "@/assets/tony.png";
import jomy from "@/assets/jomy.png";
import bijith from "@/assets/bijith.png";
import kora from "@/assets/korah.png";
import elsa from "@/assets/elsa.png";

import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "“Working with this team transformed our business. The innovative approach and attention to detail exceeded all expectations. Highly recommended!”",
    name: "Elsa Tony",
    title: "Director @ Quantum Tech",
    avatarImg: elsa,
  },
  {
    text: "“Every dollar spent has delivered incredible ROI. They truly care about their clients and their success.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“We saw a huge improvement in SEO rankings within just a few weeks. Their insights and execution are simply outstanding!”",
    name: "Luka Tony",
    title: "Director @ Traffica",
    avatarImg: tony,
  },
  {
    text: "“They consistently deliver high-quality results under tight deadlines. Their creativity and speed set them apart.”",
    name: "Alisa Hester",
    title: "Product Manager @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“I’ve worked with several agencies, but none come close to the creativity and professionalism displayed here. They deliver on time, every time!”",
    name: "Bijith Kurian",
    title: "Director @ Career@Germany",
    avatarImg: bijith,
  },

  {
    text: "“Whenever we need a reliable partner, we turn to this team. Their expertise and customer-first approach are unparalleled.”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
  {
    text: "“Their strategies helped us double our engagement within three months. They truly understand the market and how to accelerate growth.”",
    name: "Korah Varghese",
    title: "Founder @ Silverspoon",
    avatarImg: kora,
  },
  {
    text: "“Their designs and strategies are cutting-edge. The entire process felt seamless, and the results speak for themselves.”",
    name: "Sophia Perez",
    title: "Director @ Innovate",
    avatarImg: avatar1,
  },
  {
    text: "“From start to finish, they guided us through every step. The team is incredibly knowledgeable and always goes above and beyond.”",
    name: "Jomy Joseph",
    title: "CEO @ Career@Germany",
    avatarImg: jomy,
  },
];

const firstColoumn = testimonials.slice(0, 9);
const secondColoumn = testimonials.slice(3, 6);
const thirdColoumn = testimonials.slice(6, 9);

const TestimonialColoumn = (props: {
  testimonials: typeof testimonials;
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: props.duration || 15,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ name, text, title, avatarImg }) => (
              <div
                key={name}
                className="border border-white/15 p-8 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] shadow-[3px_5px_8px_rgb(86,50,168,.4)] max-w-xs md:max-w-md"
              >
                <div className="md:text-lg">{text}</div>
                <div className="flex items-center gap-4 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(194,158,253)] after:mix-blend-soft-light after:rounded-lg before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={avatarImg}
                      alt={name}
                      width={100}
                      height={100}
                      className="size-10 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>{name}</div>
                    <div className="text-white/70 text-sm tracking-tight leading-5">
                      {title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 md:py-14">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg text-center mt-5  max-w-xl mx-auto">
          Surpassing limits and redefining standards, we deliver solutions that
          go beyond what’s expected, unlocking new possibilities and
          extraordinary outcomes.
        </p>
        <div className="flex justify-center gap-6  mt-10  [mask-image:linear-gradient(to_bottom,transparent,black_20%,_black_80%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColoumn testimonials={firstColoumn} duration={75} />
          <TestimonialColoumn
            testimonials={secondColoumn}
            className="hidden md:block"
            duration={30}
          />
          <TestimonialColoumn
            testimonials={thirdColoumn}
            className="hidden lg:block"
            duration={22}
          />
        </div>
      </div>
    </section>
  );
};
