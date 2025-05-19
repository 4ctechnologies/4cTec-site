import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SessionProvider } from "next-auth/react";

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
  title: "Welcome to 4CTechnologies",
  description:
    "4CTechnologies is a software development company that specializes in AI based IoT solutions.",
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
        <ThemeProvider>
          <SessionProvider>
            <main className='md:max-w-[1600px] w-dvw dark:text-white mx-auto overflow-x-hidden'>
              {children}
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
