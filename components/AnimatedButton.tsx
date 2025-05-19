// components/RotatingGradientButton.tsx
import { motion, TargetAndTransition, Transition } from "framer-motion";
import React from "react";

interface RotatingGradientButtonProps {
  children?: React.ReactNode; // Optional children, will default to buttonText
  onClick?: () => void;
  className?: string; // Allow passing additional Tailwind CSS classes
  buttonText?: string; // Text to display if no children are provided
}

const RotatingGradientButton: React.FC<RotatingGradientButtonProps> = ({
  children,
  onClick,
  className = "",
  buttonText = "Click Me",
}) => {
  // Define the properties for the continuous background animation
  // This creates a "rotating" effect by cycling through different gradient angles and color orders.
  const animatedProperties: TargetAndTransition = {
    backgroundImage: [
      "linear-gradient(0deg, #ffadaf, #ff8c8e, #ff6567, #d85052)",
      "linear-gradient(45deg, #ff8c8e, #ff6567, #d85052, #b04244)",
      "linear-gradient(90deg, #ff6567, #d85052, #b04244, #ffadaf)",
      "linear-gradient(135deg, #d85052, #b04244, #ffadaf, #ff8c8e)",
      "linear-gradient(180deg, #b04244, #ffadaf, #ff8c8e, #ff6567)",
      "linear-gradient(225deg, #ffadaf, #ff8c8e, #ff6567, #d85052)", // Repeating the initial color sequence at a new angle for smooth transition
      "linear-gradient(270deg, #ff8c8e, #ff6567, #d85052, #b04244)",
      "linear-gradient(315deg, #ff6567, #d85052, #b04244, #ffadaf)",
      "linear-gradient(360deg, #ffadaf, #ff8c8e, #ff6567, #d85052)", // Ensures a seamless loop with the 0deg state
    ],
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", // A subtle initial shadow
  };

  // Define the transition for the continuous animation
  const animationTransition: Transition = {
    backgroundImage: {
      duration: 12, // Duration for one full cycle of gradient changes
      repeat: Infinity,
      ease: "linear",
    },
    boxShadow: {
      // Smooth transition for shadow if it changes outside hover
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror", // Optional: make shadow pulse slightly
      ease: "easeInOut",
    },
  };

  // Define the properties for the hover state
  const hoverProperties: TargetAndTransition = {
    // Set a static background gradient to "stop" the animation
    backgroundImage:
      "linear-gradient(45deg, #ffadaf, #ff8c8e, #ff6567, #d85052)",
    // Apply a more pronounced shadow on hover
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)",
    scale: 1.05, // Slightly increase size on hover for better feedback
    transition: {
      // Transition for the hover effects themselves (shadow, scale, background change)
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <motion.button
      className={`px-8 py-4 rounded-xl cursor-pointer text-white font-bold text-lg overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${className}`}
      onClick={onClick}
      animate={animatedProperties} // Apply the continuous animation properties
      transition={animationTransition} // Specify the transition for the continuous animation
      whileHover={hoverProperties} // Apply these properties when the button is hovered
      // The initial style is partly set by Tailwind classes and partly by the initial state of `animate`
    >
      <span className='relative z-10'>{children ?? buttonText}</span>
      {/* The background gradient is applied directly by Framer Motion's `animate` prop.
        Ensure `overflow-hidden` is set if you use `backgroundPosition` animations that might exceed button bounds.
        For `backgroundImage` array animation, `overflow-hidden` is good practice for rounded corners.
      */}
    </motion.button>
  );
};

export default RotatingGradientButton;
