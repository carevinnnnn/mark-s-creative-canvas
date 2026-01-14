import GeometricPattern from "./GeometricPattern";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 opacity-0 animate-fade-up">
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
          
          <div className="space-y-4 font-mono text-sm text-muted-foreground opacity-0 animate-fade-up delay-200">
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

        {/* Right Pattern */}
        <div className="w-full max-w-md lg:max-w-lg mx-auto opacity-0 animate-fade-in delay-300">
          <GeometricPattern />
        </div>
      </div>
    </section>
  );
};

export default Hero;
