"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

interface FunFact {
  text: string;
  footnote?: string;
}

const FACTS: FunFact[] = [
  {
    text: "I’ve logged over 3,500 hours in Minecraft.",
    footnote: "but hear me out... i've been playing since like 2013",
  },
  {
    text: "I had the first tie that led to a runoff in Knight Hacks history",
    footnote: "looking at you Daniel",
  },
  {
    text: "I chose UCF because of extracurriculars like Knight Hacks",
    footnote: "i <3 kh and hackathons",
  },
  {
    text: "I’ve owned three dogs in my lifetime, but they’re not my favorite pets, cats are",
  },
  {
    text: "Just in case you couldn’t tell, I REALLY like music",
    footnote: "Like, REALLY",
  },
  {
    text: "Despite not playing much, Pokemon is my favorite franchise, specifically Pokémon White",
  },
];

export default function FunFacts() {
  const [current, setCurrent] = useState(0);
  const { text, footnote } = FACTS[current];

  const handleNext = () => {
    setCurrent((i) => (i + 1) % FACTS.length);
  };

  return (
    <div className="mx-auto max-w-md m-4 p-6 border border-white rounded-lg">
      <header className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold">Fun Fact</h3>
      </header>

      <p className="text-white text-base mb-6">
        {text}
        {footnote && (
          <span className="ml-2 text-xs text-gray-400">({footnote})</span>
        )}
      </p>

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Next Fact
      </button>
    </div>
  );
}
