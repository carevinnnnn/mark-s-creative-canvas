const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label + Laptop Illustration */}
          <div className="space-y-8">
            <p className="section-label">About Me</p>
            
            {/* Minimalist Laptop Drawing */}
            <div className="hidden lg:block">
              <svg
                viewBox="0 0 200 140"
                className="w-full max-w-[240px] stroke-primary"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Laptop Screen */}
                <rect x="20" y="10" width="160" height="95" rx="4" className="stroke-foreground/40" />
                <rect x="28" y="18" width="144" height="79" rx="2" className="stroke-primary/60" />
                
                {/* Website Content Lines */}
                <line x1="38" y1="30" x2="80" y2="30" className="stroke-primary/80" />
                <line x1="38" y1="42" x2="110" y2="42" className="stroke-foreground/30" />
                <line x1="38" y1="52" x2="95" y2="52" className="stroke-foreground/30" />
                <line x1="38" y1="62" x2="105" y2="62" className="stroke-foreground/30" />
                
                {/* Website Box Element */}
                <rect x="120" y="38" width="42" height="35" rx="2" className="stroke-primary/50" />
                
                {/* Button */}
                <rect x="38" y="76" width="35" height="12" rx="2" className="stroke-primary" />
                
                {/* Laptop Base */}
                <path d="M10 105 L20 105 L20 110 L180 110 L180 105 L190 105 L190 118 C190 122 186 126 182 126 L18 126 C14 126 10 122 10 118 Z" className="stroke-foreground/40" />
                
                {/* Trackpad */}
                <rect x="80" y="113" width="40" height="8" rx="1" className="stroke-foreground/20" />
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
