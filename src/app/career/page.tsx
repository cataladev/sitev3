"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import AnimatedLink from "../components/AnimatedLink";

type Experience = {
  title: string;
  company: string;
  companyLink?: string;
  timeframe: string;
  location?: string;
  bulletPoints: string[];
};

const experiences: Experience[] = [
  {
    title: "software engineering intern",
    company: "university of central florida",
    companyLink: "https://www.ucf.edu",
    timeframe: "mar 2025 - present",
    location: "orlando, fl (on-site)",
    bulletPoints: [
      "developed a web-based tool to allow for student success coaches to track student progress and engagement.",
      "implemented a custom api to integrate with existing systems, improving data retrieval speed by 30%.",
    ],
  },
  {
    title: "founding member",
    company: "kmodo",
    companyLink: "https://kmodo.org",
    timeframe: "jan 2025 - present",
    location: "orlando, fl (hybrid)",
    bulletPoints: [
      "self-hosted infrastructure on a linux vps with ci/cd script for reliability and extensibility.",
      "built responsive full-stack hackathon management tools using next.js, trpc, and postgresql.",
    ],
  },
  {
    title: "hackathon organizer",
    company: "knight hacks",
    companyLink: "https://knighthacks.com",
    timeframe: "dec 2024 - present",
    location: "orlando, fl",
    bulletPoints: [
      "led planning and execution of knight hacks, coordinating logistics, sponsorship outreach, and student engagement.",
      "developed custom event platform features with next.js and trpc to streamline check-in and scheduling.",
    ],
  },
  {
    title: "possibilities summit participant",
    company: "goldman sachs",
    companyLink: "https://www.goldmansachs.com",
    timeframe: "jan 2025 - apr 2025",
    location: "remote",
    bulletPoints: [
      "expanded connections with professionals, mentors, and peers for professional growth.",
      "gained insights into recruitment best practices and enhanced technical proficiency in excel and financial markets.",
    ],
  },
  {
    title: "freshman discovery day fellow",
    company: "susquehanna international group",
    companyLink: "https://sig.com",
    timeframe: "feb 2025",
    location: "remote",
    bulletPoints: [
      "attended virtual sessions on sig's philosophy, culture, and global market role.",
      "explored applications of game theory and decision science in trading strategies.",
    ],
  },
  {
    title: "software engineering intern",
    company: "crowning games",
    timeframe: "jun 2024 - aug 2024",
    location: "dallas, tx (remote)",
    bulletPoints: [
      "launched npcs using gdscript, enhancing gameplay and receiving positive feedback from 75 testers.",
      "led scrum implementation, achieving 90% on-time deliveries and 35% productivity gains.",
      "optimized game performance, reducing load times by 30% and improving render smoothness.",
    ],
  },
  {
    title: "software engineering intern",
    company: "miami edtech",
    timeframe: "jun 2023 - aug 2023",
    location: "miami, fl (hybrid)",
    bulletPoints: [
      "enhanced python ai system for facial/object recognition, improving accuracy by 30% and reducing processing time by 15%.",
      "led a 4-intern team researching stem kit integration in under-served schools, informing outreach for 500+ students.",
    ],
  },
  {
    title: "software engineering intern",
    company: "avatar buddy, llc",
    timeframe: "jun 2022 - aug 2022",
    location: "remote",
    bulletPoints: [
      "developed unit tests for chatbot's multilingual & emotional recognition, increasing accuracy by 25% and engagement by 15%.",
      "implemented bilingual detection and response features, boosting user satisfaction by 15%.",
      "optimized backend api response times for efficient request handling.",
    ],
  },
];

export default function Career() {
  return (
    <section id="career" className="max-w-screen-md mx-auto p-4 mb-8">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center lowercase">career experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp) => (
          <li key={`${exp.title}-${exp.company}`} className="flex gap-4">
            <Briefcase className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-xl font-semibold text-white lowercase">{exp.title}</h3>
                <span className="text-gray-400 text-sm lowercase">
                  @ {exp.companyLink ? (
                    <AnimatedLink href={exp.companyLink}>{exp.company}</AnimatedLink>
                  ) : (exp.company)}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2 lowercase">{exp.timeframe} • {exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-white">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="lowercase">{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}