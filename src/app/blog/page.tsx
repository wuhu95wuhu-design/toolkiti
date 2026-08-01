import Link from "next/link";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    slug: "top-llm-apis-2026-compared",
    title: "Top 10 LLM APIs in 2026: Pricing, Speed & Quality Compared",
    excerpt: "Side-by-side comparison of GPT-4o, Claude 3.5, Gemini 2.0, DeepSeek-V3, and more. Real benchmarks, real prices.",
    date: "2026-07-30",
    category: "AI"
  },
  {
    slug: "ai-agent-tool-stack",
    title: "Building an AI Agent: The Complete API Stack",
    excerpt: "From LLM to vector DB to payment processing — every API your AI agent needs in production.",
    date: "2026-07-28",
    category: "Guide"
  },
  {
    slug: "api-pricing-trends-2026",
    title: "API Pricing Trends 2026: The Race to Zero",
    excerpt: "LLM API costs dropped 80% this year. We track pricing across 20+ providers and what it means for builders.",
    date: "2026-07-25",
    category: "Analysis"
  },
  {
    slug: "vector-database-comparison",
    title: "Vector Database Showdown: Pinecone vs Weaviate vs Qdrant vs Milvus",
    excerpt: "Which vector DB is right for your RAG pipeline? Latency, cost, and ease-of-use compared.",
    date: "2026-07-22",
    category: "Infrastructure"
  },
  {
    slug: "monetize-your-api",
    title: "How to Monetize Your API: 5 Revenue Models That Work",
    excerpt: "Usage-based, tiered, freemium, marketplace — pick the right model for your API business.",
    date: "2026-07-20",
    category: "Business"
  },
  {
    slug: "open-source-llm-apis",
    title: "Open Source LLMs You Can Self-Host: API Wrappers Compared",
    excerpt: "Llama 3, Mistral, Qwen — open models with production-ready API wrappers. Deployment guides included.",
    date: "2026-07-18",
    category: "Open Source"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 text-2xl font-bold">ToolKiti Blog</h1>
        <p className="mb-8 text-[var(--muted)]">API insights, comparisons, and developer guides.</p>
        
        <div className="space-y-4">
          {posts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
        </div>
      </main>
    </>
  );
}