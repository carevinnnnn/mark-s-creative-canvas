import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useMultiParallax } from "@/hooks/use-parallax";
import localResponse1 from "@/assets/local-response-1.png";
import localResponse2 from "@/assets/local-response-2.png";
import localResponse3 from "@/assets/local-response-3.png";
import localResponse4 from "@/assets/local-response-4.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    title: "Local Response",
    description: "A community-powered emergency response app connecting nearby helpers instantly",
    tags: ["React", "Supabase", "Maps API"],
    year: "2025",
    link: "https://community-watch-yre6.vercel.app/",
    screenshots: [localResponse1, localResponse2, localResponse3, localResponse4],
  },
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with seamless checkout flow",
    tags: ["React", "Node.js", "Stripe"],
    year: "2024",
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time data visualization for business intelligence",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive financial management solution",
    tags: ["React Native", "GraphQL", "AWS"],
    year: "2023",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio builder with customizable themes",
    tags: ["Next.js", "Tailwind", "Vercel"],
    year: "2023",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { containerRef, getLayerStyle } = useMultiParallax(3);

  const openProject = (project: Project) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label + Gallery Illustration */}
          <div className="space-y-8" ref={(el) => { 
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
            (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}>
            <p className="section-label">Selected Work</p>
            
            {/* Minimalist Browser/Gallery Drawing with Animations + Parallax */}
            <div className={`hidden lg:block transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <svg
                viewBox="0 0 180 150"
                className="w-full max-w-[280px] stroke-primary overflow-visible"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Browser Window - floating + parallax layer 1 */}
                <g className={isInView ? "animate-float" : ""} style={getLayerStyle(1)}>
                  {/* Main Browser Frame */}
                  <rect x="10" y="10" width="140" height="100" rx="5" className="stroke-foreground/40 animate-draw-line" />
                  
                  {/* Browser Header Bar */}
                  <line x1="10" y1="28" x2="150" y2="28" className="stroke-foreground/30 animate-draw-line delay-100" />
                  
                  {/* Window Controls */}
                  <circle cx="22" cy="19" r="3" className="stroke-foreground/40 animate-pulse-slow" />
                  <circle cx="33" cy="19" r="3" className="stroke-foreground/40 animate-pulse-slow delay-100" />
                  <circle cx="44" cy="19" r="3" className="stroke-foreground/40 animate-pulse-slow delay-200" />
                  
                  {/* URL Bar */}
                  <rect x="55" y="14" width="85" height="10" rx="2" className="stroke-foreground/20 animate-draw-line delay-200" />
                  
                  {/* Gallery Content - Image Thumbnails */}
                  <rect x="20" y="38" width="35" height="28" rx="2" className="stroke-primary/60 animate-draw-line delay-300" />
                  <rect x="62" y="38" width="35" height="28" rx="2" className="stroke-primary/40 animate-draw-line delay-400" />
                  <rect x="104" y="38" width="35" height="28" rx="2" className="stroke-foreground/30 animate-draw-line delay-500" />
                  
                  {/* Second Row */}
                  <rect x="20" y="72" width="35" height="28" rx="2" className="stroke-foreground/30 animate-draw-line delay-500" />
                  <rect x="62" y="72" width="35" height="28" rx="2" className="stroke-primary/50 animate-draw-line delay-500" />
                  <rect x="104" y="72" width="35" height="28" rx="2" className="stroke-foreground/30 animate-draw-line delay-500" />
                </g>
                
                {/* Floating Cursor + parallax layer 2 */}
                <g className={isInView ? "animate-cursor-click" : ""} style={{ ...getLayerStyle(2), transformOrigin: '85px 55px' }}>
                  <path 
                    d="M78 48 L78 62 L81 59 L84 65 L87 64 L84 58 L88 57 L78 48 Z" 
                    className="stroke-primary fill-primary/20"
                    strokeWidth="1"
                  />
                </g>
                
                {/* Decorative Elements + parallax layer 2 */}
                <g className={isInView ? "animate-float-delayed" : ""} style={getLayerStyle(2)}>
                  {/* Floating dots */}
                  <circle cx="165" cy="40" r="4" className="stroke-primary/50 animate-pulse-slow" />
                  <circle cx="168" cy="55" r="2.5" className="stroke-foreground/30 animate-pulse-slow delay-200" />
                  <circle cx="160" cy="65" r="3" className="stroke-primary/30 animate-pulse-slow delay-400" />
                  
                  {/* Connecting lines */}
                  <line x1="165" y1="44" x2="168" y2="52" className="stroke-foreground/20" />
                  <line x1="168" y1="57" x2="160" y2="62" className="stroke-foreground/20" />
                </g>
              </svg>
            </div>
          </div>
          
          {/* Projects List */}
          <div className="lg:col-span-2 space-y-0">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group py-8 border-b border-border first:pt-0 last:border-b-0 ${
                  project.screenshots ? "cursor-pointer" : ""
                }`}
                onClick={() => openProject(project)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.screenshots && (
                        <span className="text-xs text-muted-foreground font-mono">
                          [{project.screenshots.length} images]
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground pl-10">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pl-10 md:pl-0">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshot Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background border-border">
          <DialogTitle className="sr-only">
            {selectedProject?.title} Screenshots
          </DialogTitle>
          {selectedProject?.screenshots && (
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-bold text-lg">{selectedProject.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} / {selectedProject.screenshots.length}
                  </p>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Site <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Image */}
              <div className="relative aspect-video bg-muted">
                <img
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation */}
              {selectedProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 p-4 justify-center border-t border-border">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-10 border-2 overflow-hidden transition-all ${
                      idx === currentImageIndex 
                        ? "border-primary" 
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
