import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label + Laptop Illustration */}
          <div className="space-y-8" ref={ref}>
            <p className="section-label">About Me</p>
            
            {/* Minimalist Laptop Drawing with Animations */}
            <div className={`hidden lg:block group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <svg
                viewBox="0 0 200 140"
                className="w-full max-w-[280px] stroke-primary overflow-visible"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Laptop Screen - floating */}
                <g className={isInView ? "animate-float" : ""}>
                  <rect x="20" y="10" width="160" height="95" rx="4" className="stroke-foreground/40 animate-draw-line" />
                  <rect x="28" y="18" width="144" height="79" rx="2" className="stroke-primary/60 animate-draw-line delay-200" />
                  
                  {/* Website Content Lines - draw in */}
                  <line x1="38" y1="30" x2="80" y2="30" className="stroke-primary/80 animate-draw-line delay-300" />
                  <line x1="38" y1="42" x2="110" y2="42" className="stroke-foreground/30 animate-draw-line delay-400" />
                  <line x1="38" y1="52" x2="95" y2="52" className="stroke-foreground/30 animate-draw-line delay-500" />
                  <line x1="38" y1="62" x2="105" y2="62" className="stroke-foreground/30 animate-draw-line delay-500" />
                  
                  {/* Website Box Element */}
                  <rect x="120" y="38" width="42" height="35" rx="2" className="stroke-primary/50 animate-draw-line delay-400" />
                  
                  {/* Button */}
                  <rect x="38" y="76" width="35" height="12" rx="2" className="stroke-primary animate-pulse-slow" />
                </g>
                
                {/* Laptop Base */}
                <path d="M10 105 L20 105 L20 110 L180 110 L180 105 L190 105 L190 118 C190 122 186 126 182 126 L18 126 C14 126 10 122 10 118 Z" className="stroke-foreground/40" />
                
                {/* Trackpad */}
                <rect x="80" y="113" width="40" height="8" rx="1" className="stroke-foreground/20" />
                
                {/* Animated Cursor - clicking */}
                <g className={isInView ? "animate-cursor-click" : ""} style={{ transformOrigin: '145px 55px' }}>
                  {/* Cursor pointer shape */}
                  <path 
                    d="M140 48 L140 65 L144 61 L148 70 L151 69 L147 60 L152 58 L140 48 Z" 
                    className="stroke-primary fill-primary/20"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I craft digital experiences that blend 
              <span className="text-primary"> creativity</span> with 
              <span className="text-primary"> functionality</span>.
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With a passion for clean design and elegant code, I transform ideas into 
                interactive digital solutions. My approach combines technical expertise 
                with a keen eye for aesthetics.
              </p>
              <p>
                I believe in the power of simplicity—creating interfaces that are not only 
                beautiful but intuitive and accessible to all users.
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="geometric-line" />
              <div className="geometric-line" />
              <div className="geometric-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
