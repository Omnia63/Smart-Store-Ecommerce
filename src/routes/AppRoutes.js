import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";
import ProductDetails from "../Pages/ProductDetails";
import CategoryDetails from "../Pages/CategoryDetails";
import Products from "../Pages/Products";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Checkout from "../Pages/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";
import Orders from "../Pages/Orders";
import OrderDetails from "../Pages/OrderDetails";
function AppRoutes () {
    return (
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} /> 
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:name" element={<CategoryDetails />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
           <Route path="profile" element={<Profile />} />
           <Route path="checkout" element={<Checkout />} />
           <Route path="orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} /> 
          </Route>

        </Routes>
        </>
    )
}
export default AppRoutes;