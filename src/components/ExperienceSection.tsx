import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, History } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Front End Web Developer",
      company: "Programming Kit",
      companyUrl: "https://programmingkit.xyz/",
      location: "Dhaka, Bangladesh",
      period: "March 2021 - Dec 2022",
      type: "Part-time / Contract",
      description: "Contributed to developing modern, user-friendly frontend web interfaces, collaborating with engineering leads, and adhering to modern web development best practices.",
      responsibilities: [
        "Architected responsive, cross-browser frontend interfaces using HTML5, modern CSS, and Tailwind CSS.",
        "Collaborated proactively with senior developers in sprint planning and daily standups.",
        "Refactored components to enhance accessibility, loading speed, and code reusability.",
        "Wrote unit tests and verified UI edge cases, helping elevate code test coverage to 80%.",
      ],
      technologies: ["JavaScript", "TailwindCSS", "CSS3", "HTML5", "Git", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <History className="w-3.5 h-3.5" />
            <span>WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-base">
            Hands-on software development roles, team collaboration, and real-world engineering impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="p-7 sm:p-9 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-card transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline inline-flex items-center gap-1.5 text-sm sm:text-base"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/60">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/60">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6 space-y-2.5">
                <p className="text-xs font-mono text-foreground font-semibold tracking-wide uppercase">
                  Key Responsibilities & Impact:
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-5 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground mr-1">Applied:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-secondary/80 border border-border/60 text-foreground/80 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
