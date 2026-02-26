import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  topSection?: boolean; // New prop
}

export default function Section({
  children,
  className = "",
  topSection = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background px-sm py-lg sm:py-3xl sm:px-md w-full flex-1",
        // Apply pt-18 on mobile (default), then reset to standard padding on sm screens
        topSection && "sm:pt-3xl pt-18",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
