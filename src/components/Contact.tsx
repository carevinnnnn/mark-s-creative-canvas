const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label */}
          <div>
            <p className="section-label">Get in Touch</p>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's create something 
              <span className="text-primary"> amazing</span> together.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <a 
                  href="mailto:mark.daluson@email.com"
                  className="text-lg hover:text-primary transition-colors block"
                >
                  mark.daluson@email.com
                </a>
              </div>
              
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </p>
                <p className="text-lg">
                  Philippines
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Social
                </p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Dribbble
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Availability
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-lg">Open for projects</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-8">
              <div className="geometric-line" />
              <div className="geometric-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
