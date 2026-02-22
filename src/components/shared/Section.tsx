import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  first?: boolean;
}

export default function Section({
  children,
  first = false,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background px-xs py-lg sm:py-2xl sm:px-md w-full flex-1",
        first && "pt-12",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
