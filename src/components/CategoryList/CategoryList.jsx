import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./CategoryList.css";
import { AppContext } from "../../App";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  categories.sort((a, b) => b.weight - a.weight);
  const output = categories
    .sort((a, b) => a.weight - b.weight)
    .map((category) => (
      <li key={category.id}>
        <NavLink className="Category" to={"/category/" + category.path}>
          <img src={category.picture} alt={category.name} />

          {category.name}
        </NavLink>
      </li>
    ));

  return (
    <div className="CategoryList">
      <p>CATEGORY</p>
      <ul>{output}</ul>
    </div>
  );
}
