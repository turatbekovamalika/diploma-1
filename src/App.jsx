import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import Cart from "./pages/Cart";

import { categoryCollection, productCollection } from "./firebase"; // ✅ правильный импорт

export const AppContext = createContext({
  categories: [],
  products: [],
  cart: {},
  setCart: () => {},
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    //восстанавливает содержимое корзинки из памяти брауизера
    return JSON.parse(localStorage.getItem("cart"));
  });

  //выполнить эту функцию только когда содержимое корзинки меняетсяя
  useEffect(() => {
    //сохранить содержимое корзинки в памяти блаузера
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // получить категории
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = [];
      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;
        newCategories.push(category);
      });
      setCategories(newCategories);
    });

    // ❗ исправлено здесь — правильное имя переменной productCollection
    getDocs(productCollection).then((snapshot) => {
      const newProducts = [];
      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        newProducts.push(product);
      });
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
