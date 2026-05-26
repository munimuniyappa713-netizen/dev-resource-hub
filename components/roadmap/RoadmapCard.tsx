import { Brain, Code2, Cloud, Server, Shield } from "lucide-react";
import { Roadmap } from "@/types/roadmap";
import ResourceLink from "./ResourceLink";
import SkillBadge from "./SkillBadge";

interface RoadmapCardProps {
  roadmap: Roadmap;
}

const iconMap = {
  Code: Code2,
  Server: Server,
  Cloud: Cloud,
  Shield: Shield,
  Brain: Brain,
};

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const Icon = iconMap[roadmap.icon as keyof typeof iconMap] ?? Code2;

  return (
    <article className="group flex h-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">{roadmap.category}</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{roadmap.title}</h2>
        </div>
        <div className="rounded-2xl bg-slate-100 p-3 text-blue-600 shadow-sm dark:bg-slate-900 dark:text-blue-300">
          <Icon size={24} />
        </div>
      </div>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{roadmap.description}</p>

      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">{roadmap.difficulty}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">{roadmap.duration}</span>
      </div>

      <div className="grid gap-2">
        <div className="flex flex-wrap gap-2">
          {roadmap.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Top resources</p>
        <div className="grid gap-2">
          {roadmap.resources.slice(0, 3).map((resource) => (
            <ResourceLink key={resource.url} name={resource.name} url={resource.url} />
          ))}
        </div>
      </div>

      <a
        href={roadmap.resources[0]?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Start Learning
      </a>
    </article>
  );
}
