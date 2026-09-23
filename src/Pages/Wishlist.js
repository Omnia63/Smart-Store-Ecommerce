import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux-toolkit/Slices/cart-slice";
import { useEffect } from "react";
import "../Styles/wishlist.css";
import { toggleWishlist } from "../Redux-toolkit/Slices/wishlist-slice";

function Wishlist () {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

        useEffect(() => {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);  

return(
  <>

  {wishlist.length === 0 ? (
  <p>Your wishlist is empty.</p>
) : (

  <div className="wishlist-container">
  <h1>My Wishlist</h1>
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
            <img className="item-img" src={product.thumbnail} alt={product.title} loading="lazy"/>
            <span className="item-title">{product.title}</span>
          </td>
          <td className="item-price">${product.price.toFixed(2)}</td>
          <td className="stock">{product.availabilityStatus}</td>
          <td className="action-btn">
            <button className="addtocart-btn" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            <button className="delete-btn" onClick={() => {dispatch(toggleWishlist(product))}}>🗑️</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> 
)}
  </> 
)
}
export default Wishlist;