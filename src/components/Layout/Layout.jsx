import { useState } from "react";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import Drawer from "../Drawer/Drawer";

import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className="Layout">
      <header>
        <div className="Container">
          <Logo />
          <div className="menu_head">
            <Nav />
          </div>
          <NavToggle callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <div className="Logo-cart">
            <Auth />
            <CartLink />
          </div>
        </div>
      </header>
      <main>{props.children}</main>
      <footer>
        <div className="Container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
