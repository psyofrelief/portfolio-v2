import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  isLoading = false,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: Props) {
  const variants = {
    primary: "bg-foreground text-background hover:opacity-60",
    outline: "border border-outline text-foreground hover:opacity-60",
  };

  return (
    <button
      className={cn(
        "gap-x-xs px-sm py-xs flex size-fit cursor-pointer items-center justify-center rounded text-xs font-light whitespace-nowrap transition-all",
        variants[variant],
        isLoading && "cursor-not-allowed opacity-50",
        className,
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {children}
    </button>
  );
}
