
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
      {/* Robot Body */}
      <rect x="120" y="140" width="160" height="120" rx="20" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      
      {/* Robot Head */}
      <rect x="140" y="80" width="120" height="90" rx="15" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      
      {/* Antenna */}
      <line x1="200" y1="80" x2="200" y2="50" stroke="#333" strokeWidth="3" />
      <circle cx="200" cy="40" r="10" fill="#EA384C" />
      
      {/* Eyes */}
      <circle cx="170" cy="115" r="10" fill="#333" />
      <circle cx="230" cy="115" r="10" fill="#333" />
      
      {/* Mouth - Happy Line */}
      <path d="M170 145 Q200 165 230 145" stroke="#333" strokeWidth="3" fill="none" />
      
      {/* Ears */}
      <rect x="125" y="100" width="15" height="30" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      <rect x="260" y="100" width="15" height="30" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      
      {/* Legs */}
      <rect x="140" y="260" width="20" height="40" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      <rect x="240" y="260" width="20" height="40" rx="5" fill="#F3F4F6" stroke="#333" strokeWidth="3" />
      
      {/* Paws */}
      <rect x="135" y="295" width="30" height="10" rx="5" fill="#EA384C" stroke="#333" strokeWidth="2" />
      <rect x="235" y="295" width="30" height="10" rx="5" fill="#EA384C" stroke="#333" strokeWidth="2" />
      
      {/* Notepad with Order */}
      <rect x="290" y="150" width="60" height="80" rx="5" fill="white" stroke="#333" strokeWidth="2" />
      <line x1="300" y1="170" x2="340" y2="170" stroke="#333" strokeWidth="2" />
      <line x1="300" y1="190" x2="340" y2="190" stroke="#333" strokeWidth="2" />
      <line x1="300" y1="210" x2="330" y2="210" stroke="#333" strokeWidth="2" />
      
      {/* Robot Arm Holding Pencil */}
      <line x1="240" y1="180" x2="290" y2="180" stroke="#333" strokeWidth="3" />
      <path d="M290 180 L300 195 L305 190" stroke="#EA384C" strokeWidth="2" />
      
      {/* Red Collar */}
      <rect x="160" y="170" width="80" height="15" rx="7.5" fill="#EA384C" stroke="#333" strokeWidth="2" />
      <circle cx="200" cy="178" r="5" fill="white" stroke="#333" strokeWidth="1" />
    </svg>
  );
};

export default RobotPuppyIllustration;
