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
      
      <h1 className="text-white font-bold text-3xl pb-6 text-center sm:text-middle">
        about
      </h1>
      
      <div className="flex flex-col gap-8"> 
        <p className="text-white text-md">
          I&apos;m a software developer specializing in modern web technologies and 
          music applications. currently working with{" "}
          <AnimatedLink href="https://www.ucf.edu">
          University of Central Florida
          </AnimatedLink> while exploring innovative ways to blend audio engineering 
          with web development. in my free time, i contribute to open-source projects, 
          experiment with audio APIs, and play guitar.
        </p>

        <p className="text-white text-md">
          my technical focus spans full-stack web development, real-time systems, 
          and audio processing. i&apos;m passionate about creating seamless user 
          experiences that bridge technical functionality with creative expression.
        </p>

        <p className="text-white text-md">
          over the years, i&apos;ve worked with various technologies across the stack. 
          here are some of my core tools:
        </p>
      </div>

      <Tech />
    </section>
  )
}