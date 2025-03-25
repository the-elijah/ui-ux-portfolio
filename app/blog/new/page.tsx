"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { createBlogPost } from "@/lib/actions"

export default function NewBlogPostPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await createBlogPost(formData)
      toast({
        title: "Blog post created!",
        description: "Your blog post has been published successfully.",
      })
      router.push("/blog")
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your blog post couldn't be published. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start gap-4">
          <Button asChild variant="ghost" size="sm" className="gap-1">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Create New Blog Post</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Share your thoughts, insights, and expertise with the world.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4 pb-4">
            <Button variant={preview ? "outline" : "default"} onClick={() => setPreview(false)} disabled={isSubmitting}>
              Write
            </Button>
            <Button variant={preview ? "default" : "outline"} onClick={() => setPreview(true)} disabled={isSubmitting}>
              Preview
            </Button>
          </div>
          {!preview ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter the title of your blog post"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Write a brief summary of your blog post"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog post content here"
                  className="min-h-[300px]"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" onClick={() => router.push("/blog")} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Publishing..." : "Publish Post"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="rounded-lg border p-6">
              <div className="prose max-w-none dark:prose-invert">
                <h1>{formData.title || "Untitled Blog Post"}</h1>
                <p className="lead">{formData.excerpt || "No excerpt provided."}</p>
                <div>{formData.content || "No content provided."}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

