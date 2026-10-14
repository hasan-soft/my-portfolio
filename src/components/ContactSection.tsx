import { useState } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  MapPin, 
  Send, 
  Phone, 
  MessageCircle, 
  Facebook, 
  Copy, 
  Check, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/hasan-soft", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hasan-bhuiyan503/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/hasan.soft503", label: "Facebook" },
  ];

  const contactChannels = [
    { 
      icon: Mail, 
      label: "Email Address", 
      value: "hasanbhuiyan503@gmail.com", 
      actionLabel: "Send Email",
      href: "mailto:hasanbhuiyan503@gmail.com",
      copyValue: "hasanbhuiyan503@gmail.com"
    },
    { 
      icon: MessageCircle, 
      label: "WhatsApp Chat", 
      value: "+880 1719 103858", 
      actionLabel: "Chat on WhatsApp",
      href: "https://wa.me/8801719103858",
      copyValue: "+8801719103858"
    },
    { 
      icon: Phone, 
      label: "Direct Phone", 
      value: "+880 1719 103858", 
      actionLabel: "Call Now",
      href: "tel:+8801719103858",
      copyValue: "+8801719103858"
    },
  ];

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedItem(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hasanbhuiyan503@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    toast.success("Opening your default email client...");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-muted-foreground text-base">
            Have a project in mind, want to explore a collaboration, or looking to recruit a dedicated full-stack developer? My inbox is always open.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-card transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <button
                    onClick={() => handleCopy(item.copyValue, item.label)}
                    className="p-2 rounded-xl bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    title={`Copy ${item.label}`}
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedItem === item.label ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-xs font-mono text-muted-foreground mb-1">{item.label}</p>
                <p className="text-base font-bold text-foreground mb-6 font-mono tracking-tight">
                  {item.value}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full gap-2 rounded-xl justify-center font-semibold border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group/btn"
                asChild
              >
                <a
                  href={item.href}
                  target={item.label.includes("WhatsApp") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover/btn:text-primary-foreground transition-colors" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Contact Form & Side Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xs">
            <h3 className="text-xl font-bold text-foreground mb-2">Send a Direct Message</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Fill out the details below and it will compose a direct message straight to my inbox.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-foreground font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/60 border border-border/80 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-foreground font-medium">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/60 border border-border/80 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-foreground font-medium">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/60 border border-border/80 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-foreground font-medium">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/60 border border-border/80 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2 rounded-xl font-semibold shadow-md shadow-primary/20">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>

          {/* Location & Availability Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-card border border-border/80 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-foreground">Location & Working Hours</h3>

              <div className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Dhaka, Bangladesh</p>
                    <p className="text-xs text-muted-foreground">Available for local & global remote positions (GMT+6)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Fast Turnaround Time</p>
                    <p className="text-xs text-muted-foreground">Typically responds within 12 - 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="text-xs font-mono text-muted-foreground mb-3">Connect on Social Platforms:</p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
