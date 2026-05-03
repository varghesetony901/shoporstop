"use client";
import Image from "next/image";
import { useState } from "react";

import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function BlurImage(props: ComponentProps<typeof Image>) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={twMerge(
        props.className,
        "duration-300 ease-in-out",
        isLoading ? "blur-sm" : "blur-0"
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
