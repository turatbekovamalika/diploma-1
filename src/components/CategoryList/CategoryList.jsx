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
        <img src={category.picture} alt={category.name} />
        <NavLink
          to={"/category/" + category.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {category.name}
        </NavLink>
      </li>
    ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}
