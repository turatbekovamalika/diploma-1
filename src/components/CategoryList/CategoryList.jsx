import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  if (!categories || categories.length === 0) {
    return <p>Категории не загружены или отсутствуют.</p>;
  }

  // сортируем по возрастанию веса (или по убыванию — выбери что нужно)
  const sortedCategories = [...categories].sort((a, b) => a.weight - b.weight);

  const output = sortedCategories.map((category) => (
    <li key={category.id}>
      <NavLink className="Category" to={"/category/" + category.path}>
        {category.picture && <img src={category.picture} alt={category.name} />}
        {category.name}
      </NavLink>
      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <p>CATEGORY</p>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
