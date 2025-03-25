import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Palette, PenTool } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <PenTool className="w-5 h-5" />
            <span>Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/portfolio" className="font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/blog" className="font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/contact">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi I am Daniel Elijah a <b>UI/UX Designer</b>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Creating intuitive digital experiences that connect with users and drive engagement.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/portfolio">View My Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[450px] rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
                  <img
                    src="/placeholder.svg?height=450&width=450"
                    alt="Designer portrait"
                    className="rounded-full object-cover"
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my most recent design projects, showcasing my approach to user experience and interface
                  design.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio" className="gap-1">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Process</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How I Approach Design</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My design process is centered around understanding user needs and business goals to create
                    meaningful experiences.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Research & Discovery</h3>
                      <p className="text-muted-foreground">
                        I begin by understanding the problem space, user needs, and business objectives through research
                        and stakeholder interviews.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Ideation & Wireframing</h3>
                      <p className="text-muted-foreground">
                        I explore multiple solutions through sketches and wireframes, focusing on information
                        architecture and user flows.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Visual Design & Prototyping</h3>
                      <p className="text-muted-foreground">
                        I create high-fidelity designs and interactive prototypes that bring the solution to life, ready
                        for testing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=550&width=550"
                  alt="Design process illustration"
                  className="rounded-lg object-cover"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">From The Blog</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thoughts, insights, and perspectives on design, user experience, and the creative process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/blog/design-systems"
                className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Design Systems"
                    className="aspect-video object-cover transition-transform group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The Power of Design Systems</h3>
                  <p className="text-muted-foreground">
                    How design systems can transform your product development process.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-04-01">April 1, 2023</time>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog/ux-research"
                className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="UX Research"
                    className="aspect-video object-cover transition-transform group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">UX Research Techniques</h3>
                  <p className="text-muted-foreground">
                    A guide to the most effective user research methods for designers.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-03-15">March 15, 2023</time>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog/accessibility"
                className="group rounded-lg border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Accessibility"
                    className="aspect-video object-cover transition-transform group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Designing for Accessibility</h3>
                  <p className="text-muted-foreground">Why accessible design is good design and how to implement it.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-02-28">February 28, 2023</time>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog" className="gap-1">
                  View All Articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">X.com</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

