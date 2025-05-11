"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Auto-rotate through facts every 8 seconds
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % FACTS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const { text, footnote } = FACTS[current];

  return (
    <div className="mx-auto max-w-full sm:max-w-lg p-3 sm:p-5 my-3 sm:my-5 bg-black bg-opacity-100 border border-white rounded-lg animate-fade-in">
      <div className="relative flex flex-col items-center text-center">
        <div className="text-base sm:text-lg text-gray-100 lowercase">
          {text}
          {footnote && <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-400 lowercase">({footnote})</span>}
        </div>

        <div className="mt-4 flex justify-center space-x-1 sm:space-x-2">
          {FACTS.map((_, i) => (
            <button
              key={i}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${i === current ? 'bg-purple-400' : 'bg-gray-600'}`}
              onClick={() => setCurrent(i)}
              aria-label={`View fact ${i+1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}