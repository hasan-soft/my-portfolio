import { ExternalLink, Github, Folder, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, payment integration, and admin dashboard built with the MERN stack.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: "Real-time collaborative task manager with drag-and-drop, team workspaces, and progress tracking.",
      image: "/projects/taskmanager.jpg",
      tags: ["React", "Express", "Socket.io", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: "social-dashboard",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduled posting features.",
      image: "/projects/dashboard.jpg",
      tags: ["Next.js", "Node.js", "Chart.js", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: "blog-platform",
      title: "Blog Platform",
      description: "A modern blogging platform with rich text editor, comments, and SEO optimization.",
      image: "/projects/blog.jpg",
      tags: ["React", "Node.js", "MongoDB", "TipTap"],
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group relative flex flex-col rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{project.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 text-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 text-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <p className="text-muted-foreground text-sm flex-grow mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <Button variant="outline" className="gap-2 w-full" asChild>
                  <Link to={`/project/${project.id}`}>
                    <Eye className="w-4 h-4" />
                    View Details
                  </Link>
                </Button>
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
