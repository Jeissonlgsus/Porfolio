import React, { ReactNode } from "react";
import Footer from "../footer/index";
import Header from "../header/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
