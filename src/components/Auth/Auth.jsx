import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span className="Sign-in">
      {" "}
      <button onClick={logIn}>sign out</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span className="Back">
        <Link className="Align" to="/orders">
          {user.displayName}
        </Link>

        <button onClick={logOut}>back</button>
      </span>
    );
  }
  return <div className="Auth">{output}</div>;
}
