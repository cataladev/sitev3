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

const jobs: Experience[] = [
  {
    title: "software engineer intern",
    company: "ZuLeris Interactive",
    companyLink: "https://www.zuleris.com/",
    timeframe: "jun 2025 - aug 2025",
    location: "remote",
    bulletPoints: [
      "Implemented a NotificationManager with auto-generated UI and FIFO queue, reducing notification bugs by 75%, and developed an ObjectiveManager with 10+ ObjectiveData assets and event-driven completion, cutting manual tracking effort by 80%.",
      "Abstracted game-mode lifecycle via IGameModeManager, refactored 2 managers and the loader to slash maintenance time by 60% and support 3 new modes without changes."
    ],
  },
  {
    title: "software engineering intern",
    company: "university of central florida",
    companyLink: "https://www.ucf.edu",
    timeframe: "mar 2025 - jun 2025",
    location: "orlando, fl (on-site)",
    bulletPoints: [
      "developed a web-based tool to allow for success coaches to track user progress and engagement.",
      "implemented a custom api to integrate with existing systems, improving data retrieval speed by 30%.",
    ],
  },
  {
    title: "software engineering intern",
    company: "crowning games",
    companyLink: "https://crowninggames.com",
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
    companyLink: "https://miamiedtech.com/",
    timeframe: "jun 2023 - aug 2023",
    location: "miami, fl (hybrid)",
    bulletPoints: [
      "enhanced python ai system for facial/object recognition, improving accuracy by 30% and reducing processing time by 15%.",
      "led a 4-intern team researching stem kit integration in under-served communities, informing outreach for 500+ users.",
    ],
  },
  {
    title: "software engineering intern",
    company: "avatar buddy",
    companyLink: "https://avatarbuddy.co/",
    timeframe: "jun 2022 - aug 2022",
    location: "remote",
    bulletPoints: [
      "developed unit tests for chatbot's multilingual & emotional recognition, increasing accuracy by 25% and engagement by 15%.",
      "implemented bilingual detection and response features, boosting user satisfaction by 15%.",
      "optimized backend api response times for efficient request handling.",
    ],
  },
];

const extracurriculars: Experience[] = [
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
    companyLink: "https://knighthacks.org",
    timeframe: "dec 2024 - present",
    location: "orlando, fl",
    bulletPoints: [
      "led planning and execution of knight hacks, coordinating logistics, sponsorship outreach, and user engagement.",
      "developed custom event platform features with next.js and trpc to streamline check-in and scheduling.",
    ],
  },
];

const programs: Experience[] = [
  {
    title: "tech week (incoming)",
    company: "Capital One",
    companyLink: "https://www.capitalone.com",
    timeframe: "upcoming",
    location: "remote",
    bulletPoints: [
      "Selected to participate in Capital One Tech Week, a program for exploring technology careers and networking with industry professionals.",
      "Will engage in workshops and sessions focused on innovation, software engineering, and career development."
    ],
  },
  {
    title: "possibilities summit participant",
    company: "Goldman Sachs",
    companyLink: "https://www.goldmansachs.com",
    timeframe: "jan 2025 - apr 2025",
    location: "remote",
    bulletPoints: [
      "Actively expanded connections with industry professionals, mentors, and peers, cultivating meaningful relationships to create opportunities for professional growth.",
      "Gained insights into recruitment best practices, understanding effective hiring processes, enhanced technical proficiency in areas such as Excel and financial markets, building a versatile skill set."
    ],
  },
  {
    title: "discovery day fellow",
    company: "Susquehanna International Group",
    companyLink: "https://sig.com",
    timeframe: "feb 2025",
    location: "remote",
    bulletPoints: [
      "Attended 3 virtual sessions in the span of two days covering SIG's philosophy, work culture, and role in global financial markets.",
      "Discussed the significance of game theory and decision science in making SIG a leading global trading firm."
    ],
  },
];

export default function Career() {
  return (
    <section id="career" className="max-w-screen-md mx-auto p-2 sm:p-4 mb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-3 sm:mb-4 text-center lowercase animate-fade-in">career experience</h2>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 lowercase">jobs</h3>
          <ul className="space-y-4 sm:space-y-6">
            {jobs.map((exp) => (
              <li key={`${exp.title}-${exp.company}`} className="flex gap-2 sm:gap-4">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 flex-wrap">
                    <h4 className="text-lg sm:text-xl font-semibold text-white lowercase">{exp.title}</h4>
                    <span className="text-gray-400 text-xs sm:text-sm lowercase">
                      @ {exp.companyLink ? (
                        <AnimatedLink href={exp.companyLink}>{exp.company}</AnimatedLink>
                      ) : (exp.company)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2 lowercase">{exp.timeframe} • {exp.location}</p>
                  <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white text-sm sm:text-base">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i} className="lowercase">{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 lowercase">extracurriculars</h3>
          <ul className="space-y-4 sm:space-y-6">
            {extracurriculars.map((exp) => (
              <li key={`${exp.title}-${exp.company}`} className="flex gap-2 sm:gap-4">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 flex-wrap">
                    <h4 className="text-lg sm:text-xl font-semibold text-white lowercase">{exp.title}</h4>
                    <span className="text-gray-400 text-xs sm:text-sm lowercase">
                      @ {exp.companyLink ? (
                        <AnimatedLink href={exp.companyLink}>{exp.company}</AnimatedLink>
                      ) : (exp.company)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2 lowercase">{exp.timeframe} • {exp.location}</p>
                  <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white text-sm sm:text-base">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i} className="lowercase">{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {programs.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 lowercase">programs & events</h3>
            <ul className="space-y-4 sm:space-y-6">
              {programs.map((exp) => (
                <li key={`${exp.title}-${exp.company}`} className="flex gap-2 sm:gap-4">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 flex-wrap">
                      <h4 className="text-lg sm:text-xl font-semibold text-white lowercase">{exp.title}</h4>
                      <span className="text-gray-400 text-xs sm:text-sm lowercase">
                        @ {exp.companyLink ? (
                          <AnimatedLink href={exp.companyLink}>{exp.company}</AnimatedLink>
                        ) : (exp.company)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2 lowercase">{exp.timeframe} • {exp.location}</p>
                    <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-white text-sm sm:text-base">
                      {exp.bulletPoints.map((point, i) => (
                        <li key={i} className="lowercase">{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}