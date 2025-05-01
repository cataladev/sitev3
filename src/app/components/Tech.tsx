import { FaJava, FaReact } from 'react-icons/fa'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTrpc,
  SiPrisma,
  SiOpencv,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiSupabase,
  SiUnity,
} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { Icons } from './IconGroup'

export default function Tech() {
  return (
    <section className="max-w-screen-sm pt-4">
      <div className="flex gap-10">
        {/* Languages & Frameworks */}
        <div className="w-1/2 text-white flex flex-col gap-4">
          <Icons title="languages">
            <SiPython size={24} title="Python" className="text-purple-500" />
            <SiJavascript size={24} title="JavaScript" className="text-purple-500" />
            <SiTypescript size={24} title="TypeScript" className="text-purple-500" />
            <SiC size={24} title="C" className="text-purple-500" />
            <SiCplusplus size={24} title="C++" className="text-purple-500" />
            <SiSharp size={24} title="C#" className="text-purple-500" />
            <FaJava size={24} title="Java" className="text-purple-500" />
            <SiHtml5 size={24} title="HTML5" className="text-purple-500" />
            <SiCss3 size={24} title="CSS3" className="text-purple-500" />
          </Icons>

          <Icons title="frameworks">
            <FaReact size={24} title="React" className="text-purple-500" />
            <SiNextdotjs size={24} title="Next.js" className="text-purple-500" />
            <SiNodedotjs size={24} title="Node.js" className="text-purple-500" />
            <SiTailwindcss size={24} title="Tailwind CSS" className="text-purple-500" />
            <SiTrpc size={24} title="tRPC" className="text-purple-500" />
            <SiPrisma size={24} title="Prisma" className="text-purple-500" />
            <SiOpencv size={24} title="OpenCV" className="text-purple-500" />
            <SiUnity size={24} title="Unity" className="text-purple-500" />
          </Icons>
        </div>

        {/* Tools & Platforms */}
        <div className="w-1/2 text-white flex flex-col gap-4">
          <Icons title="tools & platforms">
            <SiGit size={24} title="Git" className="text-purple-500" />
            <BsGithub size={24} title="GitHub" className="text-purple-500" />
            <SiPostgresql size={24} title="PostgreSQL" className="text-purple-500" />
            <SiDocker size={24} title="Docker" className="text-purple-500" />
            <SiVercel size={24} title="Vercel" className="text-purple-500" />
            <SiSupabase size={24} title="Supabase" className="text-purple-500" />
          </Icons>
        </div>
      </div>
    </section>
  )
}
