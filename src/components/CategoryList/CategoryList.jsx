import { NavLink } from "react-router-dom";

import "./CategoryList.css";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  //выполнить эту функциу один раз
    useEffect(() => {
//получить категроии из списка категорий
        getDocs(categoryCollection)
            .then(snapshot => {
                //категории будут храниться в snapshot.docs
                //слздать массив для категорий
 const newCategories = [];
 //заполнить массив данными из списка категорий
                snapshot.docs.forEach(doc => {// doc это категория 
                    const category = doc.data();
                    category.id = doc.id;

                    newCategories.push(category);
                });
                  //задать новый массив как состояние компонента
                setCategories(newCategories);
            })
  

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul> {output}</ul>
    </div>
  );
}
