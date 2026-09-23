import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../Styles/order-details-page.css";

function OrderDetails() {
  const { id } = useParams();

  const order = useSelector((state) =>
    state.orders.orders.find(
      (order) => String(order.id) === id
    )
  );

  if (!order) {
    return (
      <div className="order-details-page">
        <div className="order-details-container">
          <h1>Order Not Found</h1>
        </div>
      </div>
    );
  }

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="order-details-page">
      <div className="order-details-container">

        <div className="order-details-header">
          <div>
            <h1>
              Order #{String(order.id).slice(-6)}
            </h1>

            <p>
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <span className="order-details-status">
            {order.status}
          </span>
        </div>

        <div className="order-details-card">
          <h2>Order Items</h2>

          {order.items.map((item) => (
            <div
              className="order-details-item"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="order-details-item-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <div className="order-details-total">
            <span>Total</span>

            <strong>
              ${total.toFixed(2)}
            </strong>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderDetails;
