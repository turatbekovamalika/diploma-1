import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contacts" element={<h2>Contacts</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}
