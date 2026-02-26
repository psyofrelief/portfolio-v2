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
        "flex size-fit cursor-pointer items-center justify-center gap-x-2 rounded px-4 py-2 text-xs whitespace-nowrap transition-all",
        variants[variant],
        isLoading && "cursor-not-allowed opacity-50",
        className,
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <span className="size-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {children}
    </button>
  );
}
