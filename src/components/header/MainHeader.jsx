import { useShoppingCart } from "../../context/ShoppingCartContext";
import Navbar from "../nav-bars/Navbar";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <header className="header-wrapper header-layout3 header3-margin ">
      <div className="container py-30">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="header-logo">
              <Link to="/">
                <img src="/src/assets/img/logo.svg" alt="Foodano" />
              </Link>
            </div>
          </div>
          <div className="col-6 text-end">
            <button
              type="button"
              className="vs-menu-toggle d-inline-block d-lg-none"
            >
              <i className="far fa-bars"></i>
            </button>
            <div className="head-top-links text-body2 d-none d-lg-block">
              <a href="wishlist.html" className="icon-btn has-badge bg3 me-3">
                <i className="fal fa-heart"></i>
                <span className="badge">0</span>
              </a>

              <div
                className="icon-btn has-badge bg2 me-4 sideMenuToggler"
                onClick={openCart}
              >
                <i className="fal fa-shopping-cart"></i>
                <span className="badge">{cartQuantity}</span>
              </div>

              <span className="icon-btn bg4">
                <i className="fal fa-user"></i>
              </span>

              <ul>
                <li>
                  <a href="login-register.html">Login</a>
                </li>
                <li>
                  <a href="login-register.html">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-none d-lg-block">
        <div className="header3-inner position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-7">
              <Navbar />
            </div>
            <div className="col-lg-6 col-xl-5">
              <form action="#" className="header-search">
                <input
                  type="text"
                  placeholder="Search your product"
                  className="form-control"
                />
                <button type="submit" className="vs-btn">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
