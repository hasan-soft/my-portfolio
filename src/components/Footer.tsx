import { ArrowUp, Github, Linkedin, Twitter, Facebook, Mail, Code2, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/hasan-soft", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hasan-bhuiyan503/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/hasan.soft503", label: "Facebook" },
    { icon: Mail, href: "mailto:hasanbhuiyan503@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About Me" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/80 bg-card/60 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="flex items-center gap-2 group mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg font-mono">
                Hasan<span className="text-primary">.dev</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground max-w-sm">
              MERN & Full-Stack Developer • Crafting clean architectures and modern interactive web experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Resume & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-mono text-xs font-semibold flex items-center gap-2 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom row: Social + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Hasan Bhuiyan. Designed & engineered with React, TypeScript & Tailwind CSS.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
