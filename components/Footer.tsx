import Link from "next/link";

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between max-w-7xl mx-auto p-4 bg-background shadow-md'>
      <div>CTA</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4'>
        <div id='socials'>
          <ul className='flex items-center justify-start space-x-0'>
            <li className='hover:stroke-secondary hover:fill-primary stroke-primary transition duration-300 ease-in-out'>
              <a
                href='https://www.facebook.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='50px'
                  height='50px'
                >
                  <path
                    style={{
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "10",
                    }}
                    d='M9,45h32c2.209,0,4-1.791,4-4V9c0-2.209-1.791-4-4-4H9C6.791,5,5,6.791,5,9v32C5,43.209,6.791,45,9,45z'
                  />
                  <polygon
                    style={{
                      strokeWidth: "1",
                      fill: "#000000",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "10",
                    }}
                    className='stroke-primary hover:stroke-primary'
                    points='11,20 17,20 17,33.135 17,39 11,39 '
                  />
                  <path
                    style={{
                      strokeWidth: "1",
                      fill: "#000000",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "10",
                    }}
                    className='stroke-primary hover:stroke-primary'
                    d='M14,17L14,17c-1.8,0-3-1.133-3-2.533S12.2,12,14,12s2.925,1.067,3,2.467C17,15.867,15.875,17,14,17z'
                  />
                  <path
                    style={{
                      strokeWidth: "1",
                      fill: "#000000",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "10",
                    }}
                    className='stroke-primary hover:stroke-primary'
                    d='M39,39h-6c0,0,0-9.257,0-10c0-2-1-4-3.5-4.043C27.022,24.913,26,27,26,29c0,0.909,0,10,0,10h-6V20h6v2.561c0,0,1.93-2.561,5.813-2.561C35.778,20,39,22.726,39,28.261V39z'
                  />
                </svg>
              </a>
            </li>
            <li className='hover:stroke-secondary hover:fill-primary transition duration-300 ease-in-out'>
              <a
                href='https://www.facebook.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='50px'
                  height='50px'
                >
                  <path
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeMiterlimit: 10,
                    }}
                    className='stroke-primary'
                    d='M25,4C13.402,4,4,13.402,4,25c0,10.528,7.756,19.222,17.861,20.74V30.566h-5.196v-5.52h5.196v-3.673c0-6.081,2.963-8.751,8.017-8.751c2.421,0,3.701,0.179,4.307,0.261v4.818h-3.447c-2.145,0-2.895,2.034-2.895,4.327v3.017h6.289l-0.853,5.52h-5.435v15.22C38.093,44.395,46,35.631,46,25C46,13.402,36.598,4,25,4z'
                  />
                </svg>
              </a>
            </li>
            <li className='hover:stroke-secondary hover:fill-primary stroke-primary transition duration-300 ease-in-out'>
              {/* Instagram */}
              <a
                href='https://www.instagram.com/vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='group'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='50px'
                  height='50px'
                >
                  <path
                    style={{ strokeWidth: 1, strokeMiterlimit: 10 }}
                    d='M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z'
                  />
                  <circle
                    style={{ strokeWidth: 1, strokeMiterlimit: 10 }}
                    cx='25'
                    cy='25'
                    r='10'
                    className='group-hover:fill-secondary group-hover:stroke-primary'
                  />
                  <circle
                    cx='37'
                    cy='13'
                    r='2'
                    className='group-hover:fill-secondary group-hover:stroke-primary'
                  />
                </svg>
              </a>
            </li>
            <li className=' stroke-primary hover:fill-primary transition duration-300 ease-in-out'>
              <a
                href='https://www.youtube.com/@vangtec/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='50px'
                  height='50px'
                >
                  <g>
                    <path
                      style={{ strokeWidth: "1" }}
                      d='M24.4,11c7.2,0,13,0.6,15.8,1.1c1.5,0.4,2.7,1.4,2.9,2.7c0.6,3.2,1,6.6,1,10.1c-0.1,4.3-0.6,7.8-1,10.3c-0.3,1.9-2.3,2.5-2.9,2.7c-3.6,0.7-9.6,1.2-15.6,1.2s-12.1-0.4-15.6-1.2c-1.5-0.4-2.7-1.4-2.9-2.7C5.3,32.4,5,28.7,5,25c0-4.6,0.4-8,0.8-10.1c0.3-1.9,2.4-2.5,2.9-2.7C12,11.5,18.1,11,24.4,11 M24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,16.9,3,20.5,3,25S3.4,33,3.9,35.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2c6.6,0,12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.6c0-4.5-0.5-8.1-1-10.6c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9L24.4,9z'
                    />
                  </g>
                  <path
                    style={{ strokeWidth: "1" }}
                    d='M21,20.4l8,4.6l-8,4.6V20.4 M19,17v16l14-8L19,17L19,17z'
                  />
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
