import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux-toolkit/Slices/cart-slice";
import { useEffect } from "react";
import "../Styles/wishlist.css";
import { toggleWishlist } from "../Redux-toolkit/Slices/wishlist-slice";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist || []);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <div className="empty-icon">♡</div>

          <h2>Your wishlist is empty</h2>

          <p>
            You haven't added any products to your wishlist yet.
          </p>

          <Link className="continue-shopping-btn" to="/products">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <table className="wishlist-table">
          <thead>
            <tr>
              <th className="product-column">Product</th>
              <th className="price-column">Price</th>
              <th className="stock-column">Stock Status</th>
              <th className="actions-column">Actions</th>
            </tr>
          </thead>

          <tbody>
            {wishlist.map((product) => (
              <tr key={product.id}>
                <td className="item-info">
                  <img
                    className="item-img"
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                  />
                  <span className="item-title">{product.title}</span>
                </td>

                <td className="item-price">
                  ${product.price.toFixed(2)}
                </td>

                <td className="stock">
                  {product.availabilityStatus}
                </td>

                <td className="action-btn">
                  <button
                    className="addtocart-btn"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => dispatch(toggleWishlist(product))}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Wishlist;
