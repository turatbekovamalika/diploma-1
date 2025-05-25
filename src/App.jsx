import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import { createContext, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, produtcCollection } from "./firebase";

export const AppContext = createContext({
  categories: [],
  products: [],
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  //выполнить эту функциу один раз
  useEffect(() => {
    //получить категроии из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      //категории будут храниться в snapshot.docs
      //слздать массив для категорий
      const newCategories = [];
      //заполнить массив данными из списка категорий
      snapshot.docs.forEach((doc) => {
        // doc это категория
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      //задать новый массив как состояние компонента
      setCategories(newCategories);
    });

    //получить продукты из списка родукто
    getDocs(produtcCollection).then((snapshot) => {
      //категории будут храниться в snapshot.docs
      //создать массив для продуктов
      const newProducts = [];
      //заполнить массив данными из списка продуктов
      snapshot.docs.forEach((doc) => {
        // doc это категория
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(product);
      });
      //задать новый массив как состояние компонента
      setProducts(newProducts);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
