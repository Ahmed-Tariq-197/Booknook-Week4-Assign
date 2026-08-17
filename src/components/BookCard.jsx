import { useDispatch } from "react-redux";
import FavoriteButton from "./FavoriteButton.jsx";
import { addToCart } from "../redux/slices/cartSlice.js";

function BookCard({ book, isFavorite, onToggleFavorite }) {
  const { title, author, category, price, rating, inStock, discount } = book;
  const dispatch = useDispatch();

  const finalPrice = discount > 0 ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

  return (
    <div className={inStock ? "book-card" : "book-card book-card--out"}>
      {/* && operator: the discount ribbon only renders when there is a discount */}
      {discount > 0 && <span className="ribbon">-{discount}%</span>}

      {/* favorite star sits on the left of this row so it doesn't clash with the ribbon */}
      <div className="book-card-top">
        <FavoriteButton active={isFavorite} onToggle={onToggleFavorite} />
        <span className="book-category">{category}</span>
      </div>

      <h3 className="book-title">{title}</h3>
      <p className="book-author">by {author}</p>

      <div className="book-rating">★ {rating.toFixed(1)}</div>

      <div className="book-price-row">
        {/* ternary operator: show a struck-through original price only when discounted */}
        {discount > 0 ? (
          <>
            <span className="price-old">${price.toFixed(2)}</span>
            <span className="price-new">${finalPrice}</span>
          </>
        ) : (
          <span className="price-new">${finalPrice}</span>
        )}
      </div>

      {/* ternary operator: stock label and its styling depend on inStock */}
      <span className={inStock ? "stock stock--in" : "stock stock--out"}>
        {inStock ? "In stock" : "Out of stock"}
      </span>

      {/* dispatch straight from the card - no need to lift this state up anywhere */}
      {inStock && (
        <button
          className="btn btn-sm btn-outline-primary add-to-cart-btn"
          onClick={() => dispatch(addToCart({ id: book.id, title, price: Number(finalPrice) }))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default BookCard;
