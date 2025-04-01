// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
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
            const isActive = pathname === link.path || pathname === link.path.replace(/\/$/, "")
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm ${
                  isActive ? 'still-underline' : 'link-underline'
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