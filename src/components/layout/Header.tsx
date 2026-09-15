import { Link } from "@tanstack/react-router";

const NAV_ITEMS = [
  { label: "インターン", href: "#experience" },
  { label: "活動経歴", href: "#activities" },
  { label: "制作物", href: "#projects" },
  { label: "技術記事", href: "#articles" },
] as const;

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          Yuji
        </Link>

        <nav className="header-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
