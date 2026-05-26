interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
      {skill}
    </span>
  );
}
