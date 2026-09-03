import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // over here you set the title of your app and the description
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
/*
 * something inside your current folder is reached with a single /
 * if you want to navigate into something more inside, you do /current/something
 * sometimes we want to organize the routes but not change the URL structure, this could be like
 * something like the Route Groups, especially named folder which does not effect the URL you can read
 * in the nextjs docs, the convention is (folderName) and like this it will not affect the URL. Thus,
 * if you <root>/(marketing)/about in your folders, to go to the about about page you just do /about
 * without writing the marketing thing, this is because its the Route Group.
 * We did it in the (dashboard) and (routes) and others in this project.
 *
 * */
