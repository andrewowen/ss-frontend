import React, { FC } from "react";
import "normalize.css";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles";

const Layout: FC = ({ children }) => (
  <div>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
