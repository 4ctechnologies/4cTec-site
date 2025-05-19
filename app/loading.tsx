import React from "react";

export default function Loading() {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-white dark:bg-secondary'>
      <div className='flex flex-col items-center gap-4'>
        <span className='animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid'></span>
        <p className='text-xl text-primary dark:text-white font-semibold'>
          Loading...
        </p>
      </div>
    </div>
  );
}
