import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior MERN Stack Developer",
      company: "Tech Solutions Ltd.",
      companyUrl: "https://example.com",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise web applications using the MERN stack. Mentoring junior developers and conducting code reviews.",
      responsibilities: [
        "Architected and developed scalable microservices-based applications",
        "Led a team of 5 developers in delivering client projects on time",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized application performance resulting in 40% faster load times",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency BD",
      companyUrl: "https://example.com",
      location: "Dhaka, Bangladesh",
      period: "Jun 2021 - Dec 2022",
      type: "Full-time",
      description: "Developed and maintained web applications for various clients. Collaborated with designers and project managers to deliver high-quality solutions.",
      responsibilities: [
        "Built 15+ responsive web applications from scratch",
        "Integrated payment gateways including Stripe and PayPal",
        "Developed RESTful APIs consumed by mobile applications",
        "Maintained and improved legacy codebase reducing bugs by 50%",
      ],
      technologies: ["React", "Express", "PostgreSQL", "Redux", "Tailwind"],
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Hub",
      companyUrl: "https://example.com",
      location: "Dhaka, Bangladesh",
      period: "Jan 2020 - May 2021",
      type: "Full-time",
      description: "Started my professional journey building websites and learning best practices in web development.",
      responsibilities: [
        "Developed frontend interfaces using React and CSS",
        "Collaborated with senior developers on backend features",
        "Participated in daily stand-ups and sprint planning",
        "Wrote unit tests improving code coverage to 80%",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My career path and the valuable experiences that shaped me as a developer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.role}`}
              className="group relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border hover:before:bg-primary before:transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary" />

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground lg:text-right">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
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

export default ExperienceSection;
