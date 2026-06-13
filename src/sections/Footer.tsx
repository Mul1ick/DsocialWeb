import dsocialLogo from "../assets/Dsocial_logo_web.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <a className="brand" href="#top">
            <img src={dsocialLogo} alt="d.social" />
          </a>
          <p>
            Thoughtful social,
            <br />
            made personally.
          </p>
        </div>
        <nav aria-label="Social links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@dsocial.studio">Email</a>
        </nav>
        <small>© 2026 d.social. All rights reserved.</small>
      </div>
    </footer>
  );
}
