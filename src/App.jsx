import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contacts" element={<h2>Contacts</h2>} />
          <Route path="/delivery" element={<h2>Delivery</h2>} />
        </Routes>
      </Layout>
    </div>
  );
}
