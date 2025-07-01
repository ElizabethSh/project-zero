import { useState } from "react";

import "./header.scss";

const PAGES = ["home", "about", "experience", "projects"] as const;

type HeaderProps = {
  refs: Record<string, React.RefObject<HTMLDivElement | null>>;
};

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [activeLink, setActiveLink] = useState<string>(PAGES[0]);

  const onLinkClick = (page: string) => {
    setActiveLink(page);
    if (refs[page]?.current) {
      refs[page].current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(page);
                  }}
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
