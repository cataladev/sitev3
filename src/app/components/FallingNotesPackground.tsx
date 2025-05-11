"use client";

import React, { useEffect, useState, ReactNode, CSSProperties } from "react";
import { Music, Music2 } from "lucide-react";

type NoteStyle = {
  top: string;
  left: string;
  fontSize: string;
  animationDelay: string;
  animationDuration: string;
};

const generateNoteStyle = (): NoteStyle => ({
  top: `-25px`,
  left: `${Math.random() * 100}%`,
  fontSize: `${12 + Math.random() * 24}px`,
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${5 + Math.random() * 25}s`,
});

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
            <Icon key={`note-${w}-${i}`} className="absolute animate-fall" style={{
              ...s,
              color: w < 2 ? "oklch(71.4% 0.203 305.504)" : "oklch(49.6% 0.265 301.924)",
              zIndex: 0,
            } as CSSProperties} />
          );
        })
      )}
    </>
  );
};

export default function FallingNotesBackground({ children }: { children: ReactNode }) {
  const [showNotes, setShowNotes] = React.useState(true);

  React.useEffect(() => {
    const checkScreen = () => {
      setShowNotes(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = window.innerWidth >= 768 ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {showNotes && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <Notes />
        </div>
      )}
      {children}
    </>
  );
}