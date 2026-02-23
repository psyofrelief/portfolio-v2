interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: string;
  placeholder: string;
}

export default function TextArea({ placeholder, ...props }: Props) {
  return (
    <textarea
      className="border-b-outline py-sm placeholder:text-foreground-secondary min-h-50 w-full flex-1 resize-none ring-0 outline-none not-placeholder-shown:border-b focus:border-b sm:min-h-75"
      placeholder={placeholder}
      {...props}
    />
  );
}
