import { Github, Linkedin, Mail, Twitter, MapPin, Send, Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "hasan@example.com", 
      href: "mailto:hasan@example.com" 
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+880 1234 567890", 
      href: "tel:+8801234567890" 
    },
    { 
      icon: MessageCircle, 
      label: "WhatsApp", 
      value: "+880 1234 567890", 
      href: "https://wa.me/8801234567890" 
    },
  ];

  return (
    <footer id="contact" className="py-20 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:hasan@example.com">
              <Send className="w-4 h-4" />
              Send a Message
            </a>
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hasan Bhuiyan. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
