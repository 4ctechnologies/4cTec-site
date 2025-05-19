"use client";
import { FAQs } from "@/data/faq";
import FAQCard from "./FAQCard";
import { useState } from "react";
import { motion } from "framer-motion";
export const FAQSection = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVarientsColumn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [selectedFAQ, setSelectedFAQ] = useState<number>(0);
  return (
    <div className='bg-transparent p-6 flex flex-col w-full items-center'>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        whileInView='visible'
        className='grid grid-cols-1 gap-4 w-full'
      >
        {FAQs.map((faq, index) => (
          <motion.div
            variants={childVarientsColumn}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={index}
            className='border-b py-2 first-of-type:border-t border-white'
          >
            <FAQCard
              question={faq.question}
              answer={faq.answer}
              isSelected={selectedFAQ === index}
              onClick={() => setSelectedFAQ(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
