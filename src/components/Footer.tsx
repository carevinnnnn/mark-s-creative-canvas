const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            © {currentYear} Mark Carevin Daluson
          </p>
          
          <p className="font-mono text-xs text-muted-foreground">
            Designed & Developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
