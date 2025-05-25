import { NavLink } from "react-router-dom";

import "./CategoryList.css";
import { useContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

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
