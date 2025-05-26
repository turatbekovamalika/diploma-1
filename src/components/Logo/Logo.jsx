import "./Logo.css";
import logoo from "../../assets/logoo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logoo} alt="Website logo" />
      </NavLink>
    </div>
  );
}
