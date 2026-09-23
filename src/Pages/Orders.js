import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Styles/orders-page.css";

function Orders() {
  const orders = useSelector((state) => state.orders.orders);
  const navigate = useNavigate();

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No orders yet</h2>
            <p>You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div>
                    <h2>
                      Order #{String(order.id).slice(-6)}
                    </h2>

                    <p>
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/orders/${order.id}`)
                    }
                  >
                    Show Details
                  </button>
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
