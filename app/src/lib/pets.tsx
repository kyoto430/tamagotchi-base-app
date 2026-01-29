export const PetSVG = ({ type, mood }: { type: number; mood: 'happy' | 'neutral' | 'sad' }) => {
  const pets = {
    0: <CatSVG mood={mood} />,
    1: <DogSVG mood={mood} />,
    2: <DragonSVG mood={mood} />,
    3: <UnicornSVG mood={mood} />,
    4: <RobotSVG mood={mood} />,
  };
  
  return pets[type as keyof typeof pets] || null;
};

const CatSVG = ({ mood }: { mood: string }) => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    {/* Body */}
    <rect x="16" y="24" width="32" height="24" fill="#ff9e5e" />
    {/* Head */}
    <rect x="20" y="12" width="24" height="16" fill="#ff9e5e" />
    {/* Ears */}
    <polygon points="20,12 16,4 24,12" fill="#ff9e5e" />
    <polygon points="44,12 48,4 40,12" fill="#ff9e5e" />
    {/* Eyes */}
    <rect x="26" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    <rect x="34" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    {/* Mouth */}
    {mood === 'happy' && <path d="M 28 26 Q 32 28 36 26" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'sad' && <path d="M 28 28 Q 32 26 36 28" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'neutral' && <line x1="28" y1="27" x2="36" y2="27" stroke="#000" strokeWidth="2" />}
    {/* Paws */}
    <rect x="20" y="48" width="8" height="8" fill="#ff9e5e" />
    <rect x="36" y="48" width="8" height="8" fill="#ff9e5e" />
    {/* Tail */}
    <rect x="48" y="32" width="8" height="4" fill="#ff9e5e" />
  </svg>
);

const DogSVG = ({ mood }: { mood: string }) => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="16" y="24" width="32" height="24" fill="#8b5a3c" />
    <rect x="20" y="12" width="24" height="16" fill="#8b5a3c" />
    <rect x="16" y="12" width="6" height="12" fill="#8b5a3c" />
    <rect x="42" y="12" width="6" height="12" fill="#8b5a3c" />
    <rect x="26" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    <rect x="34" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    {mood === 'happy' && <path d="M 28 26 Q 32 28 36 26" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'sad' && <path d="M 28 28 Q 32 26 36 28" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'neutral' && <line x1="28" y1="27" x2="36" y2="27" stroke="#000" strokeWidth="2" />}
    <rect x="20" y="48" width="8" height="8" fill="#8b5a3c" />
    <rect x="36" y="48" width="8" height="8" fill="#8b5a3c" />
  </svg>
);

const DragonSVG = ({ mood }: { mood: string }) => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="16" y="24" width="32" height="24" fill="#7c3aed" />
    <rect x="20" y="12" width="24" height="16" fill="#7c3aed" />
    <polygon points="24,8 20,12 28,12" fill="#7c3aed" />
    <polygon points="40,8 44,12 36,12" fill="#7c3aed" />
    <rect x="26" y="18" width="4" height="4" fill={mood === 'sad' ? '#fbbf24' : '#ef4444'} />
    <rect x="34" y="18" width="4" height="4" fill={mood === 'sad' ? '#fbbf24' : '#ef4444'} />
    {mood === 'happy' && <path d="M 28 26 Q 32 28 36 26" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'sad' && <path d="M 28 28 Q 32 26 36 28" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'neutral' && <line x1="28" y1="27" x2="36" y2="27" stroke="#000" strokeWidth="2" />}
    <rect x="20" y="48" width="8" height="8" fill="#7c3aed" />
    <rect x="36" y="48" width="8" height="8" fill="#7c3aed" />
    <polygon points="48,28 56,32 48,36" fill="#7c3aed" />
  </svg>
);

const UnicornSVG = ({ mood }: { mood: string }) => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="16" y="24" width="32" height="24" fill="#ec4899" />
    <rect x="20" y="12" width="24" height="16" fill="#ec4899" />
    <polygon points="32,4 28,12 36,12" fill="#fbbf24" />
    <rect x="26" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    <rect x="34" y="18" width="4" height="4" fill={mood === 'sad' ? '#666' : '#000'} />
    {mood === 'happy' && <path d="M 28 26 Q 32 28 36 26" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'sad' && <path d="M 28 28 Q 32 26 36 28" stroke="#000" strokeWidth="2" fill="none" />}
    {mood === 'neutral' && <line x1="28" y1="27" x2="36" y2="27" stroke="#000" strokeWidth="2" />}
    <rect x="20" y="48" width="8" height="8" fill="#ec4899" />
    <rect x="36" y="48" width="8" height="8" fill="#ec4899" />
    <rect x="16" y="10" width="4" height="8" fill="#a855f7" />
    <rect x="44" y="10" width="4" height="8" fill="#a855f7" />
  </svg>
);

const RobotSVG = ({ mood }: { mood: string }) => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect x="16" y="24" width="32" height="24" fill="#64748b" stroke="#000" strokeWidth="2" />
    <rect x="20" y="12" width="24" height="16" fill="#64748b" stroke="#000" strokeWidth="2" />
    <rect x="30" y="6" width="4" height="6" fill="#64748b" stroke="#000" strokeWidth="2" />
    <circle cx="28" cy="20" r="3" fill={mood === 'sad' ? '#666' : '#22c55e'} />
    <circle cx="36" cy="20" r="3" fill={mood === 'sad' ? '#666' : '#22c55e'} />
    <rect x="28" y="26" width="8" height="2" fill={mood === 'happy' ? '#22c55e' : mood === 'sad' ? '#ef4444' : '#64748b'} />
    <rect x="20" y="48" width="8" height="8" fill="#64748b" stroke="#000" strokeWidth="2" />
    <rect x="36" y="48" width="8" height="8" fill="#64748b" stroke="#000" strokeWidth="2" />
    <rect x="12" y="30" width="4" height="8" fill="#64748b" stroke="#000" strokeWidth="2" />
    <rect x="48" y="30" width="4" height="8" fill="#64748b" stroke="#000" strokeWidth="2" />
  </svg>
);