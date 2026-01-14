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
          {/* Label */}
          <div>
            <p className="section-label">Expertise</p>
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
