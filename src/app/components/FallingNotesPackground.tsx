"use client";

import React, { useEffect, useState, ReactNode, CSSProperties } from "react";
import { Music, Music2 } from "lucide-react";

// Defines one note's inline style properties
type NoteStyle = {
  top: string;
  left: string;
  fontSize: string;
  animationDelay: string;
  animationDuration: string;
};

// Generate random style for each note
const generateNoteStyle = (): NoteStyle => ({
  top: `-25px`,                            // start above the container
  left: `${Math.random() * 100}%`,         // anywhere horizontally
  fontSize: `${12 + Math.random() * 24}px`, // random size between 12–36px
  animationDelay: `${Math.random() * 5}s`,  // staggered delay 0–5s
  animationDuration: `${5 + Math.random() * 10}s`, // duration 5–15s
});

// Renders four waves of notes
const Notes = () => {
  const [styles, setStyles] = useState<NoteStyle[][]>([]);

  useEffect(() => {
    const wave = (count: number) => Array.from({ length: count }, () => generateNoteStyle());
    setStyles([wave(12), wave(12), wave(12), wave(12)]);
  }, []);

  if (styles.length === 0) return null;

  return (
    <>
      {styles.map((wave, w) =>
        wave.map((s, i) => {
          const Icon = w % 2 === 0 ? Music2 : Music;
          return (
            <Icon
              key={`note-${w}-${i}`}
              className="absolute animate-fall"
              style={{
                ...s,
                color: w < 2 ? "oklch(71.4% 0.203 305.504)" : "oklch(49.6% 0.265 301.924)",
                zIndex: 0,
              } as CSSProperties}
            />
          );
        })
      )}
    </>
  );
};

// Wrapper that ensures notes are behind and spans full content height
export default function FallingNotesBackground({ children }: { children: ReactNode }) {
  return (
    <>{/* Notes are fixed full-screen, clipped just to the viewport */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Notes />
      </div>
  
      {/* Render your children normally—no wrapper that shifts padding */}
      {children}
    </>
  );
}
  