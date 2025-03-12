import { Github, Linkedin, FileUser, Headphones} from 'lucide-react'

export default function SocialIcons() {
  return (
    <div className="flex gap-6">
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
        >
            <FileUser className="w-7 h-7" />
        </a>
        <a
            href="https://github.com/cataladev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
        >
            <Github className="w-7 h-7" />
        </a>
        <a
            href="https://linkedin.com/in/cataladev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
        >
            <Linkedin className="w-7 h-7" />
        </a>
      
        <a
            href="https://last.fm/user/catwing69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
        >
            <Headphones className="w-7 h-7" />
        </a>

    </div>
  )
}