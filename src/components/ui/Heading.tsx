interface Props {
  label: string;
}

export default function Heading({ label }: Props) {
  return (
    <h1 className="text-foreground-secondary text-xs leading-none font-bold whitespace-nowrap uppercase">
      {label}
    </h1>
  );
}
