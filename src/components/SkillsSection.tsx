import { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  tier: "Intermediate" | "Comfortable" | "Familiar";
  description: string;
}

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Skills", icon: Layers },
    { id: "Frontend", label: "Frontend", icon: Code2 },
    { id: "Backend", label: "Backend", icon: Server },
    { id: "Database", label: "Database", icon: Database },
    { id: "Tools", label: "Tools & Workflow", icon: Wrench },
  ];

  const allSkills: SkillItem[] = [
    // Frontend
    { name: "React.js", category: "Frontend", tier: "Intermediate", description: "Hooks, component lifecycles, state management, SPA architecture" },
    { name: "Next.js", category: "Frontend", tier: "Intermediate", description: "App Router, SSR, Server Components, client routing, SEO optimization" },
    { name: "TypeScript", category: "Frontend", tier: "Intermediate", description: "Static typing, interfaces, generics, type-safe APIs & React components" },
    { name: "JavaScript (ES6+)", category: "Frontend", tier: "Intermediate", description: "Async/await, promises, modern DOM manipulation, array methods" },
    { name: "Tailwind CSS", category: "Frontend", tier: "Comfortable", description: "Responsive layouts, utility-first design, custom styling tokens" },
    { name: "HTML5 & CSS3", category: "Frontend", tier: "Comfortable", description: "Semantic markup, modern Flexbox, CSS Grid, mobile-first design" },
    { name: "Swiper.js & UI", category: "Frontend", tier: "Familiar", description: "Interactive carousels, responsive modal dialogs, UI animations" },

    // Backend
    { name: "Node.js", category: "Backend", tier: "Intermediate", description: "Asynchronous runtime, modular code, event loop, file streaming" },
    { name: "Express.js", category: "Backend", tier: "Intermediate", description: "RESTful routing, custom middleware, error handling pipelines" },
    { name: "REST APIs", category: "Backend", tier: "Intermediate", description: "CRUD endpoints, status codes, query filtering, JSON payloads" },
    { name: "JWT & Auth", category: "Backend", tier: "Intermediate", description: "Token generation, cookie handling, role-based route protection" },
    { name: "Nest.js", category: "Backend", tier: "Familiar", description: "TypeScript backend structure, controllers, services, dependency injection" },

    // Database
    { name: "PostgreSQL", category: "Database", tier: "Intermediate", description: "Relational schema design, SQL queries, foreign keys, table relations" },
    { name: "Prisma ORM", category: "Database", tier: "Intermediate", description: "Type-safe database client, schema migrations, relational queries" },
    { name: "MongoDB", category: "Database", tier: "Intermediate", description: "NoSQL document collections, CRUD queries, indexing, aggregations" },
    { name: "Mongoose", category: "Database", tier: "Intermediate", description: "Data modeling, schema validation, population, query middleware" },
    { name: "Firebase", category: "Database", tier: "Familiar", description: "Authentication, Firestore database, storage, social auth" },
    { name: "Cloudinary", category: "Database", tier: "Familiar", description: "Cloud media uploads, image optimization, dynamic transformations" },

    // Tools & Workflow
    { name: "Git & GitHub", category: "Tools", tier: "Comfortable", description: "Version control, branching, pull requests, collaborative commits" },
    { name: "Postman", category: "Tools", tier: "Comfortable", description: "API testing, inspecting headers, testing auth tokens, environment variables" },
    { name: "Vercel & Netlify", category: "Tools", tier: "Comfortable", description: "Frontend & full-stack deployments, continuous Git deployment" },
    { name: "Figma", category: "Tools", tier: "Familiar", description: "Inspecting UI designs, extracting assets, following design systems" },
  ];

  const filteredSkills = activeFilter === "All" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeFilter);

  const coreFocusAreas = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      headline: "React, Next.js & TypeScript",
      points: [
        "Component architecture with React 18+ & Next.js",
        "Type-safe application state with TypeScript",
        "Responsive styling with Tailwind CSS & CSS3"
      ],
    },
    {
      title: "Backend & RESTful APIs",
      icon: Server,
      headline: "Node.js & Express Ecosystem",
      points: [
        "Modular REST API architecture & controllers",
        "JWT Authentication & protected route guards",
        "Secure request validation & error middleware"
      ],
    },
    {
      title: "Database Architecture",
      icon: Database,
      headline: "PostgreSQL, Prisma & MongoDB",
      points: [
        "Relational database modeling with PostgreSQL & Prisma",
        "NoSQL document storage & queries with MongoDB & Mongoose",
        "Cloud authentication & storage with Firebase & Cloudinary"
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-secondary/70 dark:bg-secondary/40 border-y border-border/80 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Technologies & Tools I Work With
          </h2>
          <p className="text-muted-foreground text-base">
            A comprehensive overview of my technical stack, databases, frameworks, and practical proficiency levels as an aspiring software engineer.
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {coreFocusAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-3xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-card transition-all duration-300 relative group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <area.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{area.title}</h3>
              <p className="text-xs font-mono text-primary mb-4">{area.headline}</p>
              <ul className="space-y-2">
                {area.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "bg-card border border-border/80 text-foreground hover:border-primary/50 hover:bg-secondary/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-card transition-all duration-200 flex flex-col justify-between group shadow-xs"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/70 group-hover:scale-125 transition-transform" />
                  <h4 className="font-bold text-foreground text-base tracking-tight">{skill.name}</h4>
                </div>
                <span
                  className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full ${
                    skill.tier === "Intermediate"
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : skill.tier === "Comfortable"
                      ? "bg-secondary text-foreground font-semibold border border-border/80"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {skill.tier}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground px-4 py-2 rounded-xl bg-secondary/60 border border-border/40">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Junior/Fresher level ready • Eager to learn, adapt, and build production software</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
