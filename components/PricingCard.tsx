"use client";
import { useState } from "react";
import { ArrowDownward } from "@mui/icons-material";
import { pricingCard } from "@/types/pricing";
import Link from "next/link";

const PricingCard = (props: pricingCard) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='bg-transparent border border-primary shadow-md dark:shadow-white rounded-2xl p-6 flex flex-col items-center'>
      <h2 className='text-xl font-bold mb-4'>{props.title}</h2>
      <p className='text-gray-600 mb-4'>{props.description}</p>
      <div className='flex items-center mb-4' onClick={handleExpand}>
        <div>More</div>
        <button className='group'>
          <span>
            <ArrowDownward />
          </span>
        </button>
      </div>
      {expanded && (
        <div>
          <ul className=''>
            {props.features.map((feature: string, index: number) => (
              <li key={index} className='mb-2'>
                - {feature}
              </li>
            ))}
          </ul>
          {props.price && (
            <p className='text-lg font-semibold mb-4'>{props.price}</p>
          )}
          <Link href={props.link}>
            {props.price ? "Try for free" : "Get Started"}
          </Link>
        </div>
      )}
    </div>
  );
};
export default PricingCard;
