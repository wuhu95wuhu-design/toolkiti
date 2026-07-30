export interface ApiEntry {
  slug: string
  name: string
  nameCn: string
  category: string
  categoryCn: string
  description: string
  descriptionCn: string
  website: string
  docsUrl: string
  pricing: string
  auth: string[]
  endpoints: string[]
  sdks: string[]
  status: "online" | "beta" | "deprecated"
  lastUpdated: string
  tags: string[]
  popularity: number // 1-100, higher = more frequently called
  referralUrl?: string // affiliate/referral link
  usageTips?: string[]
  sponsored?: boolean
  codeExamples?: {
    title: string
    language: string
    code: string
  }[]
  features?: string[]
  rateLimit?: string
  latency?: string
  maxTokens?: string
}

export interface Category {
  slug: string
  name: string
  nameCn: string
  count: number
}
