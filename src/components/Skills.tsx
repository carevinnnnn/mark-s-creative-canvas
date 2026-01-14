const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { category: "Design", items: ["Figma", "UI/UX", "Prototyping", "Design Systems"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label + Code Illustration */}
          <div className="space-y-8">
            <p className="section-label">Expertise</p>
            
            {/* Minimalist Code/Tools Drawing */}
            <div className="hidden lg:block">
              <svg
                viewBox="0 0 200 160"
                className="w-full max-w-[220px] stroke-primary"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Code Editor Window */}
                <rect x="15" y="10" width="170" height="120" rx="6" className="stroke-foreground/40" />
                
                {/* Window Header */}
                <line x1="15" y1="30" x2="185" y2="30" className="stroke-foreground/30" />
                <circle cx="30" cy="20" r="4" className="stroke-foreground/40" />
                <circle cx="45" cy="20" r="4" className="stroke-foreground/40" />
                <circle cx="60" cy="20" r="4" className="stroke-foreground/40" />
                
                {/* Code Lines */}
                <line x1="30" y1="48" x2="55" y2="48" className="stroke-primary/80" />
                <line x1="60" y1="48" x2="120" y2="48" className="stroke-foreground/30" />
                
                <line x1="40" y1="62" x2="70" y2="62" className="stroke-primary/60" />
                <line x1="75" y1="62" x2="140" y2="62" className="stroke-foreground/30" />
                
                <line x1="40" y1="76" x2="90" y2="76" className="stroke-foreground/30" />
                <line x1="95" y1="76" x2="130" y2="76" className="stroke-primary/50" />
                
                <line x1="40" y1="90" x2="65" y2="90" className="stroke-foreground/30" />
                
                <line x1="30" y1="104" x2="50" y2="104" className="stroke-primary/80" />
                
                {/* Cursor */}
                <rect x="72" y="86" width="8" height="12" rx="1" className="stroke-primary" />
                
                {/* Gear Icon */}
                <circle cx="165" cy="110" r="10" className="stroke-foreground/30" />
                <circle cx="165" cy="110" r="4" className="stroke-foreground/20" />
              </svg>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-12">
              {skills.map((skill, index) => (
                <div key={skill.category} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{skill.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skill.items.map((item) => (
                      <div 
                        key={item}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-2 h-2 bg-primary group-hover:scale-150 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
