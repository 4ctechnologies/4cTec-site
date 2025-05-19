"use client";
import { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export const FAQCard = ({
  question,
  answer,
  isSelected,
  onClick,
}: {
  question: string;
  answer: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const { isDark } = useTheme();
  useEffect(() => {
    if (isSelected) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [isSelected]);

  return (
    <motion.div
      layout
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className='p-6 flex w-full max-w-5xl mx-auto flex-col items-between'
    >
      <div
        className={`flex justify-between ${
          expanded ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={onClick}
      >
        <h2 className='text-xl text-white font-bold mb-4'>{question}</h2>
        <span>
          {expanded ? (
            <Remove htmlColor={isDark ? "#fff" : "#020618"} />
          ) : (
            <Add htmlColor={isDark ? "#fff" : "#020618"} />
          )}
        </span>
      </div>
      {expanded && <p className='text-white mb-4 w-11/12'>{answer}</p>}
    </motion.div>
  );
};
export default FAQCard;
