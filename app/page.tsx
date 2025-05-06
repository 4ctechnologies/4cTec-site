import Link from "next/link";
import { Plans } from "@/data/Pricing";
import PricingCard from "@/components/PricingCard";
import { heights, testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <section className='flex flex-col gap-4 w-full min-h-lvh bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat rounded-lg p-8 justify-center sm:p-16 text-secondary dark:text-white'>
        <div className='w-full md:w-1/2 space-y-8'>
          <h1 className='text-6xl font-bold text-center md:text-left'>
            Online music production courses
          </h1>
          <p className='text-center md:text-left'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            voluptas omnis harum eos.
          </p>
          <div className='flex space-x-4 justify-center md:justify-start'>
            <Link href={"/register"}>
              <button className='bg-primary text-nowrap text-white px-4 py-2 rounded-lg hover:bg-secondary border-primary border  transition duration-300 ease-in-out cursor-pointer'>
                Get Started
              </button>
            </Link>
            <Link href={"/about"}>
              <button className='bg-secondary text-nowrap text-white px-4 py-2 rounded-lg hover:border-primary border border-secondary transition duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-4 w-full min-h-lvh p-8 sm:p-16 justify-center'>
        <div className='w-full md:w-1/2 space-y-8'>
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
              <button className='bg-secondary text-white px-4 py-2 rounded-lg hover:border-secondary hover:bg-white hover:text-secondary border border-secondary transition duration-300 ease-in-out cursor-pointer'>
                Learn More
              </button>
            </Link>
            <Link href={"/register"}>
              <button className=' text-secondary dark:text-white px-4 py-2 rounded-lg hover:bg-secondary  border border-white hover:text-white hover:border-secondary  transition duration-300 ease-in-out cursor-pointer'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-lg w-full h-full text-white"></div>
      </section>
      <section>
        <h3>The Course</h3>
        <h1>Interactive Online Lessons</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia perferendis sequi natus dolorum inventore excepturi
          repudiandae vitae illum magni optio similique cum error eius quae
          asperiores, velit eos consectetur?
        </p>
        <Link href={"/about"}>Learn more</Link>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full min-h-svh p-8 sm:p-16 '>
        {/* Pricing Section */}
        {Plans.map((plan) => (
          <div key={Plans.indexOf(plan)} className=''>
            <PricingCard
              title={plan.title}
              description={plan.description}
              price={plan.price?.toString()}
              features={plan.features}
              buttonText={plan.buttonText}
              link={plan.link}
            />
          </div>
        ))}
      </section>
      <section className='flex flex-col gap-4 w-full min-h-lvh '>
        <div className='w-full md:w-1/2 space-y-8'>
          <h1 className='text-4xl font-bold text-center md:text-left'>
            Real<cite>results</cite>
          </h1>
        </div>
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 w-full min-h-svh'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonials.indexOf(testimonial)}
              className={`mt-${
                heights[Math.floor(Math.random() * heights.length)]
              }`}
            >
              <TestimonialCard
                image={testimonial.image}
                description={testimonial.description}
                name={testimonial.name}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>Got a Question?</h1>
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
