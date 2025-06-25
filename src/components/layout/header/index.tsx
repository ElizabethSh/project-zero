const PAGES = ["home", "about", "expirience", "projects"] as const;

const Header = () => (
  <header>
    {/* TODO: add logo? */}
    <nav>
      <ul>
        {PAGES.map((page) => (
          <li key={page}>
            <a href={`#${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
