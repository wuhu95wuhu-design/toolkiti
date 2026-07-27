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
}

export interface Category {
  slug: string
  name: string
  nameCn: string
  count: number
}
