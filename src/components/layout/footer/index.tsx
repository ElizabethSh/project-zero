import { linkedin, mail } from "../../../icons";

const Footer = () => (
  <footer>
    <div className="container">
      <p>Contact me</p>
      <ul>
        <li>
          <a>{linkedin}</a>
        </li>
        <li>
          <a>{mail}</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
