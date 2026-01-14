const GeometricPattern = () => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid of geometric shapes */}
      
      {/* Row 1 */}
      <rect x="20" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
      <rect x="40" y="40" width="40" height="40" className="fill-primary" />
      
      <rect x="120" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
      <polygon points="160,30 190,90 130,90" className="fill-primary" />
      
      <rect x="220" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
      <circle cx="260" cy="60" r="25" className="fill-primary" />
      
      <rect x="320" y="20" width="60" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
      <rect x="335" y="35" width="30" height="50" className="fill-primary" />

      {/* Row 2 */}
      <g transform="translate(0, 100)">
        <rect x="20" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <path d="M30 90 L60 30 L90 90 Z" className="stroke-primary" strokeWidth="2" fill="none" />
        
        <rect x="120" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <rect x="130" y="30" width="60" height="60" className="fill-primary" />
        <circle cx="160" cy="60" r="15" className="fill-background" />
        
        <rect x="220" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <path d="M230 30 L290 30 L290 90 L230 90 Z" className="stroke-primary" strokeWidth="2" fill="none" />
        <line x1="230" y1="30" x2="290" y2="90" className="stroke-primary" strokeWidth="2" />
        
        <rect x="320" y="20" width="60" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <ellipse cx="350" cy="60" rx="20" ry="30" className="fill-primary" />
      </g>

      {/* Row 3 */}
      <g transform="translate(0, 200)">
        <rect x="20" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <rect x="35" y="35" width="50" height="50" className="stroke-primary" strokeWidth="2" fill="none" />
        <rect x="50" y="50" width="20" height="20" className="fill-primary" />
        
        <rect x="120" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <polygon points="160,30 130,90 190,90" className="stroke-primary" strokeWidth="2" fill="none" />
        
        <rect x="220" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <circle cx="260" cy="60" r="25" className="stroke-primary" strokeWidth="2" fill="none" />
        <circle cx="260" cy="60" r="12" className="fill-primary" />
        
        <rect x="320" y="20" width="60" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <line x1="330" y1="30" x2="370" y2="90" className="stroke-primary" strokeWidth="2" />
        <line x1="370" y1="30" x2="330" y2="90" className="stroke-primary" strokeWidth="2" />
      </g>

      {/* Row 4 */}
      <g transform="translate(0, 300)">
        <rect x="20" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <path d="M30 30 L90 30 L90 90" className="stroke-primary" strokeWidth="2" fill="none" />
        
        <rect x="120" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <rect x="135" y="35" width="50" height="50" className="fill-primary" />
        
        <rect x="220" y="20" width="80" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <path d="M240 40 L280 40 L280 80 L240 80 Z" className="stroke-primary" strokeWidth="2" fill="none" />
        
        <rect x="320" y="20" width="60" height="80" className="stroke-geometric-stroke" strokeWidth="1.5" />
        <circle cx="350" cy="60" r="20" className="stroke-primary" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
};

export default GeometricPattern;
