import SocialInsta from "@/assets/social-instagram.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import BlurImage from "@/components/blur-image";

export const Footer = () => {
  return (
    <footer className="text-sm text-center pb-10">
      <div className="container">
        <div className="w-32 h-10 inline-flex justify-center items-center border-white/15">
          <div className="w-36 h-auto inline-flex justify-center items-center border-white/15">
            {/* <Image src={"/assets/logo.png"} width={100} height={20} alt="Adcelerate X logo"  className="w-full"/> */}
            <div className="text-[21px] font-bold tracking-wide ">
              Adcelerate
            </div>
            <div className="text-[21px] font-bold tracking-wide text-yellow-400 ">
              X
            </div>
          </div>
        </div>
        {/* <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-10 text-sm">
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
        </nav> */}
        {/* <div className="flex justify-center gap-6 mt-6 items-center">
          <SocialX />
          <SocialInsta />
          <SocialYoutube />
          <SocialLinkedIn />
        </div> */}
        <p className="mt-6 ">&copy; 2025 Adcelerate X. All rights reserved.</p>
      </div>
    </footer>
  );
};
