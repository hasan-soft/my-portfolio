import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Code2, 
  Lightbulb, 
  AlertTriangle, 
  Rocket, 
  Layers, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import insightAiImg from "../assets/insightAI.png";
import lifeLessonImg from "../assets/lifelesson.png";
import plateShareImg from "../assets/plateshare.png";
import skillShareImg from "../assets/skillshare.png";
import heroImg from "../assets/hero.png";
import sprintflowImg from "../assets/sprintflow.png";

interface ProjectDetailData {
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  liveBackendUrl?: string;
  githubUrl: string;
  githubBackendUrl?: string;
  demo?: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  improvements: string[];
}

const projectsData: Record<string, ProjectDetailData> = {
  "sprintflow": {
    title: "SprintFlow — Agile Project Management SaaS",
    category: "Full Stack / SaaS",
    tagline: "Next.js 15 & PostgreSQL Powered Sprint & Kanban SaaS",
    description:
      "SprintFlow is a high-performance B2B project orchestration and sprint management platform engineered with Next.js 15 (App Router), TypeScript, Tailwind CSS, and a scalable RESTful backend powered by PostgreSQL and Prisma ORM. Designed for agile engineering teams, it replaces bloated enterprise tools with a fast, intuitive interface supporting 3-tier Role-Based Access Control, interactive drag-and-drop Kanban boards, team activity auditing, and tiered Stripe subscriptions.",
    image: sprintflowImg,
    liveUrl: "https://sprintflow-frontend.vercel.app",
    liveBackendUrl: "https://sprintflow-backend.vercel.app",
    githubUrl: "https://github.com/hasan-soft/sprintflow-frontend",
    githubBackendUrl: "https://github.com/hasan-soft/sprintflow-backend",
    technologies: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Node.js & Express.js",
      "Tailwind CSS",
      "@dnd-kit (Drag & Drop)",
      "Zustand",
      "TanStack Query v5",
      "Stripe Payments",
      "Zod Validation"
    ],
    features: [
      "Interactive Drag-and-Drop Kanban Board built with @dnd-kit supporting smooth state transitions across To Do, In Progress, Review, Blocked, and Done with optimistic updates.",
      "Robust Role-Based Access Control (RBAC) with granular permission guards for 3 distinct roles: Admin, Manager, and Member across 37+ REST API endpoints.",
      "Time-boxed Sprint Planning & Orchestration module allowing sprint creation, goal tracking, and task status synchronization.",
      "Rich Task Modals featuring priority indicators, image attachments, assignee tags, and team discussion comment threads.",
      "Multi-Tier Stripe Subscription Billing supporting flexible SaaS pricing packages (Starter, Pro, Enterprise) with secure webhooks.",
      "Comprehensive Activity Audit Trail logging project actions, role updates, and task changes with soft deletes for safe data recovery."
    ],
    challenges: [
      "Building seamless drag-and-drop Kanban state synchronization with @dnd-kit and Zustand, ensuring instant optimistic UI feedback while reconciling with the PostgreSQL database without layout jitter.",
      "Designing a normalized relational schema with Prisma ORM encompassing Users, Organizations, Projects, Sprints, Tasks, Subtasks, Comments, and ActivityLogs, utilizing ACID transactions to prevent race conditions during sprint reordering.",
      "Enforcing strict JWT and Google OAuth authentication flows paired with custom middleware that validates role-level permissions across all RESTful resources."
    ],
    improvements: [
      "Integrate real-time WebSocket communication for collaborative multi-user live cursors and instant card movement broadcasts.",
      "Implement sprint burndown charts, team velocity graphs, and automated productivity metrics with Recharts.",
      "Add integrations with GitHub and GitLab webhooks to link commits and automatically close tasks via pull requests.",
      "Introduce automated recurring sprint templates and email digest notifications for assigned deadlines."
    ]
  },
  "insight-ai": {
    title: "Insight AI — Content & News Generation Platform",
    category: "Full Stack / AI",
    tagline: "Empowering creators with Gemini AI integration and editorial workflows.",
    description:
      "Insight AI is a modern full-stack editorial platform crafted to bridge the gap between AI generation efficiency and human creative authenticity. Leveraging Next.js and Google's Gemini AI, users can generate structured articles, verify sources, format content, and publish news updates in seconds without compromising quality.",
    image: insightAiImg,
    liveUrl: "https://insight-ai-ochre.vercel.app/",
    githubUrl: "https://github.com/hasan-soft/insight-ai",
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "MongoDB", "Gemini AI API", "Tailwind CSS"],
    features: [
      "AI Prompt-to-Article generation powered by Google Gemini with temperature & tone controls.",
      "Rich dynamic article editor with real-time markdown formatting and preview.",
      "Categorized news feed with live search, tags filtering, and view metrics.",
      "Robust user authentication and profile dashboard managing drafted and published articles.",
      "Stripe payment integration supporting pro-tier AI usage credits.",
      "Optimized responsive layouts across smartphones, tablets, and wide monitors.",
    ],
    challenges: [
      "Managing LLM response latency and streaming text tokens smoothly to the frontend without UI freezes required implementing asynchronous streaming handlers.",
      "Preventing prompt injection and hallucinated markdown structures required rigorous schema validation on server responses.",
      "Optimizing MongoDB indexing for fast text search and category lookups across growing publication archives.",
    ],
    improvements: [
      "Introduce multi-lingual translation support for published articles.",
      "Implement automatic SEO meta tag and social card generation for every AI article.",
      "Add collaborative real-time editing rooms for multi-author publications.",
      "Integrate automated image generation using Stable Diffusion or Imagen alongside text.",
    ],
  },
  "life-lesson": {
    title: "WisdomCell — Digital Life Lesson Platform",
    category: "Full Stack / MERN",
    tagline: "A reflection and wisdom-sharing community for personal growth.",
    description:
      "WisdomCell is a community-driven lesson-sharing and reflection web application where individuals publish, discover, and bookmark meaningful insights on career, mindset, philosophy, and emotional health. Built from the ground up using the MERN stack with secure payments.",
    image: lifeLessonImg,
    liveUrl: "https://wisdomcell-auth.web.app/",
    githubUrl: "https://github.com/hasan-soft/project-11-client",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Stripe", "Cloudinary", "Tailwind CSS"],
    features: [
      "Personalized member dashboard to bookmark lessons, track readings, and review community engagement.",
      "Comprehensive Admin Control Panel to manage reported content, moderate lessons, and monitor user metrics.",
      "Dual access tiers: free public lessons and premium subscriber-only content secured via Stripe.",
      "Advanced filtering system by emotional tone, category, search keywords, and popularity.",
      "Image uploads processed and optimized via Cloudinary CDN pipeline.",
      "Fully responsive, dark-mode ready user interface.",
    ],
    challenges: [
      "Building a flexible permission matrix to securely differentiate Free, Premium, and Admin roles across Express routes.",
      "Optimizing media delivery for user-submitted lesson banners while avoiding layout shifts required dynamic thumbnail presets.",
      "Implementing resilient Stripe webhook handlers to reliably upgrade accounts and handle cancellation edge cases.",
    ],
    improvements: [
      "Implement AI-powered lesson recommendations tailored to users' reading history and saved topics.",
      "Introduce audio narration and text-to-speech for lessons to boost accessibility.",
      "Build a dedicated mobile companion app with React Native.",
      "Add interactive discussion forums and peer reflection threads under each lesson.",
    ],
  },
  "food-donation": {
    title: "PlateShare — Community Food Donation Platform",
    category: "Full Stack / Social Impact",
    tagline: "Connecting surplus food with those who need it most.",
    description:
      "PlateShare is a community platform built to fight food waste and combat hunger. It bridges individual donors, restaurants, and volunteers with people in need. Donors post surplus food items with expiry and pickup instructions, while recipients can claim them in real-time.",
    image: plateShareImg,
    liveUrl: "https://preeminent-blini-200a9a.netlify.app/",
    githubUrl: "https://github.com/hasan-soft/project-10-client",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    features: [
      "Instant Food Posting — Donors specify portions, expiry timestamps, pickup coordinates, and photos.",
      "Real-Time Food Status Lifecycle — Transitions seamlessly: Available → Requested → Picked Up / Donated.",
      "Location-Based Discovery — Nearby listings calculated and presented cleanly to local recipients.",
      "Donor Request Approval System — Donors review and confirm recipient claims to avoid duplicate pickups.",
      "Secure authentication using Firebase Auth with social Google sign-in and protected private routes.",
      "Social Impact counter tracking total meals rescued from wastage.",
    ],
    challenges: [
      "Preventing race conditions where multiple users try to claim the last food portion simultaneously required atomic MongoDB update operations.",
      "Accurately validating food expiry dates across differing client timezones required uniform UTC timestamp normalization.",
      "Maintaining high responsiveness on mobile devices used by volunteer delivery drivers in fluctuating network conditions.",
    ],
    improvements: [
      "Integrate interactive Google Maps or Mapbox with turn-by-turn routing for volunteers.",
      "Add automated SMS/WhatsApp alerts notifying nearby shelters when urgent fresh food is posted.",
      "Develop food hygiene verification badges for verified restaurant donors.",
      "Create volunteer delivery shift scheduling and tracking.",
    ],
  },
  "skill-share": {
    title: "Skill Share — Digital Micro-Learning Platform",
    category: "Full Stack / EdTech",
    tagline: "Practical skill sharing and peer tutorial exchange.",
    description:
      "Skill Share is a modern educational platform where developers, creators, and learners exchange practical skills. Users can post concise step-by-step guides, tips, and tutorials, making learning accessible, interactive, and community-driven.",
    image: skillShareImg,
    liveUrl: "https://tunetrack-auth-6a51e.web.app/",
    githubUrl: "https://github.com/hasan-soft/tune-track",
    technologies: ["Next.js", "React.js", "Node.js", "Swiper.js", "Tailwind CSS", "Firebase Auth"],
    features: [
      "Interactive tutorial creation module supporting code snippets, steps, and media embeds.",
      "Carousel-based discovery powered by Swiper.js for quick scanning of trending skills.",
      "User bookmarks and personalized learning playlists.",
      "Engagement metrics including likes, helpful votes, and step completions.",
      "Clean tag-based categorization for Web Development, UI Design, DevOps, and Soft Skills.",
    ],
    challenges: [
      "Creating a smooth carousel experience on mobile screens without interfering with page scroll gestures.",
      "Sanitizing user-submitted code snippets to prevent cross-site scripting (XSS) while keeping syntax highlighted.",
      "Structuring responsive layouts that present multi-step tutorials cleanly across both mobile and desktop views.",
    ],
    improvements: [
      "Implement interactive in-browser code playgrounds (sandboxes) for coding tutorials.",
      "Add peer review feedback and verifiable completion certificates.",
      "Introduce creator tipping via digital payment gateways.",
      "Build offline reading support with Progressive Web App (PWA) caching.",
    ],
  },
  "app-platform": {
    title: "HeroStore — Curated App Directory & Comparison",
    category: "Frontend & Analytics",
    tagline: "Compare, evaluate, and install modern web tools with confidence.",
    description:
      "HeroStore is an interactive application discovery catalog that simplifies finding reliable digital products and developer tools. It provides data-driven comparisons, visual rating charts, and seamless redirection to verified applications.",
    image: heroImg,
    liveUrl: "https://serene-blancmange-088305.netlify.app/",
    githubUrl: "https://github.com/hasan-soft/Assignment-08",
    technologies: ["React.js", "Recharts", "Tailwind CSS", "JavaScript ES6+", "Lucide Icons"],
    features: [
      "Interactive analytics charts using Recharts displaying download distributions and user ratings.",
      "Side-by-side comparison matrix evaluating features, pricing tiers, and platform support.",
      "Instant live search with debounce and multi-attribute category filtering.",
      "User reviews showcase and rating aggregation.",
      "Clean lightweight bundle size optimized for instant load performance.",
    ],
    challenges: [
      "Configuring dynamic Recharts responsive containers to maintain proper aspect ratios on smaller mobile widths.",
      "Managing complex client-side multi-filter states without unnecessary re-renders.",
      "Ensuring high accessibility contrast ratios across charts and badges in both dark and light modes.",
    ],
    improvements: [
      "Connect to a live backend database for community-driven app submissions.",
      "Add user accounts allowing visitors to save customized tool comparison stacks.",
      "Implement automated API health monitoring showing real-time uptime status for listed apps.",
      "Generate downloadable PDF comparison reports for team software audits.",
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto max-w-xl px-4 py-32 text-center">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
            <h1 className="text-3xl font-extrabold mb-3 text-foreground">Project Not Found</h1>
            <p className="text-muted-foreground text-sm mb-6">
              The project you are looking for might have been moved or does not exist.
            </p>
            <Button asChild className="rounded-xl">
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg bg-secondary/60 hover:bg-secondary border border-border/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects Showcase</span>
            </Link>
          </div>

          {/* Project Title & Meta Banner */}
          <div className="mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-primary font-mono">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Direct Links (Live, Backend & GitHub) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" className="gap-2 rounded-xl font-semibold shadow-md shadow-primary/20" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              </Button>

              {project.liveBackendUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-xl font-semibold border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  asChild
                >
                  <a href={project.liveBackendUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live API Backend</span>
                  </a>
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl font-semibold border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span>{project.githubBackendUrl ? "Frontend GitHub" : "GitHub Repository"}</span>
                </a>
              </Button>

              {project.githubBackendUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-xl font-semibold border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  asChild
                >
                  <a href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer">
                    <Code2 className="w-4 h-4" />
                    <span>Backend GitHub</span>
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Screenshot Frame */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-secondary mb-12 border border-border/80 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Grid Layout for Tech Stack & Features */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Tech Stack (5 cols) */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Main Technology Stack</h2>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Technologies, libraries, and frameworks utilized to construct this application:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-secondary border border-border/70 text-foreground font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Architecture</span>
                  <span className="text-primary font-semibold">Modular & Scalable</span>
                </div>
              </div>
            </div>

            {/* Key Features (7 cols) */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-card border border-border/80 shadow-xs">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Key Capabilities & Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges Faced Section */}
          <div className="p-7 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xs mb-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Challenges Faced</h2>
                <p className="text-xs text-muted-foreground">Engineering bottlenecks and how they were navigated during development</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-secondary/50 border border-border/60 flex flex-col justify-between"
                >
                  <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 text-xs font-mono font-bold flex items-center justify-center mb-3">
                    0{index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Improvements & Future Plans Section */}
          <div className="p-7 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xs mb-12">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Potential Improvements & Future Plans
                </h2>
                <p className="text-xs text-muted-foreground">Roadmap milestones for scaling performance, UX, and capability</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-secondary/50 border border-border/60 flex items-start gap-3.5"
                >
                  <span className="w-7 h-7 rounded-xl bg-primary/15 text-primary text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {improvement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl gap-2 border-border/80 text-foreground hover:bg-secondary hover:text-foreground hover:border-primary/50 transition-all duration-200"
              asChild
            >
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Projects</span>
              </Link>
            </Button>

            <Button size="lg" className="rounded-xl gap-2 font-semibold shadow-xs" asChild>
              <a href={project.liveUrl || project.demo} target="_blank" rel="noopener noreferrer">
                <span>Open Live Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
