"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pareantVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const childVarients = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  // Get the currnet url
  const pathName = usePathname();
  const page = pathName.split("/").pop();

  return (
    <section className='grid grid-cols-4 gap-4 pt-40'>
      <article className='col-span-3 flex flex-col gap-4'>{children}</article>
      <div>
        <h2 className='text-4xl border-b-2 border-primary'>Quick links</h2>
        <motion.ul
          variants={pareantVarients}
          initial='hidden'
          whileInView='visible'
          className='flex flex-col gap-4 mt-4'
        >
          <motion.li
            variants={childVarients}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className='hover:text-primary py-2 hover:bg-primary/15 px-4 rounded-lg'
          >
            <Link href='/'>Home</Link>
          </motion.li>
          <motion.li
            variants={childVarients}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`hover:text-primary py-2 hover:bg-primary/15 px-4 rounded-lg ${
              page === "privacy" ? "bg-primary/15 text-primary" : ""
            }`}
          >
            <Link href='/privacy'>Privacy Policy</Link>
          </motion.li>
          <motion.li
            variants={childVarients}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`hover:text-primary py-2 hover:bg-primary/15 px-4 rounded-lg ${
              page === "terms" ? "bg-primary/15 text-primary" : ""
            }`}
          >
            <Link href='/terms'>Terms of Service</Link>
          </motion.li>
          <motion.li
            variants={childVarients}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className='hover:text-primary py-2 hover:bg-primary/15 px-4 rounded-lg'
          >
            <Link href='/contact'>Contact</Link>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}
