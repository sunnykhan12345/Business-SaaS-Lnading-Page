export default function SectionBadge({ children }) {
  return (
    <span className="inline-flex text-sm items-center rounded-[52px] border border-black/10 bg-black/5 px-5 py-3 text-xs font-medium text-black/70 backdrop-blur dark:border-black dark:bg-white/[0.08] dark:text-white/70">
      {children}
    </span>
  );
}
