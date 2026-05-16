import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>(
    {},
  );

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Nest.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "CSS3", level: 90 },
        { name: "HTML5", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "JWT Auth", level: 78 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 92 },
        { name: "Vercel", level: 88 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  const activeSkills =
    skillCategories.find((cat) => cat.title === activeCategory)?.skills || [];

  // Trigger animation when category changes
  useEffect(() => {
    const newAnimatedLevels: Record<string, number> = {};

    activeSkills.forEach((skill, index) => {
      setTimeout(() => {
        newAnimatedLevels[skill.name] = skill.level;
        setAnimatedLevels((prev) => ({ ...prev, ...newAnimatedLevels }));
      }, index * 150); // Staggered animation
    });
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 tracking-wide">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technologies I Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 text-sm tracking-wide ${
                activeCategory === category.title
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                  : "bg-card border border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Premium Progress Bars */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {activeSkills.map((skill, index) => {
              const currentLevel = animatedLevels[skill.name] || 0;

              return (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="font-semibold text-base text-foreground tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-primary tabular-nums transition-all duration-700">
                      {currentLevel}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative h-5 bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-border/60 shadow-inner">
                    {/* Progress Fill */}
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-blue-600 to-violet-600 
                                 rounded-2xl transition-all duration-1000 ease-out shadow-lg shadow-primary/30"
                      style={{
                        width: `${currentLevel}%`,
                      }}
                    />

                    {/* Inner Glow Layer */}
                    <div
                      className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white/30 via-transparent to-white/10 
                                 rounded-2xl transition-opacity group-hover:opacity-80"
                      style={{
                        width: `${currentLevel}%`,
                      }}
                    />

                    {/* Shine Effect */}
                    <div
                      className="absolute top-0 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent 
                                 animate-shimmer"
                      style={{
                        width: `${currentLevel}%`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-7 rounded-3xl bg-card border border-border hover:border-primary/30 
                         transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-5 py-2.5 text-sm rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground 
                               transition-all duration-300 font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
