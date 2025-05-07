import AnimatedLink from "../components/AnimatedLink";
import Tech from "../components/Tech";
import FunFacts from "../components/FunFacts";
import Metadata from "../components/Metadata";

export default function About() {
  return (
    <section className="max-w-screen-sm p-4 mx-auto mb-8 pt-8"> 
      <Metadata title="about" description="carlos catala is a software developer with expertise in web development and music technology integration." />
      
      <h1 className="text-purple-500 font-bold text-3xl pb-6 text-center lowercase">about me</h1>
      
      <div className="flex flex-col gap-8"> 
        <p className="text-white text-md lowercase">
          i&apos;m a software developer specializing in modern web technologies and music applications. currently working for the{" "}
          <AnimatedLink href="https://www.ucf.edu">university of central florida</AnimatedLink> while exploring innovative ways to blend audio engineering with web development. in my free time, i mess with linux configs, experiment with audio apis, and play video games.
        </p>

        <p className="text-white text-md lowercase">
          my technical focus spans full-stack web development, real-time systems, and audio processing. i&apos;m passionate about creating user experiences that bridge technical functionality with creative expression.
        </p>

        <p className="text-white text-md lowercase">
          over the years, i&apos;ve worked with many different technologies. here are some of my core tools:
        </p>
      </div>

      <Tech />
      <div>
        <p className="text-white text-center pt-8 lowercase">some fun facts:</p>
      </div>
      <FunFacts />
    </section>
  )
}