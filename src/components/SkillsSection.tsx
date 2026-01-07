const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Socket.io"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Firebase"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "Figma"],
    },
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` 
                    }}
                  >
                    {skill}
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

export default SkillsSection;
