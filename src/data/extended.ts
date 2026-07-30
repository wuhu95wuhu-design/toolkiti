import { ApiEntry } from "@/lib/types";

// Extended data: code examples, features, performance metrics
// Keyed by API slug, merged at display time
export const extendedData: Record<string, Partial<Pick<ApiEntry, "codeExamples" | "features" | "rateLimit" | "latency" | "maxTokens">>> = {
  openai: {
    rateLimit: "10000 req/min (varies by tier)",
    latency: "<500ms (GPT-4o)",
    maxTokens: "128K (GPT-4o)",
    features: [
      "GPT-4o, GPT-4, GPT-3.5 model family",
      "Multimodal: vision, audio, text generation",
      "Function calling & structured outputs",
      "Embeddings API for semantic search",
      "Fine-tuning for custom models"
    ],
    codeExamples: [
      {
        title: "Chat Completion",
        language: "bash",
        code: `curl https://api.openai.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      },
      {
        title: "Python: Chat Completion",
        language: "python",
        code: `from openai import OpenAI
client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)`
      }
    ]
  },
  anthropic: {
    rateLimit: "4000 req/min (Tier 4)",
    latency: "<800ms (Claude 3.5 Sonnet)",
    maxTokens: "200K",
    features: [
      "Claude 3.5 Sonnet, Haiku, Opus models",
      "Extended thinking for complex reasoning",
      "Computer use (beta) for GUI interaction",
      "Vision & document analysis",
      "Constitutional AI safety"
    ],
    codeExamples: [
      {
        title: "Messages API",
        language: "bash",
        code: `curl https://api.anthropic.com/v1/messages \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $ANTHROPIC_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ]
  },
  "google-gemini": {
    rateLimit: "1500 req/min (paid tier)",
    latency: "<600ms (Gemini 2.0 Flash)",
    maxTokens: "1M (Gemini 1.5 Pro)",
    features: [
      "Gemini 2.0 Flash, Pro models",
      "1M+ token context window",
      "Native multimodal: text, image, audio, video",
      "Google Search grounding integration",
      "Free tier available"
    ],
    codeExamples: [
      {
        title: "Generate Content",
        language: "bash",
        code: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [{"parts": [{"text": "Hello!"}]}]
  }'`
      }
    ]
  },
  deepseek: {
    rateLimit: "500 req/min",
    latency: "<1s",
    maxTokens: "128K",
    features: [
      "DeepSeek-V3 general model",
      "DeepSeek-R1 reasoning model",
      "Extremely competitive pricing",
      "OpenAI-compatible API format",
      "128K context window"
    ],
    codeExamples: [
      {
        title: "Chat Completion (OpenAI-compatible)",
        language: "bash",
        code: `curl https://api.deepseek.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -d '{
    "model": "deepseek-chat",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ]
  },
  mistral: {
    rateLimit: "500 req/min",
    latency: "<500ms",
    maxTokens: "128K",
    features: [
      "Mistral Large, Small, Codestral models",
      "Efficient architecture for fast inference",
      "Open-source model weights available",
      "Function calling support",
      "Multilingual performance"
    ],
    codeExamples: [
      {
        title: "Chat Completion",
        language: "bash",
        code: `curl https://api.mistral.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $MISTRAL_API_KEY" \\
  -d '{
    "model": "mistral-large-latest",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ]
  },
  cohere: {
    features: [
      "Command-R for business RAG",
      "Embed v3 for multilingual embeddings",
      "Rerank for search relevance",
      "Tool use & multi-step reasoning",
      "Enterprise security & compliance"
    ],
    codeExamples: [
      {
        title: "Chat with RAG",
        language: "bash",
        code: `curl https://api.cohere.com/v1/chat \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $COHERE_API_KEY" \\
  -d '{
    "model": "command-r-plus",
    "message": "Hello!"
  }'`
      }
    ]
  },
  groq: {
    rateLimit: "30 req/min (free tier)",
    latency: "<200ms (ultra-fast)",
    maxTokens: "128K",
    features: [
      "LPU inference engine for blazing speed",
      "Open-source models: Llama, Mixtral, Gemma",
      "Free tier for experimentation",
      "OpenAI-compatible API",
      "Ideal for real-time applications"
    ],
    codeExamples: [
      {
        title: "Chat Completion",
        language: "bash",
        code: `curl https://api.groq.com/openai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $GROQ_API_KEY" \\
  -d '{
    "model": "llama3-70b-8192",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ]
  },
  "together-ai": {
    features: [
      "100+ open-source models",
      "Llama, Mixtral, DeepSeek, Qwen support",
      "Inference & fine-tuning endpoints",
      "GPU clusters for training",
      "OpenAI-compatible API"
    ],
    codeExamples: [
      {
        title: "Chat Completion",
        language: "bash",
        code: `curl https://api.together.xyz/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $TOGETHER_API_KEY" \\
  -d '{
    "model": "meta-llama/Llama-3.3-70B-Instruct",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
      }
    ]
  },
  replicate: {
    features: [
      "Thousands of open-source ML models",
      "Llama, Stable Diffusion, Whisper",
      "Serverless API with autoscaling",
      "Custom model deployment",
      "Pay-per-prediction pricing"
    ],
    codeExamples: [
      {
        title: "Run Llama with Python",
        language: "python",
        code: `import replicate
output = replicate.run(
    "meta/meta-llama-3.1-405b-instruct",
    input={"prompt": "Hello!"}
)
for chunk in output:
    print(chunk, end="")`
      }
    ]
  },
  "stability-ai": {
    features: [
      "Stable Diffusion 3 & SDXL models",
      "Text-to-image & image-to-video",
      "ControlNet for precise control",
      "Upscaling & outpainting tools",
      "Commercial usage allowed"
    ],
    codeExamples: [
      {
        title: "Text-to-Image",
        language: "bash",
        code: `curl -X POST https://api.stability.ai/v1/generation/stable-diffusion-v3/text-to-image \\
  -H "Authorization: Bearer $STABILITY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text_prompts": [{"text": "a cat wearing a hat"}],
    "samples": 1
  }'`
      }
    ]
  },
  perplexity: {
    rateLimit: "200 req/min",
    latency: "<2s",
    maxTokens: "128K",
    features: [
      "Sonar search-grounded LLMs",
      "Real-time web search with citations",
      "Up-to-date information retrieval",
      "OpenAI-compatible API format",
      "Subscription plans for higher limits"
    ],
    codeExamples: [
      {
        title: "Search Chat",
        language: "bash",
        code: `curl https://api.perplexity.ai/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" \\
  -d '{
    "model": "sonar-pro",
    "messages": [{"role": "user", "content": "Latest AI news?"}]
  }'`
      }
    ]
  },
  tavily: {
    rateLimit: "100 req/day (free tier)",
    latency: "<1s",
    features: [
      "AI-native search for agents",
      "Structured results with summaries",
      "Real-time web data extraction",
      "Topic-specific deep searches",
      "Free tier for development"
    ],
    codeExamples: [
      {
        title: "Web Search",
        language: "python",
        code: `from tavily import TavilyClient
client = TavilyClient(api_key="$TAVILY_API_KEY")
results = client.search(query="latest AI developments")
print(results["results"])`
      }
    ]
  },
  "brave-search": {
    rateLimit: "2000 queries/mo (free)",
    latency: "<500ms",
    features: [
      "Independent search index",
      "Web, news, image & video search",
      "Privacy-focused, no tracking",
      "Rich result data (ratings, reviews)",
      "Free tier available"
    ],
    codeExamples: [
      {
        title: "Web Search",
        language: "bash",
        code: `curl "https://api.search.brave.com/res/v1/web/search?q=AI+tools" \\
  -H "Accept: application/json" \\
  -H "Accept-Encoding: gzip" \\
  -H "X-Subscription-Token: $BRAVE_API_KEY"`

      }
    ]
  },
  serper: {
    rateLimit: "2500 queries free once",
    latency: "<500ms",
    features: [
      "Fast Google SERP API",
      "Knowledge graph & shopping data",
      "Organic, maps, images results",
      "High reliability & uptime",
      "Simple REST API"
    ],
    codeExamples: [
      {
        title: "Google Search",
        language: "bash",
        code: `curl https://google.serper.dev/search \\
  -H "X-API-KEY: $SERPER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"q": "best AI tools 2026"}'`
      }
    ]
  },
  "jina-ai": {
    features: [
      "8K+ dimensional embeddings",
      "Reader API: web to LLM-ready content",
      "Segmenter for text chunking",
      "Open-source models available",
      "CLIP & ColBERT architectures"
    ],
    codeExamples: [
      {
        title: "Embeddings",
        language: "bash",
        code: `curl https://api.jina.ai/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $JINA_API_KEY" \\
  -d '{"input": ["Hello world"], "model": "jina-embeddings-v3"}'`
      }
    ]
  },
  exa: {
    rateLimit: "1000 queries/mo (free tier)",
    features: [
      "Semantic search by meaning",
      "Embeddings-based content discovery",
      "Similarity & content retrieval",
      "AI agent optimized",
      "Developer-friendly API"
    ],
    codeExamples: [
      {
        title: "Semantic Search",
        language: "bash",
        code: `curl https://api.exa.ai/search \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $EXA_API_KEY" \\
  -d '{"query": "AI agents best practices", "numResults": 5}'`
      }
    ]
  },
  firecrawl: {
    rateLimit: "500 pages/mo (free tier)",
    features: [
      "Web scraping for AI agents",
      "Converts pages to clean Markdown",
      "Supports JS-rendered pages",
      "Crawl entire websites",
      "Free tier available"
    ],
    codeExamples: [
      {
        title: "Scrape a URL to Markdown",
        language: "bash",
        code: `curl https://api.firecrawl.dev/v1/scrape \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $FIRECRAWL_API_KEY" \\
  -d '{"url": "https://example.com", "formats": ["markdown"]}'`
      }
    ]
  },
  midjourney: {
    features: [
      "Industry-leading creative generation",
      "Artistic & photorealistic output",
      "Style consistency with references",
      "Upscaling & variation tools",
      "Active creative community"
    ],
    codeExamples: [
      {
        title: "Imagine (via Discord API)",
        language: "bash",
        code: `# Midjourney operates primarily through Discord
# Third-party APIs wrap the Discord bot:
# /imagine prompt: a serene mountain landscape --ar 16:9`
      }
    ]
  },
  "leonardo-ai": {
    features: [
      "Fine-tuned generation models",
      "Real-time canvas editing",
      "Custom model training",
      "API and web interface",
      "Free daily tokens"
    ],
    codeExamples: [
      {
        title: "Generate Image",
        language: "bash",
        code: `curl https://cloud.leonardo.ai/api/rest/v1/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $LEONARDO_API_KEY" \\
  -d '{
    "prompt": "a futuristic cityscape",
    "modelId": "b24e16ff-06e3-43eb-8d33-4416c2d75876"
  }'`
      }
    ]
  },
  ideogram: {
    features: [
      "Superior text rendering in images",
      "Accurate in-image typography",
      "Style customization options",
      "Upscaling API",
      "Ideal for design & marketing"
    ],
    codeExamples: [
      {
        title: "Generate with Text",
        language: "bash",
        code: `curl https://api.ideogram.ai/generate \\
  -H "Content-Type: application/json" \\
  -H "Api-Key: $IDEOGRAM_API_KEY" \\
  -d '{
    "image_request": {
      "prompt": "A poster that says 'Hello World'",
      "aspect_ratio": "16/9"
    }
  }'`
      }
    ]
  },
  assemblyai: {
    features: [
      "High-accuracy speech-to-text",
      "Speaker diarization",
      "Sentiment analysis on transcripts",
      "Content moderation",
      "Real-time streaming support"
    ],
    codeExamples: [
      {
        title: "Transcribe Audio",
        language: "bash",
        code: `curl https://api.assemblyai.com/v2/transcript \\
  -H "Authorization: $ASSEMBLYAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"audio_url": "https://example.com/audio.mp3"}'`
      }
    ]
  },
  elevenlabs: {
    features: [
      "Ultra-realistic text-to-speech",
      "Voice cloning from samples",
      "Sound effects generation",
      "29+ languages supported",
      "Expressive & emotional speech"
    ],
    codeExamples: [
      {
        title: "Text-to-Speech",
        language: "bash",
        code: `curl https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM \\
  -H "Content-Type: application/json" \\
  -H "xi-api-key: $ELEVENLABS_API_KEY" \\
  -d '{"text": "Hello from ElevenLabs!"}' \\
  --output speech.mp3`
      }
    ]
  },
  huggingface: {
    features: [
      "200,000+ models for inference",
      "Transformers, diffusion, audio",
      "Free inference API",
      "Accelerated inference available",
      "Community-driven model hub"
    ],
    codeExamples: [
      {
        title: "Inference API",
        language: "bash",
        code: `curl https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3.1-405B-Instruct \\
  -H "Authorization: Bearer $HF_API_KEY" \\
  -d '{"inputs": "Hello!", "parameters": {"max_new_tokens": 100}}'`
      }
    ]
  },
  pinecone: {
    features: [
      "Managed vector database",
      "Millisecond semantic search",
      "RAG-optimized infrastructure",
      "Serverless & pod-based indexes",
      "Multi-cloud support"
    ],
    codeExamples: [
      {
        title: "Upsert Vectors",
        language: "python",
        code: `from pinecone import Pinecone
pc = Pinecone(api_key="$PINECONE_API_KEY")
index = pc.Index("my-index")
index.upsert(vectors=[
    {"id": "1", "values": [0.1, 0.2, 0.3]}
])`
      }
    ]
  },
  weaviate: {
    features: [
      "Open-source vector database",
      "Built-in vectorization modules",
      "Hybrid search (vector + keyword)",
      "GraphQL API",
      "Self-host or cloud"
    ],
    codeExamples: [
      {
        title: "Near-text Search (GraphQL)",
        language: "bash",
        code: `curl https://your-cluster.weaviate.cloud/v1/graphql \\
  -H "Authorization: Bearer $WEAVIATE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "{ Get { Document(nearText: {concepts: [\"AI\"]}) { title } } }"}'`
      }
    ]
  },
  qdrant: {
    features: [
      "High-performance (Rust-based)",
      "Rich filtering & payload support",
      "Scalable distributed architecture",
      "Self-hosted (free) & cloud tiers",
      "gRPC & REST interfaces"
    ],
    codeExamples: [
      {
        title: "Search Points",
        language: "bash",
        code: `curl -X POST https://your-cluster.cloud.qdrant.io:6333/collections/my-collection/points/search \\
  -H "Content-Type: application/json" \\
  -H "api-key: $QDRANT_API_KEY" \\
  -d '{"vector": [0.1, 0.2, 0.3], "limit": 5}'`
      }
    ]
  },
  modal: {
    features: [
      "Serverless GPU compute",
      "Pay-per-second pricing",
      "Python SDK with local dev",
      "Auto-scaling infrastructure",
      "Volumes & secret management"
    ],
    codeExamples: [
      {
        title: "Deploy a Function",
        language: "python",
        code: `import modal
app = modal.App("my-app")

@app.function(gpu="A100")
def generate(prompt: str):
    # Your AI inference code here
    return f"Generated from: {prompt}"`
      }
    ]
  },
  runpod: {
    features: [
      "GPU pods & serverless endpoints",
      "Cheap spot instances",
      "Auto-scaling for workloads",
      "Pre-built templates available",
      "Community serverless templates"
    ],
    codeExamples: [
      {
        title: "Run Serverless Endpoint",
        language: "bash",
        code: `curl https://api.runpod.ai/v2/YOUR_ENDPOINT_ID/runsync \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $RUNPOD_API_KEY" \\
  -d '{"input": {"prompt": "Hello"}}'`
      }
    ]
  },
  langchain: {
    features: [
      "Chain composition framework",
      "Agent & tool integration",
      "RAG building blocks",
      "LangSmith observability",
      "Multi-provider support"
    ],
    codeExamples: [
      {
        title: "Simple Chain",
        language: "python",
        code: `from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_template("Tell me a {topic} joke")
model = ChatOpenAI(model="gpt-4o")
chain = prompt | model

result = chain.invoke({"topic": "programming"})
print(result.content)`
      }
    ]
  },
  "github-api": {
    rateLimit: "5000 req/hr (authenticated)",
    features: [
      "Full GitHub platform API",
      "REST & GraphQL interfaces",
      "Repos, issues, PRs, Actions",
      "Code scanning & security",
      "Generous free tier"
    ],
    codeExamples: [
      {
        title: "Get User Repos",
        language: "bash",
        code: `curl -H "Authorization: token $GITHUB_TOKEN" \\
  -H "Accept: application/vnd.github+json" \\
  https://api.github.com/user/repos?per_page=5`
      }
    ]
  },
  supabase: {
    features: [
      "Open-source Firebase alternative",
      "PostgreSQL database with REST API",
      "Built-in auth & Row Level Security",
      "Realtime subscriptions",
      "File storage"
    ],
    codeExamples: [
      {
        title: "Query Data (REST)",
        language: "bash",
        code: `curl "https://your-project.supabase.co/rest/v1/users" \\
  -H "apikey: $SUPABASE_ANON_KEY" \\
  -H "Authorization: Bearer $SUPABASE_ANON_KEY"`
      }
    ]
  },
  resend: {
    features: [
      "Email API for developers",
      "High deliverability rates",
      "React Email templates",
      "Analytics & tracking",
      "Generous free tier"
    ],
    codeExamples: [
      {
        title: "Send Email",
        language: "bash",
        code: `curl https://api.resend.com/emails \\
  -H "Authorization: Bearer $RESEND_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "onboarding@resend.dev",
    "to": ["user@example.com"],
    "subject": "Hello!",
    "text": "Welcome to Resend"
  }'`
      }
    ]
 },

  cursor: {
    features: [
      "Copilot++ for multi-line code suggestions",
      "Composer for multi-file AI edits",
      "Codebase-wide context with @ mentions",
      "Built-in chat with GPT-4o, Claude, and more",
      "Terminal AI commands and debugging"
    ],
    codeExamples: [
      {
        title: "Cursor Rules (.cursorrules)",
        language: "text",
        code: "You are an expert TypeScript developer. Always use functional components with hooks. Prefer arrow functions. Use zod for runtime validation."
      }
    ]
  },
  windsurf: {
    features: [
      "Cascade agentic flow for complex tasks",
      "Ultra-fast tab autocomplete",
      "Inline editing with AI suggestions",
      "Terminal AI assistance",
      "Multi-language support with accuracy tuning"
    ],
    codeExamples: [
      {
        title: "Cascade Prompt (Natural Language)",
        language: "text",
        code: "Create a React component that fetches user data from an API, displays it in a table, and includes loading states and error handling."
      }
    ]
  },
  bolt: {
    features: [
      "Full-stack app generation from prompts",
      "Built-in deployment to production",
      "Supports React, Vue, Svelte, Next.js",
      "Real-time preview during development",
      "Database and API integration built-in"
    ],
    codeExamples: [
      {
        title: "Prompt Example",
        language: "text",
        code: "Build a task management app with a React frontend, PostgreSQL database, user authentication, and drag-and-drop task reordering."
      }
    ]
  },
  lovable: {
    features: [
      "Describe-to-app with Supabase integration",
      "Instant auth, database, and storage",
      "Visual preview with live editing",
      "One-click deployment",
      "GPT-4 powered app generation"
    ],
    codeExamples: [
      {
        title: "Prompt Example",
        language: "text",
        code: "Create a SaaS landing page with a pricing table, Stripe checkout integration, and a user dashboard."
      }
    ]
  },
  replit: {
    features: [
      "AI Agent builds apps from description",
      "50+ language support in browser IDE",
      "One-click deploy to production",
      "Multiplayer editing and collaboration",
      "Built-in database and secrets management"
    ],
    codeExamples: [
      {
        title: "Prompt Example",
        language: "text",
        code: "Build a real-time chat application with WebSocket support, user authentication, message history, and file sharing."
      }
    ]
  },
  runway: {
    features: [
      "Gen-3 and Gen-4 video generation models",
      "Image-to-video and text-to-video",
      "Video-to-video style transfer",
      "Green screen and rotoscoping tools",
      "API for programmatic generation"
    ],
    codeExamples: [
      {
        title: "Generate Video",
        language: "bash",
        code: "curl https://api.runwayml.com/v1/generations \\\n  -H \"Content-Type: application/json\" \\\n  -H \"Authorization: Bearer $RUNWAY_API_KEY\" \\\n  -d '{\n    \"prompt\": \"A cinematic drone shot...\",\n    \"model\": \"gen-4\"\n  }'"
      }
    ]
  },
  suno: {
    features: [
      "Text-to-music with vocals and instruments",
      "Multiple genres: pop, rock, jazz, electronic",
      "Custom lyrics or AI-generated lyrics",
      "Song extension and remixing",
      "API for programmatic music generation"
    ],
    codeExamples: [
      {
        title: "Generate Song",
        language: "bash",
        code: "curl https://api.suno.com/v1/generate \\\n  -H \"Content-Type: application/json\" \\\n  -H \"Authorization: Bearer $SUNO_API_KEY\" \\\n  -d '{\n    \"prompt\": \"An upbeat pop song...\",\n    \"style\": \"pop\",\n    \"instrumental\": false\n  }'"
      }
    ]
  },
  youcom: {
    features: [
      "AI-powered web search results",
      "Real-time news and data",
      "LLM chat integration",
      "Image and video search support",
      "Developer-friendly API"
    ],
    codeExamples: [
      {
        title: "Web Search",
        language: "bash",
        code: "curl \"https://api.you.com/v1/search?query=latest+AI+news\" \\\n  -H \"X-API-Key: $YOU_API_KEY\" \\\n  -H \"Accept: application/json\""
      }
    ]
  },
  "vercel-ai-sdk": {
    features: [
      "Streaming responses with React Server Components",
      "Tool calling and function calling",
      "Multi-provider support (OpenAI, Anthropic, etc.)",
      "AI SDK Core for framework-agnostic use",
      "Production-ready with edge deployment"
    ],
    codeExamples: [
      {
        title: "Streaming Chat with Next.js",
        language: "typescript",
        code: "import { streamText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nexport async function POST(req: Request) {\n  const { messages } = await req.json();\n  const result = streamText({\n    model: openai('gpt-4o'),\n    messages,\n  });\n  return result.toDataStreamResponse();\n}"
      }
    ]
  },

};
