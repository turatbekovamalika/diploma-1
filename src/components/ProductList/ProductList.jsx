import { useContext } from "react";

import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />

        <div className="Tried">
          {" "}
          <p>{product.color}</p>
          <span>{product.price} $</span>
        </div>
        <AddToCart product={product} />
        <Link className="About-product" to={"/product/" + product.path}>
          {" "}
          {product.name}
        </Link>
      </div>
    ));
  return <div className="ProductList">{output}</div>;
}
