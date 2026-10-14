import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Business Studies (BBS)",
      institution: "Mohammadpur Central University College",
      location: "Dhaka, Bangladesh",
      period: "2019 - 2024",
      status: "Graduated with Honors",
      description: "Graduated with honors in Bachelor of Business Studies (BBS). Coursework provided strong analytical grounding in business management, marketing dynamics, financial analysis, and modern digital entrepreneurship.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Graduated with Honors",
        "Business Strategy & Management",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gazipur Khan Govt Model School And College",
      location: "Cumilla, Bangladesh",
      period: "2015 - 2017",
      status: "Completed",
      description: "Completed Higher Secondary Certificate in Business Studies group with a focus on Accounting, Finance, and Business Principles. Cultivated a passion for logical problem-solving and software development during this period.",
      achievements: [
        "GPA: 3.44 / 5.00",
        "Business Studies / Commerce",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-secondary/70 dark:bg-secondary/40 border-y border-border/80 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Educational Background
          </h2>
          <p className="text-muted-foreground text-base">
            Formal academic degrees and qualifications that fostered critical reasoning, discipline, and strategic mindset.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-primary font-medium border border-primary/20">
                    {edu.status}
                  </span>
                </div>

                {/* Degree & School */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-foreground/85 mb-4">
                  {edu.institution}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-5 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Achievements Badges */}
              <div className="pt-4 border-t border-border/60">
                <p className="text-[11px] font-mono text-muted-foreground mb-2 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>Highlights:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-lg bg-secondary/80 text-foreground/80 border border-border/60 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
