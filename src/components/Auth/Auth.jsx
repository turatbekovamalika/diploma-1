import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span className="Sign-in">
      <button onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span className="Back">
        <Link className="Align" to="/orders">
          {user.displayName}
        </Link>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
