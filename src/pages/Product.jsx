import { useContext } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Productt">
      <h1>{product.name}</h1>
      <div className="Picture-des">
        <img
          width={250}
          height={250}
          src={product.picture}
          alt={product.name}
        />
        <div className="Des-price-button">
          <p>{product.description}</p>

          <div className="Price-button">
            <strong>
              {" "}
              <span>{product.price} $</span>
            </strong>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
