"use client";
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import { pricingCard } from "@/types/pricing";
import Link from "next/link";
import { motion } from "framer-motion";

const PricingCard = (props: pricingCard) => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
    setIsHovered(false);
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.2 }}
      className='bg-transparent  p-6 flex flex-col items-center max-w-[350px] mx-auto'
    >
      <h2 className='text-xl font-bold mb-4'>{props.title}</h2>
      <p className='text-gray-600 mb-4 p-4 text-justify'>{props.description}</p>
      {props.price && (
        <p className='text-4xl font-semibold mb-4'>${props.price}</p>
      )}
      {!expanded && (
        <motion.div
          className='cursor-pointer flex items-center space-x-[-20px] mb-4'
          onClick={handleExpand}
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
      )}
      {expanded && (
        <motion.div>
          <ul className=''>
            {props.features.map((feature: string, index: number) => (
              <li key={index} className='mb-2'>
                - {feature}
              </li>
            ))}
          </ul>
          <Link href={props.link}>
            {props.price ? "Try for free" : "Get Started"}
          </Link>
          <motion.button
            className='mt-4 w-full h-10 bg-primary text-white rounded-lg'
            onClick={handleExpand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Collapse
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};
export default PricingCard;
