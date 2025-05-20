"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  const { isDark } = useTheme(); // Dynamically get the current theme state

  return (
    <div className={className}>
      <Image
        src={isDark ? "/Logo-Dark.webp" : "/Logo-Light.webp"} // Automatically switch logo based on theme
        alt={"4CTechnologies"}
        width={400}
        height={100}
        className='w-full h-full'
      />
    </div>
  );
};

export default Logo;
