import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Configure Roboto with desired options
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add specific weights you need
  style: ["normal", "italic"], // Optional: include styles
});

export const metadata: Metadata = {
  title:
    "Accelerate Innovation and Success with Expert Web, Mobile, and SEO Services",
  description:
    "We design and build exceptional websites, innovative mobile apps, and optimized SEO strategies that turn your ideas into reality. Let’s create something extraordinary together",
  keywords: [
    "web development, mobile app development, SEO services, business growth, digital marketing, web solutions, mobile solutions, search engine optimization, best web design company in kerala, best SEO service in kerala, best mobile app development in kerala",
  ],
  authors: [{ name: "ShopOrStop", url: "https://shoporstop.com" }],
  robots: "index, follow",
  openGraph: {
    title:
      "Accelerate Innovation and Success with Expert Web, Mobile, and SEO Services",
    description:
      "Tailored digital solutions that accelerate business growth with expert web development, mobile app creation, and SEO strategies.",
    // images: [
    //   "https://tony-next-ecommerce.s3.ap-south-1.amazonaws.com/adcelerate/AdcelerateX-og-image.png",
    // ],
    url: "https://shoporstop.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(roboto.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
