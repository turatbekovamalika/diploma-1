import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";
import { NavLink } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);
  return (
    <div className="Auth">
      {user ? (
        <span>
          <div className="img-container">
            <img onClick={logOut} src={user?.photoURL} alt="Placeholder" />
          </div>
        </span>
      ) : (
        <span className="LogOut-img">
          <div className="img-container">
            <NavLink to="/orders">
              <img
                onClick={logIn}
                src={
                  user?.photoURL ||
                  "https://i.pinimg.com/474x/00/54/72/0054722b7d5a096223ebaf2620ee2440.jpg"
                }
                alt="Placeholder"
              />
            </NavLink>
          </div>
        </span>
      )}
    </div>
  );
}
