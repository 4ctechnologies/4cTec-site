"use client";
import Link from "next/link";
import { Plans } from "@/data/Pricing";
import PricingCard from "@/components/PricingCard";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { FAQSection } from "@/components/FAQSection";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FeatureSection from "@/components/FeatureSection";
import Image from "next/image";

export default function Home() {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const parentVariantsTestoimomials = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
      change: {},
    },
  };
  const [testimonialGroup, setTestimonialGroup] = useState<1 | 2>(1);
  const childVarientsColumn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    change: { opacity: 1, x: 0 },
  };
  const childVarientsColumnTestimonials = {
    hidden: { opacity: 0, y: 100, x: testimonialGroup === 1 ? 100 : -100 },
    visible: { opacity: 1, y: 0, x: 0 },
    change: { opacity: 1, x: 0 },
  };
  const childVarientsRow = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        console.log(window.innerWidth);
      };
      handleResize(); // Call it once to set the initial value
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  if (screenWidth === null) {
    return null; // or a loading spinner, etc.
  }

  return (
    <>
      <section className='mt-4 grid grid-cols-1 md:grid-cols-2 w-full min-h-lvh bg-[url(https://placehold.co/600x400?text=Placeholder)] bg-cover bg-center bg-no-repeat  text-secondary dark:text-white'>
        <motion.div className='flex flex-col gap-8 max-w-[640px] ml-auto'>
          <motion.div
            className='bg-white/15 h-5/7 flex flex-col gap-4  justify-end p-4'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className='text-6xl font-bold text-center md:text-left'>
              Online music production courses
            </h1>
            <p className='text-center md:text-left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              voluptas omnis harum eos.
            </p>
          </motion.div>
          <div className='flex space-x-4 justify-center md:justify-start '>
            <Link href={"/register"}>
              <button className='bg-primary text-nowrap text-white px-4 py-2 rounded-lg hover:bg-white hover:text-primary border-primary border dark:hover:bg-secondary transition duration-300 ease-in-out cursor-pointer'>
                Get Started
              </button>
            </Link>
            <Link href={"/about"}>
              <button className='bg-white text-nowrap text-secondary px-4 py-2 rounded-lg hover:border-primary hover:text-primary border dark:bg-secondary dark:border-secondary dark:text-white border-white transition duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='h-3/7 bg-white/15 self-end max-w-[640px] mr-a'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 w-full min-h-lvh'>
        <motion.div
          className='w-full self-center flex flex-col space-y-8'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-7xl leading-20 w-full flex flex-col md:pr-20'>
            <div className=' pl-4 md:pl-48'>
              <h1>Online Music</h1>
            </div>
            <span className=' pl-4 md:pl-48 bg-primary text-white dark:text-secondary'>
              production
            </span>
            <div className=' pl-4 md:pl-48'>
              <h1>Courses</h1>
            </div>
          </div>
          <p className=' pl-4 md:pl-48 max-w-xl text-center md:text-left'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            voluptas omnis harum eos. Maiores voluptas omnis harum eos.
          </p>
          <div className=' pl-4 md:pl-48 flex justify-center gap-4 md:justify-start'>
            <Link href={"/about"}>
              <button className='bg-white text-secondary border-white px-4 py-2 rounded-lg  hover:border-secondary dark:bg-secondary dark:text-white dark:border-secondary dark:hover:text-white dark:hover:border-white border transition duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </Link>
            <Link href={"/register"}>
              <button className=' text-white bg-secondary border-secondary hover:bg-white hover:text-secondary px-4 py-2 rounded-lg   border dark:bg-white dark:text-secondary dark:border-white dark:hover:bg-secondary dark:hover:text-white  transition duration-300 ease-in-out cursor-pointer'>
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="bg-[url('https://placehold.co/600x400?text=Placeholder')] bg-cover bg-center bg-no-repeat  w-full h-full text-white"></div>
      </section>
      <motion.section
        className='py-48 flex flex-col gap-4 w-full min-h-lvh  justify-center items-center bg-white text-secondary dark:bg-secondary dark:text-white'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-sm'>The Course</h3>
        <div>
          <div className='flex flex-row items-baseline'>
            <h1 className=' text-4xl md:text-9xl text-center'>Online music</h1>
            <div className='w-4 md:w-12 mr-[-10px] h-4 md:h-12 rounded-full bg-primary'></div>
            <div className='w-4 md:w-12 h-4 md:h-12 rounded-full bg-red-800'></div>
          </div>
          <div className='flex flex-row items-center'>
            <h1 className=' text-4xl md:text-9xl text-center'>production</h1>
            <Image
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt='Placeholder Image'
              width={75}
              height={75}
            />
            <Image
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt='Placeholder Image'
              width={75}
              height={75}
            />
          </div>
          <div className='flex flex-row items-center'>
            <Image
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt='Placeholder Image'
              width={75}
              height={75}
            />
            <Image
              src={"https://placehold.co/600x400?text=Placeholder"}
              alt='Placeholder Image'
              width={75}
              height={75}
            />
            <h1 className=' text-4xl md:text-9xl text-center'>courses</h1>
          </div>
        </div>
        <p className='text-center max-w-xl py-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia perferendis sequi natus dolorum inventore excepturi
        </p>
        {/* <Link
          className='dark:bg-primary dark:text-secondary border dark:border-primary dark:hover:bg-secondary dark:hover:text-primary hover:bg-primary hover:text-white hover:border-primary px-4 py-2 rounded-lg'
          href={"/about"}
        >
          Learn more
        </Link> */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative w-full flex flex-col justify-center items-center space-y-12 pt-20'
        >
          <h3 className='text-4xl'>Features</h3>
          <FeatureSection />
        </motion.div>
      </motion.section>
      <motion.section className='flex flex-col justify-center items-center w-full min-h-svh '>
        <h1 className='text-8xl max-w-3xl py-20 text-center'>
          Onlline music production courses
        </h1>
        <motion.div
          variants={parentVariants}
          initial='hidden'
          whileInView='visible'
          className='grid grid-cols-1 md:grid-cols-3 gap-4'
        >
          {/* Pricing Section */}
          {Plans.map((plan) => (
            <motion.div
              variants={
                screenWidth < 768 ? childVarientsColumn : childVarientsRow
              }
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
              key={Plans.indexOf(plan)}
              className=''
            >
              <PricingCard
                title={plan.title}
                description={plan.description}
                price={plan.price?.toString()}
                features={plan.features}
                buttonText={plan.buttonText}
                link={plan.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <section className='relative flex flex-col gap-4 w-full min-h-lvh '>
        <div className='w-full space-y-8'>
          <h1 className='text-7xl font-bold text-center py-20'>
            Real<cite> results</cite>
          </h1>
        </div>
        <div className='max-w-[1280px] mx-auto'>
          {testimonialGroup === 1 && screenWidth < 768 && (
            <span
              className='absolute top-0 right-5 z-30 my-auto h-12 w-12 border rounded-full border-primary bg-primary flex justify-center items-center bottom-0 animate-ping cursor-pointer'
              onClick={() => setTestimonialGroup(2)}
            >
              <ArrowForward className='text-4xl text-white ' />
            </span>
          )}

          <motion.div
            className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:grid-rows-8 '
            variants={parentVariantsTestoimomials}
            initial='hidden'
            whileInView='visible'
            animate='change'
          >
            {testimonials.map((testimonial, index) => {
              const shouldRender =
                screenWidth >= 768 ||
                (screenWidth < 768 &&
                  ((testimonialGroup === 1 && index < 4) ||
                    (testimonialGroup === 2 && index >= 4)));

              if (!shouldRender) {
                return null; // Don't render the motion.div if it's not in the current group
              }

              return (
                <motion.div
                  key={index}
                  className={`row-span-3 ${
                    screenWidth > 768
                      ? index < 4
                        ? index % 2 === 0
                          ? "row-start-1"
                          : "row-start-2"
                        : index % 2 === 0
                        ? "row-start-4"
                        : "row-start-5"
                      : index === 0 || index === 4
                      ? "row-start-1"
                      : index === 1 || index === 5
                      ? "row-start-2"
                      : index === 2 || index === 6
                      ? "row-start-4"
                      : "row-start-5"
                  }`}
                  variants={
                    screenWidth < 768
                      ? childVarientsColumnTestimonials
                      : childVarientsRow
                  }
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                  }}
                >
                  <TestimonialCard
                    image={testimonial.image}
                    description={
                      screenWidth < 768 && testimonialGroup === 2
                        ? testimonial.description + " " + index
                        : testimonial.description
                    }
                    name={testimonial.name}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          {testimonialGroup === 2 && screenWidth < 768 && (
            <span
              className='absolute top-0 left-5 z-30 my-auto h-12 w-12 border rounded-full border-primary bg-primary flex justify-center items-center bottom-0 animate-ping cursor-pointer'
              onClick={() => setTestimonialGroup(1)}
            >
              <ArrowBack className='text-4xl text-white' />
            </span>
          )}
        </div>
      </section>
      <section className='w-full gap-4 min-h-lvh  bg-[url("https://placehold.co/600x400?text=Placeholder")] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col justify-center items-center bg-radial from-10% from-transparent to-white dark:to-secondary to-95%  text-white'>
          <h1 className='pt-40 text-6xl text-secondary dark:text-white'>
            Got a Question?
          </h1>
          <div className='py-20'>
            <FAQSection />
          </div>
        </div>
      </section>
      <section>
        <h1>
          Book your musical journy <cite>now</cite>
        </h1>
        {/* Blog section */}
      </section>
    </>
  );
}
