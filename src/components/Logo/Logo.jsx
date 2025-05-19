import "./Logo.css";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="Website logo" />
    </div>
  );
}
