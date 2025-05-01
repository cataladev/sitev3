import NavBar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Catala',
  description: 'Carlos is a undergraduate student at the University of Central Florida and an aspiring software engineer who just so happens to like music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <NavBar />
        <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  )
}