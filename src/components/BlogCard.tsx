import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}

export default function BlogCard({ title, excerpt, slug, date, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--accent)]">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--accent)]">{category}</span>
        <span className="text-[10px] text-[var(--muted)]">{date}</span>
      </div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm text-[var(--muted)]">{excerpt}</p>
    </Link>
  );
}