import Link from 'next/link'
import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 pb-4">
      <div className="max-w-screen-sm mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-sm">
        <p>Made with joy <span className='text-purple-400'>:D</span></p>

        {/* Right: social / resume links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/cataladev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <SiLinkedin size={18} /> LinkedIn
          </Link>

          <Link
            href="https://github.com/cataladev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <SiGithub size={18} /> GitHub
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-white transition"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}
