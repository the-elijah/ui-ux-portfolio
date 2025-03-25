import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Plus } from "lucide-react"
import { blogPosts } from "@/lib/data"

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-4">
          <Button asChild variant="ghost" size="sm" className="gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Thoughts, insights, and perspectives on design, user experience, and the creative process.
            </p>
          </div>
        </div>
        <Button asChild className="gap-1">
          <Link href="/blog/new">
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={225}
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

