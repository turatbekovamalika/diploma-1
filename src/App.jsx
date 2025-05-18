import { NavLink, Route, Router, Routes } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is my diploma</p>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contacts" element={<h2>Contacts</h2>} />
        </Routes>
      </main>
    </div>
  );
}
