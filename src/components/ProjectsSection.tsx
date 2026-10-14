import { ExternalLink, Github, Eye, ArrowUpRight, Code2, Sparkles, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import insightAiImg from "../assets/insightAI.png";
import lifeLessonImg from "../assets/lifelesson.png";
import plateShareImg from "../assets/plateshare.png";
import skillShareImg from "../assets/skillshare.png";
import heroImg from "../assets/hero.png";
import sprintflowImg from "../assets/sprintflow.png";

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  githubBackend?: string;
  demo: string;
  demoBackend?: string;
  category: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "sprintflow",
    title: "SprintFlow — Agile Project Management SaaS",
    tagline: "Next.js 15 & PostgreSQL Powered Sprint & Kanban SaaS",
    description:
      "An enterprise-grade B2B project orchestration SaaS built with Next.js 15 App Router, TypeScript, and a RESTful backend using PostgreSQL and Prisma. Features drag-and-drop Kanban workflows with @dnd-kit, 3-tier Role-Based Access Control, sprint planning, and Stripe billing.",
    image: sprintflowImg,
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Node.js", "Express.js", "Tailwind CSS", "@dnd-kit", "Stripe"],
    github: "https://github.com/hasan-soft/sprintflow-frontend",
    githubBackend: "https://github.com/hasan-soft/sprintflow-backend",
    demo: "https://sprintflow-frontend.vercel.app",
    demoBackend: "https://sprintflow-backend.vercel.app",
    category: "Full Stack / SaaS",
  },
  {
    id: "insight-ai",
    title: "Insight AI — Content & News Platform",
    tagline: "AI Generation & Modern Editorial System",
    description:
      "A modern full-stack platform crafted to bridge the gap between AI efficiency and human creativity. Leveraging Next.js and Gemini AI, it empowers users to generate high-quality, meaningful articles in seconds with complete editor control.",
    image: insightAiImg,
    tags: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/hasan-soft/insight-ai",
    demo: "https://insight-ai-ochre.vercel.app/",
    category: "Full Stack / AI",
  },
  {
    id: "life-lesson",
    title: "WisdomCell — Digital Life Lesson",
    tagline: "Reflection & Personal Growth Community",
    description:
      "WisdomCell is a lesson-sharing and reflection community platform where users create, explore, and save meaningful life lessons focused on mindset, career growth, emotional well-being, and personal development.",
    image: lifeLessonImg,
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    github: "https://github.com/hasan-soft/project-11-client",
    demo: "https://wisdomcell-auth.web.app/",
    category: "Full Stack / MERN",
  },
  {
    id: "food-donation",
    title: "PlateShare — Community Food Donation",
    tagline: "Reducing Food Waste Through Direct Giving",
    description:
      "PlateShare connects food donors with people and organizations in need. Users can post surplus food with pickup details, location tracking, and real-time status updates to combat hunger and food waste.",
    image: plateShareImg,
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    github: "https://github.com/hasan-soft/project-10-client",
    demo: "https://preeminent-blini-200a9a.netlify.app/",
    category: "Full Stack / Social Impact",
  },
  {
    id: "skill-share",
    title: "Skill Share — Digital Learning Platform",
    tagline: "Peer-to-Peer Knowledge & Tip Exchange",
    description:
      "A collaborative platform where people share actionable micro-lessons, tips, and tutorials. Features intuitive course exploration, user dashboards, and interactive learning journeys.",
    image: skillShareImg,
    tags: ["Next.js", "React", "Node.js", "Swiper.js", "Tailwind CSS"],
    github: "https://github.com/hasan-soft/tune-track",
    demo: "https://tunetrack-auth-6a51e.web.app/",
    category: "Full Stack / EdTech",
  },
  {
    id: "app-platform",
    title: "HeroStore — Curated App Discovery",
    tagline: "Discover, Compare & Install Web Apps",
    description:
      "HeroStore is a modern web application directory focused on speed, discoverability, and clean metrics. Users can compare tools, explore rating distributions, and view categorized application statistics.",
    image: heroImg,
    tags: ["React", "Recharts", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/hasan-soft/Assignment-08",
    demo: "https://serene-blancmange-088305.netlify.app/",
    category: "Frontend & Analytics",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Production & Engineering Showcase
          </h2>
          <p className="text-muted-foreground text-base">
            Each project is built to solve distinct problems — from AI content workflows and food redistribution to reflective social platforms.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary border-b border-border/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

                {/* Category Pill on top left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-background/90 backdrop-blur-md border border-border/80 text-foreground shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Direct Action Buttons on top right */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 text-foreground hover:text-primary hover:border-primary/60 transition-all shadow-xs"
                    title={project.githubBackend ? "Frontend GitHub Repository" : "GitHub Repository"}
                    aria-label="View Client Source Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 text-foreground hover:text-primary hover:border-primary/60 transition-all shadow-xs"
                      title="Backend API GitHub Repository"
                      aria-label="View Server Source Code on GitHub"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 text-foreground hover:text-primary hover:border-primary/60 transition-all shadow-xs"
                    title="Live Demo"
                    aria-label="View Live Project Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-primary mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-secondary/80 border border-border/50 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: View More / Details (Requirement 9) */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/60">
                    <Button
                      variant="default"
                      className="gap-2 rounded-xl text-xs sm:text-sm font-semibold justify-center shadow-xs"
                      asChild
                    >
                      <Link to={`/project/${project.id}`}>
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="gap-2 rounded-xl text-xs sm:text-sm font-semibold justify-center border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group/btn"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 text-primary group-hover/btn:text-primary-foreground transition-colors" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div className="text-center mt-14">
          <Button
            variant="outline"
            size="lg"
            className="gap-2.5 rounded-2xl px-6 border-border/80 bg-card text-foreground hover:bg-secondary hover:text-foreground hover:border-primary/50 transition-all duration-200"
            asChild
          >
            <a
              href="https://github.com/hasan-soft?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>Explore More Repositories on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
