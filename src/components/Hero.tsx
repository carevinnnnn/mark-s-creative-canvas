import GeometricPattern from "./GeometricPattern";
import profileImage from "@/assets/profile.png";
import { useMultiParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const { containerRef, getLayerStyle } = useMultiParallax(4);

  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Profile Image with Tech Illustrations */}
        <div className="relative opacity-0 animate-fade-in group" ref={containerRef}>
          {/* Floating Tech Illustrations with Parallax */}
          
          {/* Monitor/Screen - Top Right - Layer 3 (fastest) */}
          <div style={getLayerStyle(3)} className="absolute -top-8 -right-4 hidden md:block">
            <svg
              viewBox="0 0 60 50"
              className="w-16 h-14 stroke-primary overflow-visible animate-float"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="5" width="40" height="28" rx="2" className="stroke-foreground/30" />
              <line x1="5" y1="27" x2="45" y2="27" className="stroke-foreground/20" />
              <rect x="18" y="33" width="14" height="3" rx="1" className="stroke-foreground/20" />
              <line x1="12" y1="12" x2="28" y2="12" className="stroke-primary/60 animate-draw-line" />
              <line x1="12" y1="17" x2="22" y2="17" className="stroke-foreground/30" />
              <line x1="12" y1="22" x2="32" y2="22" className="stroke-foreground/20" />
            </svg>
          </div>
          
          {/* Code Brackets - Top Left - Layer 2 */}
          <div style={getLayerStyle(2)} className="absolute -top-6 -left-8 hidden md:block">
            <svg
              viewBox="0 0 50 40"
              className="w-12 h-10 stroke-primary overflow-visible animate-float-delayed"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 8 L5 20 L15 32" className="stroke-primary/70 animate-draw-line" />
              <path d="M35 8 L45 20 L35 32" className="stroke-primary/70 animate-draw-line delay-200" />
              <line x1="22" y1="30" x2="28" y2="10" className="stroke-foreground/40 animate-draw-line delay-300" />
            </svg>
          </div>
          
          {/* Cursor/Mouse - Bottom Left - Layer 1 */}
          <div style={getLayerStyle(1)} className="absolute -bottom-6 -left-10 hidden md:block">
            <svg
              viewBox="0 0 40 50"
              className="w-10 h-12 stroke-primary overflow-visible animate-float"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 5 L10 35 L16 29 L22 42 L27 40 L21 27 L30 25 L10 5 Z" className="stroke-primary/60 fill-primary/10 animate-cursor-click" style={{ transformOrigin: '18px 22px' }} />
            </svg>
          </div>
          
          {/* Chip/CPU - Right Middle - Layer 3 */}
          <div style={getLayerStyle(3)} className="absolute top-1/2 -right-12 hidden lg:block">
            <svg
              viewBox="0 0 50 50"
              className="w-12 h-12 stroke-primary overflow-visible animate-float-delayed"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="12" y="12" width="26" height="26" rx="3" className="stroke-foreground/30" />
              <rect x="18" y="18" width="14" height="14" rx="1" className="stroke-primary/50 animate-pulse-slow" />
              {/* Pins */}
              <line x1="18" y1="12" x2="18" y2="6" className="stroke-foreground/30" />
              <line x1="25" y1="12" x2="25" y2="6" className="stroke-foreground/30" />
              <line x1="32" y1="12" x2="32" y2="6" className="stroke-foreground/30" />
              <line x1="18" y1="38" x2="18" y2="44" className="stroke-foreground/30" />
              <line x1="25" y1="38" x2="25" y2="44" className="stroke-foreground/30" />
              <line x1="32" y1="38" x2="32" y2="44" className="stroke-foreground/30" />
            </svg>
          </div>
          
          {/* Floating Dots - Bottom Right - Layer 2 */}
          <div style={getLayerStyle(2)} className="absolute -bottom-4 right-8 hidden md:block">
            <svg
              viewBox="0 0 40 40"
              className="w-10 h-10 stroke-primary overflow-visible animate-float"
              fill="none"
              strokeWidth="1"
            >
              <circle cx="10" cy="10" r="3" className="stroke-primary/50 animate-pulse-slow" />
              <circle cx="25" cy="18" r="2" className="stroke-foreground/40 animate-pulse-slow delay-200" />
              <circle cx="15" cy="30" r="2.5" className="stroke-primary/40 animate-pulse-slow delay-400" />
              <line x1="12" y1="12" x2="23" y2="17" className="stroke-foreground/20" />
              <line x1="24" y1="20" x2="16" y2="28" className="stroke-foreground/20" />
            </svg>
          </div>

          {/* Profile Image - Layer 0 (slowest/base) */}
          <div style={getLayerStyle(0)} className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src={profileImage} 
              alt="Mark Carevin Daluson" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6" />
        </div>

        {/* Right Content */}
        <div className="space-y-8 opacity-0 animate-fade-up delay-200">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
            Mark
            <br />
            Carevin
            <br />
            <span className="text-primary">Daluson</span>
          </h1>
          
          <div className="flex gap-6 items-center">
            <div className="geometric-line" />
            <div className="geometric-line" />
          </div>
          
          <div className="space-y-4 font-mono text-sm text-muted-foreground opacity-0 animate-fade-up delay-300">
            <p className="flex items-center gap-3">
              <span className="text-primary">↗</span>
              <span className="uppercase tracking-widest">Creative Developer</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-primary">↗</span>
              <span className="uppercase tracking-widest">UI/UX Designer</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-primary">↗</span>
              <span className="uppercase tracking-widest">Based in Philippines</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
