import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link, NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import CategoryList from "../CategoryList/CategoryList";

export default function ProductList({ category }) {
  const { categories } = useContext(AppContext);

  const outputt = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));
  const { products } = useContext(AppContext);
  products.sort((a, b) => {
    const weightA = a.weight ?? 0;
    const weightB = b.weight ?? 0;
    return weightB - weightA;
  });

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <Link className="About-product" to={"/product/" + product.path}>
          <div className="Name-img">
            <div className="Product-name"> {product.name}</div>
            <img src={product.picture} alt={product.name} />
          </div>

          <div className="Color-price">
            {" "}
            <p>{product.color}</p>
            <span>{product.price} $</span>
          </div>

          <AddToCart product={product} />
          <DeleteProduct product={product} />
        </Link>
      </div>
    ));

  return (
    <div className="ProductList">
      <ul className="Categoryyy">{outputt} </ul>

      {output}
      <AddProduct category={category} />
    </div>
  );
}
