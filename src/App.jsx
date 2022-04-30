import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Address from "./pages/Address";

import { NavLink } from "react-router-dom";
import NotFound from "./pages/404";
import RequiresAuth from "./components/RequiresAuth";
import { useAuthContext } from "./contexts/auth-context";

export default function App() {
  const { isLoggedin, setIsLoggedin } = useAuthContext();

  return (
    <div className="App">
      <nav>
        <NavLink
          end
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/"
        >
          Home
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/category"
        >
          Category
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/cart"
        >
          Cart
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/wishlist"
        >
          WishList
        </NavLink>
        ||
        <NavLink
          activeStyle={{ fontColor: "red", fontWeight: "bold" }}
          style={{ textDecoration: "none" }}
          to="/address"
        >
          Address
        </NavLink>{" "}
        ||
        <button onClick={() => setIsLoggedin((isLoggedin) => !isLoggedin)}>
          {isLoggedin ? "logout" : "login"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}
