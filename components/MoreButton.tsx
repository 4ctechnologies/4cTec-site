import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

interface MoreButtonProps {
  buttonClick: () => void;
}
export const MoreButton = (props: MoreButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className='cursor-pointer flex items-center space-x-[-20px] mb-4'
      onClick={props.buttonClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`w-fit h-8 bg-primary flex items-center justify-center rounded-lg px-4 text-white ${
          !isHovered ? "pr-6" : ""
        }`}
      >
        More
      </div>
      <motion.button
        className='w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white'
        animate={{
          rotate: isHovered ? 90 : 0,
          translateX: isHovered ? 35 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          stiffness: 100,
          damping: 50,
        }}
      >
        <ArrowForward />
      </motion.button>
    </motion.div>
  );
};
