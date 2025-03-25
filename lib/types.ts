export interface Project {
  id: string
  title: string
  description: string
  image: string
  client: string
  timeline: string
  role: string
  tools: string[]
  link?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: number
}

