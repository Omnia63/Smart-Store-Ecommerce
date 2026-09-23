import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, increaseQuantity, decreaseQuantity } from "../Redux-toolkit/Slices/cart-slice";
import { toggleWishlist } from "../Redux-toolkit/Slices/wishlist-slice";
import "../Styles/product-card.css";

function ProductCard({ product, showActions = true }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const isWishlisted = wishlist.find((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="product-media">
        <Link to={`/products/${product.id}`}>
        <div className="image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="main-image"
            loading="lazy"
          /> 
        </div>
          <h2>{product.title}</h2>
        </Link>
      </div>

      <div className="product-info">
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category.toUpperCase()}</p>
{showActions && (
  <div className="actions-btn">
    {cartItem ? (
      <div className="quantity-controls">
        <button
          className="quantity-btn"
          onClick={() =>
            dispatch(decreaseQuantity(product.id))
          }
        >
          -
        </button>

        <span>{cartItem.quantity}</span>

        <button
          className="quantity-btn"
          onClick={() =>
            dispatch(increaseQuantity(product.id))
          }
        >
          +
        </button>
      </div>
    ) : (
      <button
        className="add-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
    )}

    <button
      className="add-btn wish-btn"
      onClick={() => dispatch(toggleWishlist(product))}
      aria-label={
        isWishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
    >
      <i
        className={`fa-heart ${
          isWishlisted
            ? "fa-solid active-heart"
            : "fa-regular"
        }`}
      />
    </button>
  </div>
)}
      </div>
    </div>
  );
}

export default ProductCard;