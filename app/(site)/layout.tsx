import ThemeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-dvw md:max-w-[1600px] dark:text-white mx-auto overflow-x-hidden'>
      <Header />
      <ThemeToggle />
      {children}
      <Footer />
    </div>
  );
}
