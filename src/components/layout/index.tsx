import Footer from "./footer";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ header, children }) => (
  <div className="layout">
    {header}
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;
