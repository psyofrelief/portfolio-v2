type Props = {
  href: string;
  label: string;
};

export default function Footerlink({ href, label }: Props) {
  return (
    <li className="flex">
      <a
        className="text-muted-foreground flex-1 leading-tight transition-opacity hover:opacity-50"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
