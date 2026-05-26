interface ResourceLinkProps {
  name: string;
  url: string;
}

export default function ResourceLink({ name, url }: ResourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      <span>{name}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
