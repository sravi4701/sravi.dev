import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Shankar",
  description: "Welcome to my blog, Here, I share my tech learnings",
};
// / -> page.tsx
/**
 * This is the shared layout for all the routes
 * @param param0
 * @returns
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-3xl mb-40 flex flex-col md:flex-row lg:mx-auto`}
      >
        <div className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
