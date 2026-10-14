import { ArrowDown, Github, Linkedin, Mail, Twitter, Facebook, Download, Sparkles, Code2, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "../assets/my.jpeg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hasan-soft", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hasan-bhuiyan503/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/hasan.soft503", label: "Facebook" },
    { icon: Mail, href: "mailto:hasanbhuiyan503@gmail.com", label: "Email" },
  ];

  const coreTech = [
    "TypeScript",
    "Next.js",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "TailwindCSS",
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-background">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Designation & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for Junior / Fresher Roles & Opportunities</span>
            </div>

            {/* Main Greeting & Designation */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-muted-foreground uppercase tracking-widest">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Hasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-400">Bhuiyan</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-lg sm:text-2xl font-semibold text-foreground/90">
                  Full Stack & MERN Developer
                </span>
                <span className="hidden sm:inline text-muted-foreground/40">•</span>
                <span className="text-sm sm:text-base text-primary font-mono px-2.5 py-0.5 rounded-md bg-primary/10">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            {/* Brief Introduction */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build reliable web applications using{" "}
              <strong className="text-foreground font-semibold">TypeScript, Next.js, React, Node.js</strong>, and databases like{" "}
              <strong className="text-foreground font-semibold">PostgreSQL, Prisma, and MongoDB</strong>.
              Focused on writing clean code, responsive user interfaces, and structured RESTful APIs.
            </p>

            {/* Action Buttons (Requirement 3: Resume Download Button) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                size="lg"
                className="gap-2.5 rounded-xl px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300"
                asChild
              >
                <a
                  href="/Hasan_resume.pdf"
                  download="Hasan_Bhuiyan_Resume.pdf"
                  title="Download Hasan's Resume"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl px-6 border-border/80 text-foreground hover:bg-secondary hover:text-foreground hover:border-primary/50 transition-all duration-300"
                asChild
              >
                <a href="#projects">
                  <Layers className="w-4 h-4 text-primary" />
                  <span>View Projects</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="gap-2 rounded-xl px-5 text-foreground hover:bg-secondary hover:text-foreground transition-colors"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Contact Me</span>
                </a>
              </Button>
            </div>

            {/* Social Links (Requirement 4) */}
            <div className="pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mr-1 hidden sm:inline">
                  Connect:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-card border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 shadow-xs"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-3 border-t border-border/60">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-xs font-mono text-muted-foreground mr-1">Stack:</span>
                {coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-secondary/70 border border-border/50 text-foreground/80 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Professional Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Backlight subtle blur */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-teal-500/20 rounded-3xl blur-xl opacity-70" />

              {/* Main Profile Card Container */}
              <div className="relative rounded-3xl bg-card border border-border/80 p-3 shadow-xl overflow-hidden group">
                {/* Photo container */}
                <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={profileImg}
                    alt="Hasan Bhuiyan - Professional Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-background/85 backdrop-blur-md border border-border/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-foreground">Hasan Bhuiyan</p>
                      <p className="text-[11px] text-primary font-mono">MERN Stack Engineer</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Developer Stats bar underneath photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                  <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/40">
                    <p className="text-xs text-muted-foreground font-mono">Experience</p>
                    <p className="text-sm font-bold text-foreground">1+ Years</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/40">
                    <p className="text-xs text-muted-foreground font-mono">Projects</p>
                    <p className="text-sm font-bold text-primary">6+ Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll to explore</span>
            <div className="p-2 rounded-full border border-border/80 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-200 animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
