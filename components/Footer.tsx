import Link from "next/link";

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between max-w-7xl mx-auto p-4 bg-background shadow-md'>
      <div>CTA</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4'>
        <div id='socials'>
          <ul className='flex items-center justify-start space-x-0'>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.linkedin.com/company/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ln
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.facebook.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                F
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.instagram.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                I
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.youtube.com/@vangtec'
                target='_blank'
                rel='noopener noreferrer'
              >
                YT
              </a>
            </li>
          </ul>
        </div>
        <div id='Copyright & leagal'>
          <ul className='flex items-center justify-center list-disc text-nowrap gap-8'>
            <li className='list-none'>
              <p className='text-sm text-gray-500'>
                &copy; {new Date().getFullYear()} <Link href='/'>VangTec.</Link>
              </p>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out'>
              <a href='/terms'>Terms of Service</a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out'>
              <a href='/privacy'>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
          <p className='text-sm text-gray-500'>
            Developed by <span className='text-primary'>VangTec</span> Team{" "}
            <br />
            <span className='text-xs text-gray-400'>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
