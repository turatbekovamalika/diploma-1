import { NavLink } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is my diploma</p>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}
