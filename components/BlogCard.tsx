"use client";
import { blog } from "@/types/blogs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const BlogCard = (props: blog) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVarients = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className={`relative flex flex-col items-center justify-end w-full p-4 rounded-lg ${
          isHovered ? "bg-primary/75 shadow-none" : "bg-primary/25 shadow-md"
        }  max-w-[300px] h-[400px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
        <motion.div
          animate={{
            height: isHovered ? "60%" : "100%",
            width: isHovered ? "100%" : "100%",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            stiffness: 200,
            damping: 20,
            type: "spring",
          }}
          // className={`${
          //   isHovered ? "w-full h-4/5" : "w-4/5 h-11/12"
          // }  transition-all  duration-300 ease-in-out`}
        >
          <Image
            src={props.image}
            alt={props.title}
            width={300}
            height={200}
            className='w-full h-full object-cover rounded-lg'
          />
        </motion.div>
        <h3 className='text-xs font-bold self-start p-1 mt-4 bg-primary rounded-lg shadow text-white'>
          {props.date}
        </h3>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={parentVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='w-full flex flex-col'
            >
              <motion.p
                variants={childVarients}
                transition={{ duration: 0.2 }}
                className='mt-2 text-white'
              >
                {props.description}
              </motion.p>
              <motion.div
                variants={childVarients}
                transition={{ duration: 0.2 }}
                className='flex items-center justify-center'
              >
                <Link
                  className='w-full bg-white dark:bg-secondary py-2 px-1 mt-2 rounded-lg text-center '
                  href={`/blogs/${props.id}`}
                >
                  Read more
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
