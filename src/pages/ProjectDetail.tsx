import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Code2, Lightbulb, AlertTriangle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const projectsData = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built from scratch using the MERN stack. This platform provides a seamless shopping experience with features like product browsing, cart management, secure checkout, and an admin dashboard for inventory management.",
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "JWT", "Cloudinary"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment integration with Stripe",
      "Order tracking and history",
      "Admin dashboard for product management",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple user sessions was complex. Solved using WebSocket connections for instant synchronization.",
      "Optimizing product image loading for better performance required implementing lazy loading and image compression strategies.",
      "Handling payment edge cases like failed transactions and refunds needed careful error handling and transaction logging.",
    ],
    improvements: [
      "Add AI-powered product recommendations based on user browsing history",
      "Implement multi-vendor marketplace functionality",
      "Add mobile app using React Native",
      "Integrate more payment gateways for international customers",
    ],
  },
  "task-management": {
    title: "Task Management App",
    description: "A real-time collaborative task management application designed for teams. Features drag-and-drop kanban boards, team workspaces, and comprehensive progress tracking with analytics.",
    image: "/projects/taskmanager.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "React DnD", "Chart.js"],
    features: [
      "Drag-and-drop kanban boards",
      "Real-time collaboration with team members",
      "Task assignments and due dates",
      "Progress tracking with visual charts",
      "Team workspaces and permissions",
      "Comment threads on tasks",
      "Email notifications for updates",
    ],
    challenges: [
      "Synchronizing drag-and-drop actions in real-time across multiple users required careful state management and conflict resolution.",
      "Managing complex permission hierarchies for team workspaces needed a robust role-based access control system.",
      "Ensuring smooth animations during rapid drag-and-drop operations required optimizing render cycles.",
    ],
    improvements: [
      "Add time tracking feature for tasks",
      "Implement recurring tasks functionality",
      "Add integration with calendar apps (Google Calendar, Outlook)",
      "Build mobile app for on-the-go task management",
    ],
  },
  "social-dashboard": {
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for managing multiple social media accounts. Provides insights, scheduled posting, and engagement tracking across platforms.",
    image: "/projects/dashboard.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "OAuth", "Bull Queue", "Redis"],
    features: [
      "Multi-platform social media integration",
      "Post scheduling with queue management",
      "Engagement analytics and reports",
      "Competitor analysis tools",
      "Content calendar view",
      "Automated posting at optimal times",
      "Export reports as PDF",
    ],
    challenges: [
      "Handling API rate limits from different social platforms required implementing intelligent request queuing and caching.",
      "Aggregating data from multiple platforms with different data structures needed a flexible normalization layer.",
      "Building a responsive and performant dashboard with real-time updates while handling large datasets.",
    ],
    improvements: [
      "Add AI-powered content suggestions",
      "Implement sentiment analysis for comments",
      "Add team collaboration features",
      "Build a browser extension for quick posting",
    ],
  },
  "blog-platform": {
    title: "Blog Platform",
    description: "A modern blogging platform with a rich text editor, user authentication, comments system, and SEO optimization features. Perfect for content creators and businesses.",
    image: "/projects/blog.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB", "TipTap", "JWT", "AWS S3", "Redis"],
    features: [
      "Rich text editor with formatting options",
      "Image upload and management",
      "SEO-friendly URLs and meta tags",
      "Comment system with moderation",
      "Categories and tags organization",
      "Reading time estimation",
      "Social sharing integration",
    ],
    challenges: [
      "Building a smooth and feature-rich text editor that works consistently across browsers was technically challenging.",
      "Implementing efficient full-text search across thousands of articles required careful database indexing.",
      "Handling image uploads and optimization for different screen sizes needed a robust media pipeline.",
    ],
    improvements: [
      "Add newsletter subscription feature",
      "Implement content monetization options",
      "Add collaborative writing for multiple authors",
      "Build an analytics dashboard for authors",
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary mb-12 border border-border">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Technology Stack */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Technology Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Key Features</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Challenges Faced</h2>
            </div>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Future Improvements</h2>
            </div>
            <ul className="space-y-3">
              {project.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Projects */}
          <div className="text-center pt-8 border-t border-border">
            <Button variant="outline" size="lg" asChild>
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
