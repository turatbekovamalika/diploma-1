import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/delivery">Delivery</NavLink>
    </div>
  );
}
