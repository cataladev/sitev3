"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

interface FunFact {
  text: string;
  footnote?: string;
}

const FACTS: FunFact[] = [
  {
    text: "i've logged over 3,500 hours in minecraft.",
    footnote: "but hear me out... i've been playing since like 2013",
  },
  {
    text: "i had the first tie that led to a runoff in knight hacks history",
    footnote: "looking at you daniel",
  },
  {
    text: "i chose ucf because of extracurriculars like knight hacks",
    footnote: "i <3 kh and hackathons",
  },
  {
    text: "i've owned three dogs in my lifetime, but they're not my favorite pets, cats are",
  },
  {
    text: "just in case you couldn't tell, i really like music",
    footnote: "like, really",
  },
  {
    text: "despite not playing much, pokemon is my favorite franchise, specifically pokémon white",
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
        <h3 className="text-lg font-semibold lowercase">fun fact</h3>
      </header>

      <p className="text-white text-base mb-6 lowercase">
        {text}
        {footnote && <span className="ml-2 text-xs text-gray-400 lowercase">({footnote})</span>}
      </p>

      <button onClick={handleNext} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition lowercase">
        next fact
      </button>
    </div>
  );
}