import "./header.scss";

const PAGES = ["home", "about", "experience", "projects"] as const;

const Header = () => (
  <header className="header">
    <div className="container">
      {/* TODO: add logo? */}
      <nav className="nav">
        <ul className="nav-list">
          {PAGES.map((page) => (
            <li key={page}>
              <a className="page-link" href={`#${page}`}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
