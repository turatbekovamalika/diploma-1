import "./Logo.css";
import logo from "../../assets/logoo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="Website logo" />
      </NavLink>
    </div>
  );
}
