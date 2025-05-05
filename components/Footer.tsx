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
                {/* svg for LinkedIn */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.338 16.338 H13.67 V12.16c0-.995-.017-2.274-1.387-2.274-1.399 0-1.613 1.086-1.613 2.208v4.244H8.662V7.5h2.634v1.01h.036c.366-.694 1.261-1.426 2.594-1.426 2.775 0 3.287 1.83 3.287 4.21v5.054z M5.338 6a2 2 0 11-.001-4 2 2 0 01.001 4zm-.001 10H8V7H5.337v9z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.facebook.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* svg for Facebook */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1.5 4.5h-3v1.5h3V7h-3v1.5h3V10h-3v1.5h3V14h-3v1.5h3V18h-4.5V14H7v-1.5h1.5V10H7V8.5h1.5V7H7V6h4.5z' />
                </svg>
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.instagram.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* svg for Instagram */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2zm-1.5-8.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0116.5 4.5zM10 7a3 3 0 100 6 3 3 0 000-6z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
              <a
                href='https://www.youtube.com/@vangtec'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* svg for YouTube */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1.5 4.5h-3v1.5h3V7h-3v1.5h3V10h-3v1.5h3V14h-3v1.5h3V18h-4.5V14H7v-1.5h1.5V10H7V8.5h1.5V7H7V6h4.5z' />
                </svg>
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
