import { useDispatch, useSelector } from "react-redux";
import "../Styles/checkout-page.css";
import { resetCheckout, setCheckoutField } from "../Redux-toolkit/Slices/checkout-slice";
import { useState } from "react";
import { addOrder } from "../Redux-toolkit/Slices/orders-slice";
import { clearCart } from "../Redux-toolkit/Slices/cart-slice";

function Checkout() {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);
  const cartItems = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      setCheckoutField({
        field: name,
        value,
      })
    );
  };

const handleSubmit = (e) => {
  e.preventDefault();
const orderItems = [...cartItems];

  const order = {
    id: Date.now(),
    customer: checkout,
    items: orderItems,
    status: "Order Placed",
    createdAt: new Date().toISOString(),
  };
  dispatch(addOrder(order));
  dispatch(clearCart());
  dispatch(resetCheckout());
  setOrderPlaced(true);
};


  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="checkout-form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={checkout.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={checkout.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={checkout.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={checkout.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Enter your full address"
                value={checkout.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="notes">Order Notes</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Any special instructions? (optional)"
                value={checkout.notes}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          <button type="submit">Place Order</button>
        </form>
        {orderPlaced && (
  <div className="order-success">
    <h2>🎉 Order Placed Successfully!</h2>
    <p>Thank you for your order. We'll process it shortly.</p>
  </div>
)}

      </div>
    </div>
  );
}

export default Checkout;
