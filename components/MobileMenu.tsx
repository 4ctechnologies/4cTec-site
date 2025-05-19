"use client";

import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const parentVarient = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVarients = {
    hidden: {
      opacity: 0,
      x: 1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <nav className={className}>
      <AnimatePresence>
        {isCollapsed ? (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            onClick={() => setIsCollapsed(false)}
          >
            <Menu />
          </motion.span>
        ) : (
          <motion.div
            variants={parentVarient}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className='absolute top-0 left-0 w-lvw h-lvh overflow-hidden flex bg-white dark:bg-secondary flex-col items-center justify-center'
          >
            <motion.div
              variants={childVarients}
              className='absolute top-2 right-2 w-12 h-12'
              onClick={() => setIsCollapsed(true)}
            >
              <Close />
            </motion.div>
            <ul className='flex flex-col items-center justify-center space-y-8 h-4/5'>
              <motion.li
                variants={childVarients}
                className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'
              >
                <Link href='/#about'>About</Link>
              </motion.li>
              <motion.li
                variants={childVarients}
                className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'
              >
                <Link href='/blogs/1'>Blogs</Link>
              </motion.li>
              <motion.li
                variants={childVarients}
                className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'
              >
                <Link href='/contact'>Contact</Link>
              </motion.li>
            </ul>
            <motion.div
              variants={childVarients}
              className='flex flex-col max-w-80 space-y-8 py-4'
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default MobileMenu;
