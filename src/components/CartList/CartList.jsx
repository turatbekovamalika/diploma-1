import "./CartList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import musorkaa from "../../assets/musorkaa.png";

export default function CartList() {
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
  const cartItems = products.filter((product) =>
    productIds.includes(product.id)
  );

  const output = cartItems.map((product) => (
    <div className="Container" key={product.id}>
      <div className="CartItem">
        <p className="Picture">
          <img src={product.picture} alt={product.name} />
        </p>
        <Link className="ProductSlug" to={`/products/${product.slug}`}>
          {product.name}
        </Link>
        <input
          type="number"
          min={1}
          onChange={(event) => {
            const qty = Math.max(1, +event.target.value);
            onQtyChange(product, qty);
          }}
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

  const total = cartItems.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0
  );

  if (productIds.length === 0) {
    return <p className="EmptyCart">Корзина пуста</p>;
  }

  return (
    <div className="CartList">
      {output}
      <div className="CartTotal">
        <strong>Итого:</strong> {total} $
      </div>
    </div>
  );
}
