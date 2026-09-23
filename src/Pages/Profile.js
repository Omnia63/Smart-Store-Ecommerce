import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux-toolkit/Slices/auth-slice";
import "../Styles/profile-page.css";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading } = useSelector((state) => state.auth);
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const handleLogout = async () => {
    const result = await dispatch(logoutUser());

    if (logoutUser.fulfilled.match(result)) {
      navigate("/register");
    }
  };

  return (
    <main className="profile-page">
      <div className="profile-container">

        <h1>Welcome back, {user?.user_metadata?.name}! 👋</h1>

        <p className="profile-email">
          {user?.email}
        </p>

        <div className="profile-options">

          <Link to="/orders" className="profile-option">
            <span>📦</span>
            <div>
              <h2>My Orders</h2>
              <p>View your orders</p>
            </div>
          </Link>

          <Link to="/wishlist" className="profile-option">
            <span>❤️</span>
            <div>
              <h2>My Wishlist</h2>
              <p>{wishlist.length} saved items</p>
            </div>
          </Link>

          <Link to="/cart" className="profile-option">
            <span>🛒</span>
            <div>
              <h2>My Cart</h2>
              <p>{cart.length} items in your cart</p>
            </div>
          </Link>

        </div>

        <div className="account-info">
          <h2>Account Information</h2>

          <p>
            <strong>Name:</strong>{" "}
            {user?.user_metadata?.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email}
          </p>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>

      </div>
    </main>
  );
}

export default Profile;
