import FallingNotesBackground from "./components/FallingNotesPackground";
import ListeningActivity from "./components/ListeningActivity";
import SocialIcons from "./components/SocialIcons";
import Top3 from "./components/Top3";

export default function Home() {
  return (
    <FallingNotesBackground>
      <div className="flex flex-col items-center justify-start min-h-screen w-full px-4 pt-2 pb-4">
        <div className="w-full max-w-3xl text-center">
          <div className="flex flex-col items-center gap-1 mb-2">
            <p className="text-white text-sm font-light tracking-widest lowercase">hi i&apos;m</p>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent leading-tight lowercase">carlos catala</h1>
            <SocialIcons />
          </div>

          <div className="max-w-[280px] mx-auto mt-2">
            <ListeningActivity />
          </div>

          <p className="mt-3 text-white text-sm font-light tracking-widest lowercase">here are my top 3 albums at the moment</p>

          <Top3 />
        </div>
      </div>
    </FallingNotesBackground>
  );
}