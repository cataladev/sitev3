import NavBar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Carlos Catala",
  description: "Carlos Catala is an undergraduate software developer with expertise in web development.",
  keywords:[
        "Carlos Catala",
        "Software Engineer",
        "UCF",
        "University of Central Florida",
        "Knight Hacks",
        "Web Development",
        "Full stack",
    ],
    openGraph: {
      type: "website",
      title: "Carlos Catala",
      description:
      "Carlos Catala is an undergraduate software developer with expertise in web development.",
      url: "https://catala.dev",
      images: [{ url: "https://catala.dev/glorp.png" }],
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