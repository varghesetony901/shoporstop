"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import aws from "@/assets/aws_white.png";
import github from "@/assets/gitHub_white.png";
import Neon from "@/assets/neon_white.svg";
import OpenAi from "@/assets/openai_white.svg";
import Redis from "@/assets/redis_white.svg";
import Resend from "@/assets/resend_white.svg";
import Tailwind from "@/assets/tailwind_white.svg";
import vercel from "@/assets/vercel_white.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-lg md:text-xl font-medium">Brands That Keep Us Moving </h2>
          <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
              className="flex flex-none items-center  gap-14 pr-14"
            >
              <Image
                src={vercel}
                width={100}
                height={30}
                alt="vercel logo"
                className="w-auto h-5 md:h-8"
              />

              <div>
                <Tailwind className="w-auto h-5 md:h-7" />
              </div>
              <div>
                <Redis className="w-auto h-5 md:h-7" />
              </div>
              <div>
                <OpenAi className="w-auto h-7 md:h-9" />
              </div>
              <Image
                src={aws}
                width={1000}
                height={500}
                alt="aws logo"
                className="w-auto h-12 md:h-16"
              />
              <div>
                <Neon className="w-auto h-6 md:h-7" />
              </div>
              <div>
                <Resend className="w-auto h-6 md:h-9" />
              </div>
              <Image
                src={github}
                width={100}
                height={30}
                alt="github logo"
                className="w-auto h-7 md:h-10"
              />
              <Image
                src={vercel}
                width={100}
                height={30}
                alt="vercel logo"
                className="w-auto h-5 md:h-8"
              />

              <div>
                <Tailwind className="w-auto h-5 md:h-7" />
              </div>
              <div>
                <Redis className="w-auto h-5 md:h-7" />
              </div>
              <div>
                <OpenAi className="w-auto h-7 md:h-9" />
              </div>
              <Image
                src={aws}
                width={1000}
                height={500}
                alt="aws logo"
                className="w-auto h-12 md:h-16"
              />
              <div>
                <Neon className="w-auto h-6 md:h-7" />
              </div>
              <div>
                <Resend className="w-auto h-6 md:h-9" />
              </div>
              <Image
                src={github}
                width={100}
                height={30}
                alt="github logo"
                className="w-auto h-7 md:h-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
