import Image from "next/image";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  showGlow?: boolean;
  className?: string;
}

export default function ProfileImage({ size = "lg", showGlow = false, className = "" }: ProfileImageProps) {
  const sizeClasses = {
    sm: "h-20 w-20",
    md: "h-32 w-32",
    lg: "h-[260px] w-[260px]",
    xl: "h-[320px] w-[320px]",
  };

  return (
    <div className={`relative ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(186,170,255,0.35),transparent_70%)] blur-3xl opacity-70 scale-150" />
      )}
      <div className={`relative ${sizeClasses[size]} rounded-full border border-black/5 bg-white shadow-xl overflow-hidden`}>
        <Image
          src="/images/profile.jpg"
          alt="Nick Smid - International Business Intern"
          fill
          className="object-cover"
          priority
          sizes={size === "xl" ? "320px" : size === "lg" ? "260px" : size === "md" ? "128px" : "80px"}
        />
      </div>
    </div>
  );
}
