import Projects from "../components/projects";
import GitHubMetrics from "../components/GitHubMetrics";

export default function ProjectsPage() {
  return (
    <main className="h-screen flex flex-col overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0 mb-4">
        <GitHubMetrics username="cataladev" />
      </div>

      <div className="flex-grow">
        <Projects />
      </div>
    </main>
  );
}
