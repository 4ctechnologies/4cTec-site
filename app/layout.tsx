import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Welcome to VangTec",
  description:
    "VangTec is a software development company that specializes in AI based IoT solutions.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable}} antialiased bg-white dark:bg-secondary`}
      >
        <main className='max-w-[1600px] dark:text-white mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
