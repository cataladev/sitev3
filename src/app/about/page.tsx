import AnimatedLink from "../components/AnimatedLink";
import Tech from "../components/Tech";
import FunFacts from "../components/FunFacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Carlos Catala",
  description: "Carlos Catala is a software developer with expertise in web development and music technology integration. Learn about his background, skills, and passion for creating innovative applications.",
  keywords: [
    "Carlos Catala",
    "About",
    "Software Developer",
    "Web Development",
    "Music Technology",
    "UCF",
    "Audio Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript"
  ],
  openGraph: {
    title: "About - Carlos Catala",
    description: "Carlos Catala is a software developer with expertise in web development and music technology integration.",
    url: "https://catala.dev/about",
    type: "website",
  },
};

export default function About() {
  return (
    <section className="max-w-screen-sm p-3 sm:p-4 mx-auto mb-4"> 
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-500 pb-3 sm:pb-4 text-center lowercase animate-fade-in">about me</h1>
      
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in"> 
        <p className="text-white text-sm sm:text-md lowercase">
          i&apos;m a software developer who loves modern web technologies and building things that feel great to use. i&apos;m usually listening to music while i code, and when i&apos;m not, i&apos;m probably playing valorant or teamfight tactics.
        </p>

        <p className="text-white text-sm sm:text-md lowercase">
          lately i&apos;ve been going out of my way to learn more rust and c++, and i&apos;ve really been enjoying systems-level work alongside my full-stack experience.
        </p>

        <p className="text-white text-sm sm:text-md lowercase">
          over the years, i&apos;ve worked with many different technologies. here are some of my core tools:
        </p>
      </div>

      <Tech />
      <div>
        <p className="text-white text-center pt-4 sm:pt-6 text-sm sm:text-base lowercase animate-fade-in">some fun facts:</p>
      </div>
      <FunFacts />
    </section>
  )
}