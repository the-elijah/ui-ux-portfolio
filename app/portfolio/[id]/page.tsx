import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4">
        <Button asChild variant="ghost" size="sm" className="gap-1">
          <Link href="/portfolio">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">{project.description}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full rounded-lg object-cover"
            width={800}
            height={500}
          />
          <div className="prose max-w-none dark:prose-invert">
            <h2>Project Overview</h2>
            <p>
              {project.description} This project was designed to solve specific user needs while meeting business
              objectives.
            </p>
            <h2>The Challenge</h2>
            <p>
              The main challenge was to create an intuitive interface that would allow users to easily navigate through
              complex information while maintaining a clean and modern aesthetic.
            </p>
            <h2>The Solution</h2>
            <p>
              After extensive research and multiple iterations, I developed a design system that prioritized user needs
              while aligning with the brand's visual identity. The final product features a clean, intuitive interface
              with thoughtful interactions and animations.
            </p>
            <h2>Results</h2>
            <p>
              The redesign resulted in a 40% increase in user engagement and a 25% decrease in bounce rate. Client
              feedback was overwhelmingly positive, with particular praise for the intuitive navigation and visual
              appeal.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-medium">Project Details</h3>
            <dl className="grid gap-2 text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <dt className="font-medium text-muted-foreground">Client:</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <dt className="font-medium text-muted-foreground">Timeline:</dt>
                <dd>{project.timeline}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <dt className="font-medium text-muted-foreground">Role:</dt>
                <dd>{project.role}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <dt className="font-medium text-muted-foreground">Tools:</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            </dl>
          </div>
          {project.link && (
            <Button asChild className="w-full gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-medium">More Projects</h3>
            <div className="grid gap-2">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/portfolio/${p.id}`}
                    className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      className="h-12 w-12 rounded object-cover"
                      width={48}
                      height={48}
                    />
                    <div className="text-sm">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-muted-foreground">{p.client}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

