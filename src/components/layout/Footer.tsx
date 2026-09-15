import { FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Yuji. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Yuji181181"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://x.com/a_su114514"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={20} />
          </a>
          <a href="mailto:hasegawa.iniad@gmail.com" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
