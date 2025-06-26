import Footer from "./footer";
import Header from "./header";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="layout">
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;
