"use client";
import { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";

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
  useEffect(() => {
    if (isSelected) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [isSelected]);

  return (
    <div className='p-6 flex flex-col items-center'>
      <div
        className={`flex justify-between w-full ${
          expanded ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={onClick}
      >
        <h2 className='text-xl font-bold mb-4'>{question}</h2>
        <span>{expanded ? <Remove /> : <Add />}</span>
      </div>
      {expanded && <p className='text-gray-600 mb-4'>{answer}</p>}
    </div>
  );
};
export default FAQCard;
