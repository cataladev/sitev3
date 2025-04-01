'use client' 

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [path, setPath] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setPath(pathname) // Avoid SSR mismatch
  }, [pathname])

  const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'work', path: '/work' },
    { name: 'projects', path: '/projects' },
  ]

  return (
    <nav className="flex justify-center h-16">
      <div className="flex mx-auto p-4 items-center">
        <div className="text-white gap-4 flex flex-row">
          {links.map((link) => {
            const isActive = path === link.path
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm transition-all duration-200 ${
                  isActive
                    ? 'border-b-2 border-purple-500 decoration-purple-500'
                    : 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-200 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
