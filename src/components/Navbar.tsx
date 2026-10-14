import { useState, useEffect } from "react";
import { Menu, X, Download, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/hasan.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  // Detect scroll state and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy only on home page
      if (location.pathname === "/") {
        const sections = navLinks.map((link) => link.href.substring(1));
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveSection(sections[i]);
              return;
            }
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-105"
          >
            <div className="relative w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Hasan Bhuiyan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-foreground flex items-center gap-1 font-mono">
                Hasan<span className="text-primary">.dev</span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono hidden sm:inline-block">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 dark:bg-card/70 border border-border/60 px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-primary font-semibold bg-background shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              size="sm"
              variant="default"
              className="gap-2 rounded-full px-4 text-xs font-semibold shadow-sm hover:shadow-primary/20 transition-all duration-200"
              asChild
            >
              <a href="/Hasan_resume.pdf" download="Hasan_Bhuiyan_Resume.pdf">
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-secondary/80 border border-border text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-card/95 border border-border shadow-xl backdrop-blur-xl animate-scale-in">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-primary" />}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-border">
                <Button
                  size="sm"
                  className="w-full gap-2 rounded-xl justify-center font-medium"
                  asChild
                >
                  <a
                    href="/Hasan_resume.pdf"
                    download="Hasan_Bhuiyan_Resume.pdf"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
