import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function FormMessage({ className = "", children }: Props) {
  return (
    <p className={cn("text-destructive text-xs", className)}>{children}</p>
  );
}
