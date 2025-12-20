import mosqueImage from "@/assets/hero-mosque.jpg";

interface MosqueBackgroundProps {
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

export function MosqueBackground({ children, className = "", overlay = true }: MosqueBackgroundProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        backgroundImage: `url(${mosqueImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90" />
      )}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}