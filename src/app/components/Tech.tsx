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
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

function IconWithTooltip({
  children,
  label,
}: {
  children: React.ReactElement
  label: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default function Tech() {
  return (
    <section className="max-w-screen-sm pt-4">
      <div className="flex gap-10">
        {/* Languages & Frameworks */}
        <div className="w-1/2 text-white flex flex-col gap-4">
          <Icons title="languages">
            <IconWithTooltip label="Python">
              <SiPython size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="JavaScript">
              <SiJavascript size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="TypeScript">
              <SiTypescript size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="C">
              <SiC size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="C++">
              <SiCplusplus size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="C#">
              <SiSharp size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Java">
              <FaJava size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="HTML5">
              <SiHtml5 size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="CSS3">
              <SiCss3 size={24} className="text-purple-500" />
            </IconWithTooltip>
          </Icons>

          <Icons title="frameworks">
            <IconWithTooltip label="React">
              <FaReact size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Next.js">
              <SiNextdotjs size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Node.js">
              <SiNodedotjs size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Tailwind CSS">
              <SiTailwindcss size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="tRPC">
              <SiTrpc size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Prisma">
              <SiPrisma size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="OpenCV">
              <SiOpencv size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Unity">
              <SiUnity size={24} className="text-purple-500" />
            </IconWithTooltip>
          </Icons>
        </div>

        {/* Tools & Platforms */}
        <div className="w-1/2 text-white flex flex-col gap-4">
          <Icons title="tools & platforms">
            <IconWithTooltip label="Git">
              <SiGit size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="GitHub">
              <BsGithub size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="PostgreSQL">
              <SiPostgresql size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Docker">
              <SiDocker size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Vercel">
              <SiVercel size={24} className="text-purple-500" />
            </IconWithTooltip>
            <IconWithTooltip label="Supabase">
              <SiSupabase size={24} className="text-purple-500" />
            </IconWithTooltip>
          </Icons>
        </div>
      </div>
    </section>
  )
}
