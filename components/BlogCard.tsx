import { blog } from "@/types/blogs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const BlogCard = (props: blog) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center w-full p-4 rounded-lg ${
        isHovered ? "bg-primary/75 shadow-none" : "bg-primary/25 shadow-md"
      }  max-w-[300px] h-[400px]`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <motion.h2
        className='w-2/3 absolute top-5 left-[-20px] bg-white dark:bg-secondary text-2xl font-bold text-secondary dark:text-white p-2 rounded-r-lg shadow-md'
        animate={{
          translateX: isHovered ? 30 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {props.title}
      </motion.h2>
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={200}
        className={`${
          isHovered ? "w-full" : "w-2/3"
        } h-full object-cover rounded-lg transition-all duration-300 ease-in-out`}
      />
      <h3 className='text-xs font-bold self-start p-1 bg-primary rounded-lg shadow text-white'>
        {props.date}
      </h3>
      {isHovered && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className='mt-2 text-white'
        >
          {props.description}
        </motion.p>
      )}
      <Link className="w-full bg-white dark:bg-secondary " href={`\blogs\${props.id}`}>Read more</Link>
    </motion.div>
  );
};
