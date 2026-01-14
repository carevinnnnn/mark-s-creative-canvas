const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Label + Mail Illustration */}
          <div className="space-y-8">
            <p className="section-label">Get in Touch</p>
            
            {/* Minimalist Mail/Connection Drawing with Animations */}
            <div className="hidden lg:block group">
              <svg
                viewBox="0 0 200 140"
                className="w-full max-w-[280px] stroke-primary overflow-visible"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Envelope - floating */}
                <g className="animate-float">
                  <rect x="25" y="35" width="120" height="80" rx="4" className="stroke-foreground/40 animate-draw-line" />
                  <path d="M25 45 L85 85 L145 45" className="stroke-primary/70 animate-draw-line delay-200" />
                  <path d="M25 115 L60 85" className="stroke-foreground/30 animate-draw-line delay-300" />
                  <path d="M145 115 L110 85" className="stroke-foreground/30 animate-draw-line delay-300" />
                </g>
                
                {/* Send Arrow - with cursor clicking */}
                <g className="animate-cursor-click" style={{ transformOrigin: '175px 30px' }}>
                  <line x1="155" y1="50" x2="180" y2="25" className="stroke-primary" />
                  <polyline points="170,25 180,25 180,35" className="stroke-primary" />
                </g>
                
                {/* Cursor pointer for send */}
                <g className="animate-cursor-click delay-100" style={{ transformOrigin: '175px 45px' }}>
                  <path 
                    d="M168 40 L168 55 L171 52 L174 59 L177 58 L174 51 L178 50 L168 40 Z" 
                    className="stroke-primary fill-primary/20"
                    strokeWidth="1"
                  />
                </g>
                
                {/* Connection Dots - floating with different delays */}
                <g className="animate-float-delayed">
                  <circle cx="170" cy="90" r="6" className="stroke-primary/60 animate-pulse-slow" />
                  <circle cx="185" cy="110" r="4" className="stroke-foreground/40 animate-pulse-slow delay-200" />
                  <circle cx="160" cy="120" r="5" className="stroke-primary/40 animate-pulse-slow delay-400" />
                  
                  {/* Connection Lines */}
                  <line x1="170" y1="96" x2="185" y2="106" className="stroke-foreground/30 animate-draw-line delay-500" />
                  <line x1="170" y1="96" x2="160" y2="115" className="stroke-foreground/30 animate-draw-line delay-500" />
                </g>
                
                {/* @ Symbol abstraction - gentle float */}
                <g className="animate-float">
                  <circle cx="40" cy="25" r="8" className="stroke-foreground/30" />
                  <path d="M40 21 Q48 21 48 28 Q48 33 42 33 Q38 33 38 28 L38 24" className="stroke-foreground/30" />
                </g>
              </svg>
            </div>
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
