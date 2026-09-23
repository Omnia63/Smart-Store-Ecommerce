import { Link } from "react-router-dom";
import "../Styles/footer.css";

function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Smart Store</h2>
          <p>A simple ecommerce experience.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SmartStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default AppFooter;
