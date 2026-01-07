import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, payment integration, and admin dashboard built with the MERN stack.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task manager with drag-and-drop, team workspaces, and progress tracking.",
      tags: ["React", "Express", "Socket.io", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduled posting features.",
      tags: ["Next.js", "Node.js", "Chart.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
