import { useState } from "react";

import "./header.scss";

const PAGES = ["home", "about", "experience", "projects"] as const;

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>(PAGES[0]);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav-list">
            {PAGES.map((page) => (
              <li key={page}>
                <a
                  className={`page-link ${activeLink === page ? "active" : ""}`}
                  href={`#${page}`}
                  onClick={() => setActiveLink(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
