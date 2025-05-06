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
    title: "Software Engineering Intern",
    company: "University of Central Florida",
    companyLink: "https://www.ucf.edu",
    timeframe: "Mar 2025 - Present",
    location: "Orlando, FL (On-site)",
    bulletPoints: [
      "Developed a web-based tool to allow for student success coaches to track student progress and engagement.",
      "Implemented a custom API to integrate with existing systems, improving data retrieval speed by 30%.",
    ],
  },
  {
    title: "Founding Member",
    company: "kmodo",
    companyLink: "https://kmodo.org",
    timeframe: "Jan 2025 - Present",
    location: "Orlando, FL (Hybrid)",
    bulletPoints: [
      "Self-hosted infrastructure on a Linux VPS with CI/CD script for reliability and extensibility.",
      "Built responsive full-stack hackathon management tools using Next.js, tRPC, and PostgreSQL.",
    ],
  },
  {
    title: "Hackathon Organizer",
    company: "Knight Hacks",
    companyLink: "https://knighthacks.com",
    timeframe: "Dec 2024 - Present",
    location: "Orlando, FL",
    bulletPoints: [
      "Led planning and execution of Knight Hacks, coordinating logistics, sponsorship outreach, and student engagement.",
      "Developed custom event platform features with Next.js and tRPC to streamline check-in and scheduling.",
    ],
  },
  {
    title: "Possibilities Summit Participant",
    company: "Goldman Sachs",
    companyLink: "https://www.goldmansachs.com",
    timeframe: "Jan 2025 - Apr 2025",
    location: "Remote",
    bulletPoints: [
      "Expanded connections with professionals, mentors, and peers for professional growth.",
      "Gained insights into recruitment best practices and enhanced technical proficiency in Excel and financial markets.",
    ],
  },
  {
    title: "Freshman Discovery Day Fellow",
    company: "Susquehanna International Group",
    companyLink: "https://sig.com",
    timeframe: "Feb 2025",
    location: "Remote",
    bulletPoints: [
      "Attended virtual sessions on SIG's philosophy, culture, and global market role.",
      "Explored applications of game theory and decision science in trading strategies.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Crowning Games",
    timeframe: "Jun 2024 - Aug 2024",
    location: "Dallas, TX (Remote)",
    bulletPoints: [
      "Launched NPCs using GDScript, enhancing gameplay and receiving positive feedback from 75 testers.",
      "Led SCRUM implementation, achieving 90% on-time deliveries and 35% productivity gains.",
      "Optimized game performance, reducing load times by 30% and improving render smoothness.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Miami EdTech",
    timeframe: "Jun 2023 - Aug 2023",
    location: "Miami, FL (Hybrid)",
    bulletPoints: [
      "Enhanced Python AI system for facial/object recognition, improving accuracy by 30% and reducing processing time by 15%.",
      "Led a 4-intern team researching STEM kit integration in under-served schools, informing outreach for 500+ students.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Avatar Buddy, LLC",
    timeframe: "Jun 2022 - Aug 2022",
    location: "Remote",
    bulletPoints: [
      "Developed unit tests for chatbot’s multilingual & emotional recognition, increasing accuracy by 25% and engagement by 15%.",
      "Implemented bilingual detection and response features, boosting user satisfaction by 15%.",
      "Optimized backend API response times for efficient request handling.",
    ],
  },
];

export default function Career() {
  return (
    <section id="career" className="max-w-screen-md mx-auto p-4 mb-8">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
        Career Experience
      </h2>
      <ul className="space-y-8">
        {experiences.map((exp) => (
          <li key={`${exp.title}-${exp.company}`} className="flex gap-4">
            <Briefcase className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <span className="text-gray-400 text-sm">
                  @ {exp.companyLink ? (
                    <AnimatedLink href={exp.companyLink}>
                      {exp.company}
                    </AnimatedLink>
                  ) : (
                    exp.company
                  )}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {exp.timeframe} • {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-1 text-white">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
