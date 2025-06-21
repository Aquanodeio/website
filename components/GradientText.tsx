import { cn } from "@/lib/utils";

export const GradientText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-[14] font-medium leading-[24px] tracking-[-0.14px]",
        className
      )}
      style={{
        fontFamily: "var(--font-roboto)",
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, rgba(255, 255, 255, 1) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
};
