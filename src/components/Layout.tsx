import React, { FC } from "react";
import "normalize.css";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const Layout: FC = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
