import { linkedin, mail } from "../../../icons";

const Footer = () => (
  <footer>
    <div className="container">
      <p>Contact me</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/lisa-shoshkina/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </li>
        <li>
          <a href="mailto:liza.shoshkina@gmail.com" aria-label="Send an email">
            {mail}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
