import AnimatedLink from "../components/AnimatedLink";
import Metadata from "../components/Metadata";
import Tech from "../components/Tech";

export default function About() {
  return (
    <section className="max-w-screen-sm p-4 mx-auto mb-8 pt-8"> 
      <Metadata 
        title="About" 
        description="Carlos Catala is a software developer with expertise in web development and music technology integration." 
      />
      
      <h1 className="text-purple-400 font-bold text-3xl pb-6 text-center sm:text-middle">
        About Me
      </h1>
      
      <div className="flex flex-col gap-8"> 
        <p className="text-white text-md">
          I&apos;m a software developer specializing in modern web technologies and 
          music applications. currently working for the{" "}
          <AnimatedLink href="https://www.ucf.edu">
          University of Central Florida
          </AnimatedLink> while exploring innovative ways to blend audio engineering 
          with web development. in my free time, I mess with linux configs, 
          experiment with audio APIs, and play video games.
        </p>

        <p className="text-white text-md">
          My technical focus spans full-stack web development, real-time systems, 
          and audio processing. i&apos;m passionate about creating user 
          experiences that bridge technical functionality with creative expression.
        </p>

        <p className="text-white text-md">
          Over the years, i&apos;ve worked with many different technologies. 
          here are some of my core tools:
        </p>
      </div>

      <Tech />
    </section>
  )
}