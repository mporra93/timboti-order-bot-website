
const RobotPuppyIllustration = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full h-auto"
    >
      {/* Robot Body - Simplified */}
      <rect x="140" y="150" width="120" height="100" rx="20" fill="#F3F4F6" stroke="#333" strokeWidth="2" />
      
      {/* Robot Head - Simplified */}
      <rect x="150" y="90" width="100" height="80" rx="15" fill="#F3F4F6" stroke="#333" strokeWidth="2" />
      
      {/* Antenna - Simplified */}
      <line x1="200" y1="90" x2="200" y2="70" stroke="#333" strokeWidth="2" />
      <circle cx="200" cy="65" r="5" fill="#EA384C" />
      
      {/* Eyes - Minimalist */}
      <circle cx="180" cy="120" r="7" fill="#333" />
      <circle cx="220" cy="120" r="7" fill="#333" />
      
      {/* Mouth - Simple curved line */}
      <path d="M180 145 Q200 155 220 145" stroke="#333" strokeWidth="2" fill="none" />
      
      {/* Legs - Simplified */}
      <rect x="155" y="250" width="15" height="30" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="2" />
      <rect x="230" y="250" width="15" height="30" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="2" />
      
      {/* Paws - Simplified */}
      <rect x="150" y="275" width="25" height="8" rx="4" fill="#EA384C" stroke="#333" strokeWidth="1" />
      <rect x="225" y="275" width="25" height="8" rx="4" fill="#EA384C" stroke="#333" strokeWidth="1" />
      
      {/* Red Collar - Minimalist */}
      <rect x="170" y="170" width="60" height="10" rx="5" fill="#EA384C" stroke="#333" strokeWidth="1" />
      <circle cx="200" cy="175" r="3" fill="white" stroke="#333" strokeWidth="1" />
    </svg>
  );
};

export default RobotPuppyIllustration;
