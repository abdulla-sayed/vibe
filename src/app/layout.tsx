import type { Metadata } from "next";
import {
  ClerkProvider,
  // Show,
  // SignInButton,
  // SignUpButton,
  // UserButton,
} from "@clerk/nextjs";
import { IBM_Plex_Mono, Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>{children}</ClerkProvider>
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
