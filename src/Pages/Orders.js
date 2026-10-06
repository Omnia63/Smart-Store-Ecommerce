import { useSelector } from "react-redux";
import "../Styles/orders-page.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Orders() {
  const orders = useSelector((state) => state.orders);
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <div className="empty-orders-icon">📦</div>
            <h2>No orders yet</h2>
            <p> You haven't placed any orders yet. </p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div>
                    <h2>Order #{String(order.id).slice(-6)}</h2>

                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <Link to={`/orders/${order.id}`}> Show Details </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
