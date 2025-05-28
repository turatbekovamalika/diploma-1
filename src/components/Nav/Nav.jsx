import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  let menuBtn = document.querySelectorAll(".Nav a");
  let menu = document.querySelector(".Drawer");
  menuBtn.forEach((el) => {
    el.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
  return (
    <div className="Nav">
      <div className="Container">
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
    </div>
  );
}
