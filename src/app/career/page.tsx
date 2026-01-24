import { Briefcase } from "lucide-react";
import AnimatedLink from "../components/AnimatedLink";
import { Metadata } from "next";

export const revalidate = 60 * 60 * 24; // update durations daily

export const metadata: Metadata = {
  title: "Career - Carlos Catala",
  description: "Explore Carlos Catala's professional experience, internships, and career journey in software engineering, game development, and web technologies.",
  keywords: [
    "Carlos Catala",
    "Career",
    "Software Engineer",
    "Internships",
    "BNY",
    "Knight Hacks",
    "Perplexity",
    "ColorStack",
    "ZuLeris Interactive",
    "UCF",
    "Crowning Games",
    "Miami EdTech",
    "Avatar Buddy",
    "Game Development",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript"
  ],
  openGraph: {
    title: "Career - Carlos Catala",
    description: "Explore Carlos Catala's professional experience, internships, and career journey in software engineering.",
    url: "https://catala.dev/career",
    type: "website",
  },
};

type MonthYear = {
  year: number;
  month: number; // 1-12
};

type DateRange = {
  start: MonthYear;
  end?: MonthYear; // undefined = Present
};

type ExperiencePosition = {
  title: string;
  range: DateRange;
  bulletPoints?: string[];
};

type ExperienceOrg = {
  company: string;
  companyLink?: string;
  location?: string;
  positions: ExperiencePosition[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function clampMonth(month: number) {
  return Math.min(12, Math.max(1, month));
}

function formatMonthYear({ year, month }: MonthYear) {
  return `${MONTHS[clampMonth(month) - 1]} ${year}`;
}

function monthsInclusive(start: MonthYear, end: MonthYear) {
  const s = { year: start.year, month: clampMonth(start.month) };
  const e = { year: end.year, month: clampMonth(end.month) };
  return (e.year - s.year) * 12 + (e.month - s.month) + 1;
}

function formatDuration(totalMonths: number) {
  const months = Math.max(1, totalMonths);
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (rem > 0) parts.push(`${rem} mo${rem === 1 ? "" : "s"}`);
  if (parts.length === 0) return "1 mo";
  return parts.join(" ");
}

function formatRange(range: DateRange, now: MonthYear) {
  const start = formatMonthYear(range.start);
  const end = range.end ? formatMonthYear(range.end) : "Present";
  const endForDuration = range.end ?? now;
  const duration = formatDuration(monthsInclusive(range.start, endForDuration));
  return `${start} - ${end} · ${duration}`;
}

function orgDuration(org: ExperienceOrg, now: MonthYear) {
  const starts = org.positions.map((p) => p.range.start);
  const ends = org.positions.map((p) => p.range.end ?? now);
  const minStart = starts.reduce((a, b) => (a.year * 12 + a.month <= b.year * 12 + b.month ? a : b));
  const maxEnd = ends.reduce((a, b) => (a.year * 12 + a.month >= b.year * 12 + b.month ? a : b));
  return formatDuration(monthsInclusive(minStart, maxEnd));
}

const jobs: ExperienceOrg[] = [
  {
    company: "Knight Hacks",
    companyLink: "https://blade.knighthacks.org/",
    location: "Orlando, Florida, United States",
    positions: [
      {
        title: "vice president",
        range: { start: { year: 2026, month: 1 } },
        bulletPoints: ["leading a community"],
      },
    ],
  },
  {
    company: "Knight Hacks",
    companyLink: "https://blade.knighthacks.org/",
    location: "Orlando, Florida, United States",
    positions: [
      {
        title: "hackathon organizer",
        range: { start: { year: 2024, month: 12 }, end: { year: 2026, month: 1 } },
        bulletPoints: ["building a community"],
      },
    ],
  },
  {
    company: "BNY",
    companyLink: "https://www.bnymellon.com/",
    location: "Orlando, Florida, United States",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2025, month: 12 } },
        bulletPoints: ["ucf coop program"],
      },
    ],
  },
  {
    company: "perplexity",
    companyLink: "https://www.perplexity.ai/",
    positions: [
      {
        title: "campus ambassador",
        range: { start: { year: 2026, month: 1 } },
        bulletPoints: ["campus ai outreach"],
      },
    ],
  },
  {
    company: "zuleris interactive",
    companyLink: "https://www.zuleris.com/",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2025, month: 6 }, end: { year: 2025, month: 8 } },
        bulletPoints: ["simulations"],
      },
    ],
  },
  {
    company: "university of central florida",
    companyLink: "https://www.ucf.edu",
    location: "Orlando, Florida, United States",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2025, month: 4 }, end: { year: 2025, month: 6 } },
        bulletPoints: ["ai integration with data analytics"],
      },
    ],
  },
  {
    company: "crowning games",
    companyLink: "https://crowninggames.com",
    location: "Dallas, Texas, United States",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2024, month: 6 }, end: { year: 2024, month: 8 } },
        bulletPoints: ["games"],
      },
    ],
  },
  {
    company: "miami edtech",
    companyLink: "https://miamiedtech.com/",
    location: "Miami, Florida, United States",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2023, month: 6 }, end: { year: 2023, month: 8 } },
        bulletPoints: ["stem education tools"],
      },
    ],
  },
  {
    company: "avatar buddy, llc",
    companyLink: "https://avatarbuddy.co/",
    location: "Florida, United States",
    positions: [
      {
        title: "software engineer intern",
        range: { start: { year: 2022, month: 6 }, end: { year: 2022, month: 8 } },
        bulletPoints: ["chatbots"],
      },
    ],
  },
];

export default function Career() {
  const nowDate = new Date();
  const now: MonthYear = { year: nowDate.getFullYear(), month: nowDate.getMonth() + 1 };

  return (
    <section id="career" className="max-w-screen-md mx-auto p-2 sm:p-4 mb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-3 sm:mb-4 text-center lowercase animate-fade-in">career experience</h2>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 lowercase">jobs</h3>
          <ul className="space-y-4 sm:space-y-6">
            {jobs.map((org, idx) => (
              <li key={`${org.company}-${idx}`} className="flex gap-2 sm:gap-4">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="flex flex-col">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{org.companyLink ? (
                      <AnimatedLink href={org.companyLink}>{org.company}</AnimatedLink>
                    ) : org.company}</h4>
                    {(org.positions.length > 0 || org.location) && (
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {[orgDuration(org, now), org.location].filter(Boolean).join(" • ")}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 space-y-3">
                    {org.positions.map((pos) => (
                      <div key={`${org.company}-${pos.title}-${pos.range.start.year}-${pos.range.start.month}`}>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 flex-wrap">
                          <p className="text-white font-medium">{pos.title}</p>
                          <p className="text-gray-400 text-xs sm:text-sm">{formatRange(pos.range, now)}</p>
                        </div>
                        {pos.bulletPoints && pos.bulletPoints.length > 0 && (
                          <ul className="mt-1 list-disc list-inside space-y-0.5 sm:space-y-1 text-white text-sm sm:text-base">
                            {pos.bulletPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}