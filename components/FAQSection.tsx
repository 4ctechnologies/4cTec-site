"use client";
import { FAQs } from "@/data/faq";
import FAQCard from "./FAQCard";
import { useState } from "react";
export const FAQSection = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number>(0);
  return (
    <div className='bg-transparent p-6 flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {FAQs.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isSelected={selectedFAQ === index}
            onClick={() => setSelectedFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};
