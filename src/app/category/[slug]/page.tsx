import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import ApiCard from "@/components/ApiCard";
import { apis, categories, getApisByCategory } from "@/data/apis";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return categories.map(cat => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  const count = getApisByCategory(slug).length;
  return {
    title: cat.name + " (" + cat.nameCn + ") — " + count + " APIs",
    description: count + " APIs in the " + cat.name + " (" + cat.nameCn + ") category. " + getApisByCategory(slug).map(a => a.name).join(", ") + ".",
    openGraph: {
      title: cat.name + " APIs",
      description: "Browse " + count + " APIs in the " + cat.nameCn + " category.",
      url: "https://www.toolkiti.org/category/" + cat.slug,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return <><Header /><main className="mx-auto max-w-3xl px-4 py-8"><p>Category not found</p></main></>;
  const items = getApisByCategory(slug);
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-2 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span>{cat.name}</span>
        </div>
        <h1 className="mb-1 text-2xl font-bold">{cat.name}</h1>
        <p className="mb-8 text-sm text-[var(--muted)]">{cat.nameCn} · {items.length} tools</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map(api => <ApiCard key={api.slug} api={api} />)}</div>
      </main>
    </>
  );
}