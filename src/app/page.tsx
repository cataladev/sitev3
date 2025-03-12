import ListeningActivity from "./components/ListeningActivity";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-3xl px-4">
        <div className="flex flex-col items-center gap-3 mb-4">
          <p className="text-white text-sm font-light tracking-widest">hey i&apos;m</p>
          <h1 className="text-purple-500 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Carlos Catala
          </h1>
          <div>
            <SocialIcons />
          </div>
        </div>
        <div className="max-w-[280px] mx-auto"> 
          <ListeningActivity />
        </div>
      </div>
    </div>
  )
}