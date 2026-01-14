const projects = [
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
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label */}
          <div>
            <p className="section-label">Selected Work</p>
          </div>
          
          {/* Projects List */}
          <div className="lg:col-span-2 space-y-0">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group py-8 border-b border-border first:pt-0 last:border-b-0 cursor-pointer"
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
    </section>
  );
};

export default Projects;
