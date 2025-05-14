import ThemeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <ThemeToggle />
      {children}
      <Footer />
    </div>
  );
}
