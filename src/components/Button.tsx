import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: React.PropsWithChildren & HTMLAttributes<HTMLButtonElement>
) => {
  // Set className to an empty string if undefined or null
  const { className = "", children, ...restProps } = props;

  return (
    <button
      className={twMerge(
        "relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-default", // Default classes
        className // Custom classes (if any)
      )}
      {...restProps} // Spread the remaining props (including onClick, etc.)
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 border border-white/20 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 border border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};

export default Button;
