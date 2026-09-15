import { FaGithub, FaXTwitter, FaEnvelope, FaPen, FaBookOpen } from "react-icons/fa6";

const CONTACT_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Yuji181181",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/a_su114514",
  },
  {
    icon: FaPen,
    label: "Qiita",
    href: "https://qiita.com/Yuji181181",
  },
  {
    icon: FaBookOpen,
    label: "Zenn",
    href: "https://zenn.dev/yuji181181",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:hasegawa.iniad@gmail.com",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          &copy; {year} Yuji. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
