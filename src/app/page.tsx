import ListeningActivity from "./components/ListeningActivity";
import SocialIcons from "./components/SocialIcons";
import Top3 from "./components/Top3";

export default function Home() {
  return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-4 text-center">
        <div className="flex flex-col items-center gap-3 mb-4">
          <p className="text-white text-sm font-light tracking-widest lowercase">hi i&apos;m</p>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent leading-tight lowercase">carlos catala</h1>
          <SocialIcons />
        </div>

        <div className="max-w-[280px] mx-auto">
          <ListeningActivity />
        </div>

        <p className="mt-8 text-white text-sm font-light tracking-widest lowercase">here are my top 3 albums at the moment</p>

        <Top3 />
      </div>
  );
}