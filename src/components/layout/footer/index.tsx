import { github, linkedin, mail } from "../../../icons";

import "./footer.scss";

type FooterProps = {
  forwardedRef: React.Ref<HTMLDivElement>;
};

const Footer: React.FC<FooterProps> = ({ forwardedRef }) => (
  <footer className="footer" id="contact" ref={forwardedRef}>
    <div className="container">
      <h6 className="footer-title">Contact me</h6>
      <ul className="social-links">
        <li>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/lisa-shoshkina/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </li>
        <li>
          <a
            className="social-link"
            href="https://github.com/ElizabethSh"
            aria-label="Github profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </li>
        <li>
          <a
            className="social-link"
            href="mailto:liza.shoshkina@gmail.com"
            aria-label="Send an email"
          >
            {mail}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
