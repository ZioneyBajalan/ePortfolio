export const VineCorner = ({ corner = 'tl' }) => {
  const cornerClass = {
    'tl': 'vine-tl',
    'tr': 'vine-tr',
    'bl': 'vine-bl',
    'br': 'vine-br',
  }[corner];

  return (
    <svg
      className={cornerClass}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7" stroke="#6ba876" strokeWidth="2" strokeLinecap="round">
        {/* Main vine trunk */}
        <path d="M 10 110 Q 20 100, 30 85 T 50 50" fill="none" />
        <path d="M 30 85 Q 40 75, 50 60 T 70 30" fill="none" />
        <path d="M 50 50 Q 60 40, 70 25" fill="none" />

        {/* Left branch */}
        <path d="M 20 100 Q 15 95, 12 85" fill="none" />
        <path d="M 30 85 Q 25 80, 20 70" fill="none" />

        {/* Right branch */}
        <path d="M 40 80 Q 50 75, 60 70" fill="none" />
        <path d="M 50 60 Q 60 52, 70 45" fill="none" />

        {/* Top branch */}
        <path d="M 60 45 Q 70 35, 80 25" fill="none" />
        <path d="M 70 30 Q 80 20, 90 15" fill="none" />
      </g>

      {/* Leaves */}
      <g fill="#6ba876" opacity="0.6">
        <ellipse cx="8" cy="100" rx="4" ry="6" transform="rotate(-30 8 100)" />
        <ellipse cx="15" cy="90" rx="4" ry="6" transform="rotate(-20 15 90)" />
        <ellipse cx="25" cy="75" rx="4" ry="6" transform="rotate(10 25 75)" />
        <ellipse cx="35" cy="60" rx="4" ry="6" transform="rotate(30 35 60)" />
        <ellipse cx="50" cy="45" rx="4" ry="6" transform="rotate(45 50 45)" />
        <ellipse cx="65" cy="30" rx="4" ry="6" transform="rotate(60 65 30)" />
        <ellipse cx="80" cy="20" rx="4" ry="6" transform="rotate(75 80 20)" />
        <ellipse cx="95" cy="12" rx="4" ry="6" transform="rotate(85 95 12)" />
        
        {/* Branch leaves */}
        <ellipse cx="18" cy="80" rx="3" ry="5" transform="rotate(-45 18 80)" />
        <ellipse cx="45" cy="50" rx="3" ry="5" transform="rotate(20 45 50)" />
        <ellipse cx="75" cy="35" rx="3" ry="5" transform="rotate(50 75 35)" />
      </g>
    </svg>
  );
};
