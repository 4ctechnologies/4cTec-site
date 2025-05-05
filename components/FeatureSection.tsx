import { useState } from "react";
import FeatureCard from "./FeatureCard";
import { FeatureCardProps } from "./FeatureCard";

const FeatureSection = ({ features }: { features: FeatureCardProps[] }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  // create a sliding section with 10 cards in a single line with overflown cards. with two left and right arrows to sctoll card by cards
  // with a 2 or 3 pixel heighe scroll bar with white handle and light gray bar looks like a line
  return (
    <div className='flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
      {/* left button to move and select the next card */}
      <button
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md'
        onClick={() => {
          if (selectedCard !== null && selectedCard > 0) {
            setSelectedCard(selectedCard - 1);
          }
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M10.293 15.293a1 1 0 01-1.414 0L4.586 10l4.293-4.293a1 1 0 011.414 1.414L7.414 10l2.879 2.879a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {/* right button to move and select the next card */}
      <button
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md'
        onClick={() => {
          if (selectedCard !== null && selectedCard < features.length - 1) {
            setSelectedCard(selectedCard + 1);
          }
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M9.707 4.293a1 1 0 011.414 0L15.414 10l-4.293 4.293a1 1 0 01-1.414-1.414L12.586 10l-2.879-2.879a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {features.map((feature, index) => (
        <div key={index} className='flex-shrink-0 w-1/5 p-2'>
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  );
};
export default FeatureSection;
