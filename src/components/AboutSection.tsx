import { Code2, Rocket, Users, Heart, Gamepad2, Coffee, Terminal, Sparkles, Compass, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const principles = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, modular, and well-documented code that scales seamlessly.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile mindset delivering production-ready features with high velocity and reliability.",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Obsessed with creating intuitive, accessible, and delight-inducing user experiences.",
    },
  ];

  const hobbies = [
    {
      icon: Gamepad2,
      title: "Strategy Gaming & Esports",
      tag: "Focus & Tactics",
      desc: "Competitive gaming sharpens my quick decision making, spatial awareness, and problem-solving under pressure.",
    },
    {
      icon: Heart,
      title: "Cricket & Football",
      tag: "Fitness & Teamwork",
      desc: "Weekend matches keep me physically energized, focused, and reinforce the value of team synergy.",
    },
    {
      icon: Coffee,
      title: "Coffee & Tech Reads",
      tag: "Continuous Learning",
      desc: "A fresh brew paired with tech blogs, design patterns, and engineering books is my favorite way to recharge.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-secondary/70 dark:bg-secondary/40 border-y border-border/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Passionate About Engineering Scalable Web Experiences
          </h2>
          <p className="text-muted-foreground text-base">
            Get to know the developer behind the code — my journey, development philosophy, and what fuels my passion.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Journey Card with Code Editor styling (8 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Editor-like window bar */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">~/journey/developer-story.md</span>
                </div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                  1+ Years Exp
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-primary" />
                My Programming Journey
              </h3>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  My coding voyage began during my college days when I first wrote HTML and CSS.
                  Seeing a few lines of syntax render instantly into an interactive webpage sparked a curiosity
                  that quickly evolved into an enduring passion.
                </p>
                <p>
                  I spent countless nights diving deep into vanilla JavaScript, asynchronous paradigms,
                  and modern frameworks like <strong className="text-foreground font-semibold">React.js</strong> and <strong className="text-foreground font-semibold">Next.js</strong> with <strong className="text-foreground font-semibold">TypeScript</strong>.
                  Soon after, I embraced the full MERN stack along with relational databases like <strong className="text-foreground font-semibold">PostgreSQL & Prisma</strong> to build robust end-to-end applications that solve real problems.
                </p>
                <p>
                  Over the past <strong className="text-foreground font-semibold">1+ years</strong>, I have designed and delivered
                  impactful web solutions ranging from community food redistribution apps and digital wisdom-sharing portals to
                  AI content generators. Continuous learning, clean architecture, and eager adaptability remain at the core of everything I build.
                </p>
              </div>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-border/60 text-center">
              <div>
                <p className="text-xs font-mono text-muted-foreground">Focus</p>
                <p className="text-sm font-bold text-foreground">Full Stack / MERN</p>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Approach</p>
                <p className="text-sm font-bold text-foreground">Clean Code</p>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Status</p>
                <p className="text-sm font-bold text-primary">Open to Work</p>
              </div>
            </div>
          </div>

          {/* What I Love Doing Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-card border border-border/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                What I Love Doing
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  I thrive at the intersection of powerful backend logic and polished user interfaces.
                  There is tremendous satisfaction in transforming complex workflows into seamless, responsive web experiences.
                </p>
                <p>
                  I enjoy architecting clean REST APIs with Node.js and Express, designing schemas with PostgreSQL, Prisma & MongoDB, and creating reactive user experiences with TypeScript, React, and Tailwind CSS.
                </p>
                <p>
                  Teamwork is essential to my ethos. As an enthusiastic fresher developer, I am excited to participate in code reviews, learn from experienced teammates, and contribute reliably to shipping production-grade software.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs font-mono text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span>Committed to engineering excellence & user value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Life Beyond Code (Hobbies & Interests - Requirement 5) */}
        <div className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 mb-12">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Life Beyond Code</h3>
            <p className="text-sm text-muted-foreground">
              What keeps me creative, balanced, and energized outside the terminal.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <hobby.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground mb-2 inline-block">
                    {hobby.tag}
                  </span>
                  <h4 className="text-base font-bold text-foreground mb-2">{hobby.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-1.5">{item.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
