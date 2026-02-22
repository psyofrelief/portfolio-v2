import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Headline({ children, className = "" }: Props) {
  return (
    <h1 className={cn("text-lg leading-tight font-light", className)}>
      {children}
    </h1>
  );
}
