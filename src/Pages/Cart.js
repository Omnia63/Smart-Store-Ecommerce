import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQuantity, deleteFromCart, increaseQuantity } from "../Redux-toolkit/Slices/cart-slice";
import "../Styles/cart.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart () {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)

    useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

    return (
        <div className="cart-container">
         <h1>Your Cart</h1>
         <div className="cart-actions">
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
         </div>

        <table className="cart-table">
      <thead>
        <tr>
          <th className="product-column">Product</th>
          <th className="price-column">Price</th>
          <th className="quantity-column">Quantity</th>
          <th className="subtotal-column">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
        <tr key={product.id}>
          <td className="product-cell">
           <img className="product-image" src={product.thumbnail} alt={product.title} loading="lazy"/>
           <span className="product-title">{product.title}</span>
          </td>
          <td className="price">${product.price.toFixed(2)}</td>
          <td>    
            <div className="quantity-wrapper">
      <button className="control-btn" onClick={() => dispatch(decreaseQuantity(product.id))}>−</button>
      <span className="quantity-value">{product.quantity}</span>
      <button className="control-btn" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
      <button className="delete-btn" onClick={() => {dispatch(deleteFromCart(product))}}>🗑️</button>
    </div>
    </td>
    <td className="subtotal">${(product.price * product.quantity).toFixed(2)}</td>
        </tr>
        ))}

      </tbody>
    </table>
    <div className="cart-footer">
  <div>
    <h4 className="cart-total">
      Total: <span>${totalPrice.toFixed(2)}</span>
    </h4>
  </div>

  {cart.length > 0 ? (
   <Link to="/checkout" className="checkout-cart-btn">Checkout</Link>) : (
   <button className="checkout-cart-btn" disabled>Checkout</button> 
   )}

</div>
        </div>
        
    )
}

export default Cart;