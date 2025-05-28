import "./CartList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";
import musorkaa from "../../assets/musorkaa.png";

export default function CartList() {
  // получить продукты и содердижимое корзины
  const { products, cart, setCart } = useContext(AppContext);

  function onQtyChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }
  function onRemoveClick(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }
  const productIds = Object.keys(cart);
  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="Container">
        <div className="CartItem">
          <p className="Picture">
            {" "}
            <img src={product.picture} alt={product.name} />
          </p>
          <Link className="ProductSlug" to={`/products/` + product.slug}>
            {" "}
            {product.name}
          </Link>
          <input
            type="number"
            min={1}
            onChange={(event) => onQtyChange(product, +event.target.value)}
            value={cart[product.id]}
          />
          <span className="Product_price">
            {product.price * cart[product.id]} $
          </span>
          <img
            className="Delete_icon"
            onClick={() => onRemoveClick(product)}
            src={musorkaa}
            alt="remove"
          />
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
