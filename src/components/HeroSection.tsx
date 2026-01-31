import { ArrowDown, Github, Linkedin, Mail, Twitter, Facebook, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "../assets/my.jpeg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hasan-soft", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hasan-bhuiyan503/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/hasan.soft503", label: "Facebook" },
    { icon: Mail, href: "mailto:hasanbhuiyan503@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="text-primary">Hasan Bhuiyan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.2s" }}>
              MERN Stack Developer
            </p>
            
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              I craft seamless, full-stack web experiences using MongoDB, Express, React, and Node.js. 
              Turning complex problems into elegant, user-friendly solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary border-4 border-primary/20 overflow-hidden animate-float">
                {/* Replace with your actual photo */}
                <img 
                  src="/profile-photo.jpg" 
                  alt="Hasan Bhuiyan - MERN Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-primary/30 text-6xl font-bold">
                  <img src={profile} alt="LOGO" className="" />
                </div>
              </div>
              {/* Tech badges */}
              <div className="absolute -right-4 top-8 bg-card px-3 py-2 rounded-lg shadow-card border border-border text-sm font-mono animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
                React.js
              </div>
              <div className="absolute -left-4 bottom-16 bg-card px-3 py-2 rounded-lg shadow-card border border-border text-sm font-mono animate-slide-in-left" style={{ animationDelay: "0.7s" }}>
                Node.js
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 rounded-full border border-border hover:border-primary transition-colors">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
