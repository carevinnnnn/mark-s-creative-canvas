import GeometricPattern from "./GeometricPattern";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Profile Image */}
        <div className="relative opacity-0 animate-fade-in group">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
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
