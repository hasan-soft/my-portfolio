import { Code2, Rocket, Users, Heart, Gamepad2, Coffee } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development approach to ship features quickly",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Creating intuitive interfaces that users love",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate About Building the Web
          </h2>
        </div>

        {/* Detailed About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">My Programming Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My coding adventure began during my college days when I stumbled upon HTML and CSS. 
              What started as curiosity quickly turned into passion. I spent countless nights learning 
              JavaScript, then moved on to React, and eventually fell in love with the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the past 1+ years, I've worked on diverse projects ranging from e-commerce platforms 
              to real-time collaboration tools. Each project taught me something new and pushed me to 
              become a better developer. I believe in continuous learning and staying updated with 
              the latest technologies.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">What I Love Doing</h3>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on building full-stack applications that solve real-world problems. There's 
              nothing more satisfying than seeing users interact with something I've built. I enjoy 
              the challenge of optimizing performance, writing clean APIs, and creating pixel-perfect 
              user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Collaboration is at the heart of what I do. I love working with teams, participating 
              in code reviews, and mentoring junior developers. I believe great software is built 
              through great teamwork.
            </p>
          </div>
        </div>

        {/* Interests Outside Programming */}
        <div className="bg-card rounded-xl border border-border p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Life Beyond Code</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gamepad2 className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Gaming & Esports</h4>
              <p className="text-sm text-muted-foreground">
                I'm a competitive gamer and love playing strategy games. It helps me think critically!
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cricket & Football</h4>
              <p className="text-sm text-muted-foreground">
                Weekend cricket matches and football sessions keep me active and refreshed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Coffee className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Coffee & Books</h4>
              <p className="text-sm text-muted-foreground">
                A good book with a cup of coffee is my perfect way to unwind after coding sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
