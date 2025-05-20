"use client";
import Link from "next/link";
import { useState } from "react";
import { socialLinks, citations } from "@/data/contactInfo";

export default function Footer() {
  const [cookieButton, setCookieButton] = useState(true);
  return (
    <footer className='flex pt-20 flex-col items-center justify-between max-w-7xl mx-auto p-4 bg-white dark:bg-secondary dark:text-white shadow-md'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4'>
        <div id='socials' className='flex flex-col space-y-4'>
          <ul className='flex items-center justify-center sm:justify-start space-x-4'>
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className='fill-none hover:fill-primary stroke-primary transition duration-300 ease-in-out w-12 h-12'
              >
                <a href={link.url} target='_blank' rel='noopener noreferrer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 50 50'
                    width='full'
                    height='full'
                    dangerouslySetInnerHTML={{ __html: link.icon }}
                    className='group'
                  ></svg>
                </a>
              </li>
            ))}
          </ul>
          <ul className='flex items-center justify-center sm:justify-start space-x-4'>
            {citations.map((citation, index) => (
              <li
                key={index}
                className='fill-none hover:fill-primary stroke-primary transition duration-300 ease-in-out w-12 h-12'
              >
                <a
                  href={citation.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 70 70'
                    width='full'
                    height='full'
                    dangerouslySetInnerHTML={{ __html: citation.icon }}
                    className='group'
                  ></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          id='Copyright & leagal'
          className='flex flex-col items-center justify-center'
        >
          <ul className='flex flex-col sm:flex-row items-center justify-center list-disc text-nowrap space-x-0 sm:space-x-8 space-y-4 sm:space-y-0'>
            <li className='list-none'>
              <p className='text-sm text-gray-500'>
                &copy; {new Date().getFullYear()}{" "}
                <Link href='/'>4CTechnologies.</Link>
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
          <div className='hidden min-h-40 min-h-48 min-h-52 min-h-56 min-h-60 min-h-64 min-h-72 '></div>
          <p className='text-sm text-gray-500 cursor-default'>
            Developed by <span className='text-primary'>4CTechnologies</span>{" "}
            Team <br />
            <span className='text-xs text-gray-400'>All rights reserved.</span>
          </p>
        </div>
      </div>
      <div className='w-full px-4 flex  justify-center items-center text-xs font-light'>
        {cookieButton && (
          <>
            <p>
              This site may use cookies and other browser data to provode a
              better user experience. For more info visit our{" "}
              <Link href='/cookies' className='text-primary'>
                cookies policy page
              </Link>
            </p>
            <span
              onClick={() => setCookieButton(false)}
              className='font-semibold px-2 mx-2 py-2 bg-primary rounded-lg cursor-pointer text-nowrap'
            >
              I Accept
            </span>
          </>
        )}
      </div>
    </footer>
  );
}
