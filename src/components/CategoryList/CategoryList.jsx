import { NavLink } from "react-router-dom";

import "./CategoryList.css";

export default function CategoryList() {
  const [categories, setCategories] = usestate([]);
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul></ul>
    </div>
  );
}
