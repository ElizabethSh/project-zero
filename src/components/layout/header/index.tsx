import { useState } from "react";

import "./header.scss";

const PAGES = ["home", "about", "experience", "projects"] as const;

type RefKey = (typeof PAGES)[number];

type HeaderProps = {
  refs: Record<RefKey, React.RefObject<HTMLDivElement | null>>;
};

const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [activeLink, setActiveLink] = useState<string>(PAGES[0]);

  const onLinkClick = (page: RefKey) => {
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
                  aria-current={activeLink === page ? "page" : undefined}
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
