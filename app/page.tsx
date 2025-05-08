"use client";
import Link from "next/link";
import { Plans } from "@/data/Pricing";
import PricingCard from "@/components/PricingCard";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { FAQSection } from "@/components/FAQSection";
import { easeInOut, motion, stagger } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FeatureSection from "@/components/FeatureSection";

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
      <section className='flex flex-col gap-4 w-full min-h-lvh bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat rounded-lg p-8 justify-center sm:p-16 text-secondary dark:text-white'>
        <motion.div
          className='w-full md:w-1/2 space-y-8'
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className='text-6xl font-bold text-center md:text-left'>
            Online music production courses
          </h1>
          <p className='text-center md:text-left'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            voluptas omnis harum eos.
          </p>
          <div className='flex space-x-4 justify-center md:justify-start'>
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
      </section>
      <section className='flex flex-col gap-4 w-full min-h-lvh p-8 sm:p-16 justify-center'>
        <motion.div
          className='w-full md:w-1/2 space-y-8'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-bold text-center md:text-left'>
            From <span className='text-primary'>amateur</span> to{" "}
            <span className='text-primary'>professional</span> in music
            production
          </h1>
          <p className='text-center md:text-left'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            voluptas omnis harum eos. Maiores voluptas omnis harum eos.
          </p>
          <div className='flex justify-center gap-4 md:justify-start'>
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
        <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-lg w-full h-full text-white"></div>
      </section>
      <motion.section
        className='flex flex-col gap-4 w-full min-h-lvh p-8 sm:p-16 justify-center items-center bg-white text-secondary dark:bg-secondary dark:text-white'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-sm'>The Course</h3>
        <h1 className='text-9xl text-center'>Interactive Online Lessons</h1>
        <p className='text-center max-w-xl py-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia perferendis sequi natus dolorum inventore excepturi
        </p>
        <Link
          className='dark:bg-primary dark:text-secondary border dark:border-primary dark:hover:bg-secondary dark:hover:text-primary hover:bg-primary hover:text-white hover:border-primary px-4 py-2 rounded-lg'
          href={"/about"}
        >
          Learn more
        </Link>
        <div className='relative w-full self-start'>
          <FeatureSection />
        </div>
      </motion.section>
      <motion.section
        variants={parentVariants}
        initial='hidden'
        whileInView='visible'
        className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full min-h-svh p-8 sm:p-16 '
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
      </motion.section>
      <section className='relative flex flex-col gap-4 w-full min-h-lvh '>
        <div className='w-full md:w-1/2 space-y-8'>
          <h1 className='text-4xl font-bold text-center md:text-left'>
            Real<cite> results</cite>
          </h1>
        </div>
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
      </section>
      <section className='w-full flex flex-col gap-4 min-h-lvh p-8 sm:p-16 justify-center items-center bg-white text-secondary dark:bg-secondary dark:text-white'>
        <h1 className='text-6xl'>Got a Question?</h1>
        <FAQSection />
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
