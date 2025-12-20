import { cn } from "@/lib/utils";

interface HumsjLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
  className?: string;
  showArabic?: boolean;
}

export function HumsjLogo({ 
  size = "md", 
  variant = "full", 
  className,
  showArabic = false 
}: HumsjLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12", 
    lg: "h-16",
    xl: "h-20"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  if (variant === "icon") {
    return (
      <div className={cn("relative", className)}>
        <svg 
          className={cn(sizeClasses[size], "w-auto")}
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="32" cy="32" r="30" fill="url(#gradient)" stroke="#d4a853" strokeWidth="2"/>
          
          {/* Mosque silhouette */}
          <path d="M12 52 L12 40 Q12 36 16 36 L24 36 Q28 36 28 40 L28 52 Z M28 52 L28 32 Q28 28 32 28 L32 28 Q36 28 36 32 L36 52 Z M36 52 L36 40 Q36 36 40 36 L48 36 Q52 36 52 40 L52 52 Z" fill="white"/>
          <ellipse cx="32" cy="28" rx="12" ry="6" fill="white"/>
          <rect x="20" y="16" width="3" height="16" fill="white"/>
          <rect x="41" y="16" width="3" height="16" fill="white"/>
          <ellipse cx="21.5" cy="16" rx="3" ry="4" fill="white"/>
          <ellipse cx="42.5" cy="16" rx="3" ry="4" fill="white"/>
          
          {/* Crescents */}
          <path d="M21.5 12 Q19 8 21.5 4 Q24 10 21.5 12" fill="#d4a853"/>
          <path d="M42.5 12 Q40 8 42.5 4 Q45 10 42.5 12" fill="#d4a853"/>
          
          {/* Arabic text */}
          <text x="32" y="58" textAnchor="middle" fill="white" fontSize="6" fontFamily="serif">حمسج</text>
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={cn("flex flex-col", className)}>
        <h1 className={cn(
          "font-display font-bold leading-tight bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent",
          textSizeClasses[size]
        )}>
          HUMSJ
        </h1>
        <p className="text-muted-foreground text-sm font-medium">
          Muslim Students Jama'a
        </p>
        {showArabic && (
          <p className="text-muted-foreground/70 text-xs">
            جماعة الطلاب المسلمين
          </p>
        )}
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <HumsjLogo variant="icon" size={size} />
      <HumsjLogo variant="text" size={size} showArabic={showArabic} />
    </div>
  );
}