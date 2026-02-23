import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background px-xs py-lg sm:py-3xl sm:px-md w-full flex-1",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
