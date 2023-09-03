import { Link } from "react-router-dom";
import Navbar from "../nav-bars/Navbar";

export default function Header() {
  return (
    <header className="header-wrapper header-layout4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-xxl-2 text-center bg-ovelay1 d-flex align-items-center justify-content-between justify-content-lg-center py-3 py-lg-0">
            <div className="header4-logo">
              <Link to="/">
                <img src="/src/assets/img/logo-white.svg" alt="Foodano" />
              </Link>
            </div>
            <button
              type="button"
              className="vs-menu-toggle d-inline-block d-lg-none"
            >
              <i className="far fa-bars"></i>
            </button>
          </div>
          <div className="col-lg-9  col-xxl-10 bg-ovelay2">
            <div className="row align-items-center">
              <div className="col-xl-7 col-xxl-6 text-center ">
                <Navbar />
              </div>
              <div className="col-lg-4 col-xl-3 col-xxl-3 d-none d-xl-flex align-items-center justify-content-end">
                <a href="#" className="cart-btn sideMenuToggler">
                  <i className="fal fa-shopping-cart"></i>
                  <span className="badge">0</span>
                </a>
                <div className="ms-4 head-top-links text-body2 fw-semibold d-none d-lg-inline-block">
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
              <div className="col-xl-2 col-xxl-2 text-end d-none d-xl-block">
                <div className="social-header fs-md">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fal fa-basketball-ball"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
