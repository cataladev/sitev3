import Projects from "../components/projects";
import GitHubMetrics from "../components/GitHubMetrics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Carlos Catala",
  description: "Discover Carlos Catala's innovative projects including hackathon winners, web applications, and audio technology solutions built with modern web technologies.",
  keywords: [
    "Carlos Catala",
    "Projects",
    "Portfolio",
    "Hackathon Projects",
    "Web Applications",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Audio Technology",
    "Pitch Detection",
    "Eye Tracking",
    "AI Applications",
    "Full Stack Development"
  ],
  openGraph: {
    title: "Projects - Carlos Catala",
    description: "Discover Carlos Catala's innovative projects including hackathon winners and audio technology solutions.",
    url: "https://catala.dev/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0 mb-2 animate-fade-in">
        <GitHubMetrics username="cataladev" />
      </div>
      <div className="flex-grow">
        <Projects />
      </div>
    </main>
  );
}