import RoadmapsPage from "@/components/roadmap/RoadmapsPage";
import roadmaps from "@/data/roadmaps.json";

export const metadata = {
  title: "Developer Roadmaps | Dev Resource Hub",
  description: "Explore curated learning paths for frontend, backend, DevOps, AI/ML, and more.",
};

export default function RoadmapsRoute() {
  return <RoadmapsPage initialRoadmaps={roadmaps} />;
}
