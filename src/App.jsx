import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";

import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import {
  categoryCollection,
  productCollection,
  onAuthChange,
} from "./firebase";

export const AppContext = createContext({
  categories: [],
  products: [],
  cart: {},
  user: null,
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCategories(newCategories);
    });
  }, []);

  useEffect(() => {
    getDocs(productCollection).then((snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newProducts);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ categories, products, cart, user, setCart }}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />

            <Route path="/category/:path" element={<Category />} />
            <Route path="/product/:path" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </AppContext.Provider>
  );
}
