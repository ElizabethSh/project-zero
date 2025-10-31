import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
  refs: Record<string, React.RefObject<HTMLDivElement | null>>;
};

const Layout: React.FC<LayoutProps> = ({ children, refs }) => (
  <div className="layout">
    <Header refs={refs} />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer forwardedRef={refs.contact} />
  </div>
);

export default Layout;
