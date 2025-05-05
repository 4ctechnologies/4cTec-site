import Link from "next/link";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <section className='flex flex-col gap-4 w-full min-h-svh bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat rounded-lg p-8 sm:p-16 text-secondary dark:text-white'>
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
                <button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary border-primary border  transition duration-300 ease-in-out cursor-pointer'>
                  Get Started
                </button>
              </Link>
              <Link href={"/about"}>
                <button className='bg-secondary text-white px-4 py-2 rounded-lg hover:border-primary border border-secondary transition duration-300 ease-in-out cursor-pointer'>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-4 w-full min-h-svh bg-white p-8 sm:p-16 text-black'>
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
                <button className=' text-secondary px-4 py-2 rounded-lg hover:bg-secondary  border border-white hover:text-white hover:border-secondary  transition duration-300 ease-in-out cursor-pointer'>
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
      </main>
    </div>
  );
}
