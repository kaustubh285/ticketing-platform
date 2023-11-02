import Navigation from "@/components/Navigationcomponents";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Providers } from "./providers";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A ticketing system for your tasks!!",
  description: "A ticketing system for your tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Navigation />
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
