import AnimatedLink from "../components/AnimatedLink";
import Tech from "../components/Tech";
import FunFacts from "../components/FunFacts";
import Metadata from "../components/Metadata";

export default function About() {
  return (
    <section className="max-w-screen-sm p-3 sm:p-4 mx-auto mb-4"> 
      <Metadata title="about" description="carlos catala is a software developer with expertise in web development and music technology integration." />
      
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-500 pb-3 sm:pb-4 text-center lowercase animate-fade-in">about me</h1>
      
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in"> 
        <p className="text-white text-sm sm:text-md lowercase">
          i&apos;m a software developer specializing in modern web technologies and music applications. currently working for the{" "}
          <AnimatedLink href="https://www.ucf.edu">university of central florida</AnimatedLink> while exploring innovative ways to blend audio engineering with web development. in my free time, i mess with linux configs, experiment with audio apis, and play video games.
        </p>

        <p className="text-white text-sm sm:text-md lowercase">
          my technical focus spans full-stack web development, real-time systems, and audio processing. i&apos;m passionate about creating user experiences that bridge technical functionality with creative expression.
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