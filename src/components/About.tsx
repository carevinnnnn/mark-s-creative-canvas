const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label */}
          <div>
            <p className="section-label">About Me</p>
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
