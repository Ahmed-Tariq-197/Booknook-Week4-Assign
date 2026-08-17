import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../redux/slices/cartSlice.js";

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="page-section cart-page">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Nothing in the cart yet - go add a book or two.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-row">
                <span className="cart-title">{item.title}</span>

                <div className="cart-qty-controls">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="cart-qty">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>

                <span className="cart-line-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">Total: ${total.toFixed(2)}</div>

          <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default CartPage;
