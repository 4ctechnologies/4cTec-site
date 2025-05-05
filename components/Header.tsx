import Link from "next/link";

export default function Header() {
  return (
    <header className='flex items-center justify-between w-full p-4 bg-background shadow-md fixed top-0 z-10 max-w-7xl mx-auto left-0 right-0'>
      <div className='flex items-center w-1/2'>
        <h1 className='ml-2 text-2xl font-bold'>VangTec</h1>
      </div>
      <nav className='w-1/2'>
        <ul className='flex justify-around items-center'>
          <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
            <Link href='/'>About</Link>
          </li>
          <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
            <Link href='/'>Blogs</Link>
          </li>
          <li className='hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 hover:border-primary border-background rounded-xl'>
            <Link href='/'>Contact</Link>
          </li>
          <li className='bg-theme-white text-black rounded-xl px-5 py-3 hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
            <Link href='/login'>Apply now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
