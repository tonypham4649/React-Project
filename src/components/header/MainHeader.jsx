import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";

import Navbar from "../nav-bars/Navbar";

export default function MainHeader() {
  const { cartQuantity, openCart } = useShoppingCart();

  const data = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
    } else {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, data]);

  return (
    <header className="header-wrapper header-layout3 header3-margin ">
      <div className="container py-30">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="header-logo">
              <Link to="/">
                <img src="/img/logo.svg" alt="Foodano" />
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
              <form className="header-search" style={{ overflow: "visible" }}>
                <input
                  type="text"
                  placeholder="Search your product"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <ul
                  id="searchSuggestion"
                  style={{
                    listStyleType: "none",
                    padding: "0",
                    lineHeight: "2rem",
                  }}
                >
                  {searchResults.map((item) => (
                    <li
                      key={item._id}
                      style={{
                        backgroundColor: "#ffffff",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Link to="/shop">
                        <img
                          src={item.image}
                          style={{
                            width: "5rem",
                            marginRight: "2rem",
                          }}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button type="submit" className="vs-btn">
                  <Link to="/shop">Search</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
