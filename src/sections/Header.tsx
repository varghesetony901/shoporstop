"use client";
import BlurImage from "@/components/blur-image";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div className="w-36 h-auto inline-flex justify-center items-center border-white/15">
            {/* <Image src={"/assets/logo.png"} width={100} height={20} alt="Adcelerate X logo"  className="w-full"/> */}
            <div className="text-[21px] font-bold tracking-wide ">ShopOr</div>

            <div className="text-[21px] font-bold tracking-wide text-yellow-400 ">
              Stop
            </div>
          </div>
          {/* <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href={"#"}
                className="text-white/70 hover:text-white transition"
              >
               Home
              </Link>
              <Link
                href={"#features"}
                className="text-white/70 hover:text-white transition"
              >
                Features
              </Link>
              <Link
                href={"#testimonials"}
                className="text-white/70 hover:text-white transition"
              >
                Testimonials
              </Link>
              
            </nav>
          </div> */}
          <div className="flex gap-4 items-center">
            <Button
              onClick={() =>
                (window.location.href =
                  "mailto:varghesetony901@gmail.com?subject=Inquiry")
              }
              className="cursor-pointer"
            >
              Contact Us
            </Button>
            {/* <MenuIcon className="size-8 md:hidden" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
