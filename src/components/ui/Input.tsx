interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
}

export default function Input({ type = "text", placeholder, ...props }: Props) {
  return (
    <input
      type={type}
      className="border-b-outline sm:py-sm py-xs placeholder:text-foreground-secondary w-full ring-white outline-none not-placeholder-shown:border-b focus:border-b"
      placeholder={placeholder}
      {...props}
    />
  );
}
