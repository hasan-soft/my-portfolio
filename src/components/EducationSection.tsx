import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "2018 - 2022",
      description: "Graduated with honors. Focused on software engineering, data structures, algorithms, and web development. Participated in various coding competitions and hackathons.",
      achievements: [
        "CGPA: 3.75/4.00",
        "Dean's List for Academic Excellence",
        "Lead of University Programming Club",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      location: "Dhaka, Bangladesh",
      period: "2016 - 2018",
      description: "Completed HSC in Science group with a focus on Mathematics and Physics. Developed initial interest in programming during this time.",
      achievements: [
        "GPA: 5.00/5.00",
        "Science Group",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My educational journey that laid the foundation for my career in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span 
                          key={achievement}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
