'use client'

import Link from 'next/link'

export default function AnimatedLink({href, children}: {href: string, children: React.ReactNode}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="relative inline-block font-medium hover:text-purple-400 transition-colors group lowercase">
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  )
}