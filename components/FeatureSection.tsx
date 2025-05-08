import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

const FeatureSection = () => {
  const parentVarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVarients = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    //
    <motion.div
      variants={parentVarients}
      initial='hidden'
      whileInView='visible'
      className='flex max-w-5xl mx-auto snap-x snap-mandatory overflow-x-scroll overflow-y-hidden thin-scroll '
    >
      {/* <button
        className='absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md'
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
      {/* right button to move and select the next card 
      <button
        className='absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md'
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
      </button> */}
      {features.map((feature, index) => (
        <motion.div
          variants={childVarients}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          key={index}
          className='flex-shrink-0 w-sm p-2 snap-start snap-always'
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
};
export default FeatureSection;
