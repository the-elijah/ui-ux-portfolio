import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-colors hover:bg-muted/50"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          width={400}
          height={225}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">{project.client}</div>
          <div className="flex items-center gap-1 text-sm font-medium">
            View Project
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </Link>
  )
}

