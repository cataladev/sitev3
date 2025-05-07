'use client' 

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [path, setPath] = useState<string | null>(null)
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'career', path: '/career' },
    { name: 'projects', path: '/projects' },
  ]

  return (
    <nav className="flex justify-center h-16">
      <div className="flex justify-center w-full max-w-screen-xl px-4 mx-auto items-center">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute left-4 text-white p-2"
          aria-label="toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="hidden md:flex justify-center text-white gap-6">
          {links.map((link) => {
            const isActive = path === link.path
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm transition-all duration-200 lowercase ${isActive ? 'border-b-2 border-purple-500 decoration-purple-500' : 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-200 hover:after:w-full'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
            <div className="flex flex-col p-4">
              {links.map((link) => {
                const isActive = path === link.path
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-4 text-sm lowercase ${isActive ? 'text-purple-500' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}