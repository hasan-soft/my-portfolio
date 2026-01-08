import { useState } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "JWT Auth", level: 85 },
        { name: "Socket.io", level: 78 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Mongoose", level: 88 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 88 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  const activeSkills = skillCategories.find(cat => cat.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A diverse toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.title
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills with Progress Bars */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {activeSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Grid View */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
