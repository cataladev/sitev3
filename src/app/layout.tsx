import NavBar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Carlos Catala - Software Developer & Audio Engineer",
  description: "Carlos Catala is a passionate software developer and audio engineer specializing in full-stack web development, real-time systems, and music technology integration. Currently working at UCF while building innovative web applications.",
  keywords: [
    "Carlos Catala",
    "Software Developer",
    "Audio Engineer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UCF",
    "University of Central Florida",
    "Knight Hacks",
    "Music Technology",
    "Real-time Systems",
    "Linux",
    "Audio APIs",
    "Hackathon Projects",
    "Open Source",
    "Frontend Development",
    "Backend Development"
  ],
  authors: [{ name: "Carlos Catala" }],
  creator: "Carlos Catala",
  publisher: "Carlos Catala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://catala.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://catala.dev",
    title: "Carlos Catala - Software Developer & Audio Engineer",
    description: "Carlos Catala is a passionate software developer and audio engineer specializing in full-stack web development, real-time systems, and music technology integration.",
    siteName: "Carlos Catala Portfolio",
    images: [
      {
        url: "carlosinnyc.jpg",
        alt: "Carlos Catala",
      }
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}>        
        <NavBar />
        <main className="flex-grow pt-12 pb-4 px-4 sm:px-6 lg:px-8 overflow-x-hidden">{children}</main>
      </body>
    </html>
  )
}