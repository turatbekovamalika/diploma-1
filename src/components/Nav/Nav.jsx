import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </div>
  );
}
