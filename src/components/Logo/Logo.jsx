import "./Logo.css";
import lll from "../../assets/lll.png";
import logo from "../../assets/logoo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={lll} alt="Website logo" />
      </NavLink>
    </div>
  );
}
