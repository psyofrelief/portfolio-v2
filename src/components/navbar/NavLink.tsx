import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: Props) {
  return (
    <li className="flex">
      <Link className="flex-1 text-xs whitespace-nowrap uppercase" href={href}>
        {label}
      </Link>
    </li>
  );
}
