import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import Logo from "./logo";
import MobileMenu from "./MobileMenu";

export default async function Header() {
  const session = await auth();
  return (
    <header className='w-full'>
      <div className='flex items-center justify-between w-dvw max-w-[1600px] p-4 bg-white dark:bg-secondary dark:text-white fixed top-0 z-10 mx-auto left-0 right-0'>
        <div className='flex items-center w-1/2'>
          <Link href={"/"}>
            <Logo className='w-40 cursor-pointer' />
          </Link>
        </div>
        {/* Mobile menu */}
        <MobileMenu className='md:hidden'>
          <div className='cursor-pointer bg-theme-white text-black rounded-xl px-5 py-3 hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
            {!session ? (
              <form
                action={async () => {
                  "use server";
                  await signIn("asgardeo", {
                    prompt: "login",
                    redirectTo: "/dashboard",
                  });
                }}
              >
                <button className='cursor-pointer' type='submit'>
                  Login
                </button>
              </form>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirect: true, redirectTo: "/" });
                }}
              >
                <button type='submit'>Logout</button>
              </form>
            )}
          </div>
        </MobileMenu>
        <nav className='w-1/2 hidden md:block'>
          <ul className='flex justify-around items-center'>
            <li className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'>
              <Link href='/'>About</Link>
            </li>
            <li className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'>
              <Link href='/blogs/1'>Blogs</Link>
            </li>
            <li className='cursor-pointer hover:text-primary transition duration-300 ease-in-out py-3 px-5 border-2 border-white hover:border-primary dark:border-secondary rounded-xl'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='cursor-pointer bg-theme-white text-black rounded-xl px-5 py-3 hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
              {!session ? (
                <form
                  action={async () => {
                    "use server";
                    await signIn("asgardeo", {
                      prompt: "login",
                      redirectTo: "/dashboard",
                    });
                  }}
                >
                  <button className='cursor-pointer' type='submit'>
                    Login
                  </button>
                </form>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirect: true, redirectTo: "/" });
                  }}
                >
                  <button type='submit'>Logout</button>
                </form>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
