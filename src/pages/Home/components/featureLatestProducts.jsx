import Items from "/src/data/dummydata.json";
import { useState } from "react";

export default function FeatureLatestProducts() {
  const [filterValue, setFilterValue] = useState("all");
  const [products, setProducts] = useState(Items);

  return (
    <section className="vs-shop-wrapper position-relative space-md-bottom">
      <div className="container">
        <div
          className="section-title text-center  wow fadeIn"
          data-wow-delay="0.3s"
        >
          <h2 className="sec-title1">Feature Products</h2>
          <h3 className="sec-title2">Latest Arrivals</h3>
          <img src="./src/assets/img/icons/sec-icon-1.png" alt="Section Icon" />
        </div>
        <div className="filter-menu-style1 filter-menu-active text-center mb-65">
          <button
            className="active"
            data-filter="*"
            data-bg-src="./src/assets/img/shape/shape-filter.png"
          >
            <i className="flaticon-salad"></i>Show All
          </button>
          <button
            data-filter=".meat"
            data-bg-src="./src/assets/img/shape/shape-filter.png"
          >
            <i className="flaticon-salvsadbox-1"></i>Meat
          </button>
          <button
            data-filter=".freshfood"
            data-bg-src="./src/assets/img/shape/shape-filter.png"
          >
            <i className="flaticon-vegetables"></i>Fresh Food
          </button>
          <button
            data-filter=".season"
            data-bg-src="./src/assets/img/shape/shape-filter.png"
          >
            <i className="flaticon-healthy-food"></i>Season
          </button>
        </div>

        <div className="row filter-active">
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item freshfood">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-tag1">sale</div>
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-1.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-6.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">French Dip</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$40.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item meat">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-2.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-5.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">Haiku Roll</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$22.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item freshfood">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-3.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-4.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">Plum Silho</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$40.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item meat season">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-4.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-3.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">Avocado Roll</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$55.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item freshfood season">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-5.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-2.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">Asian Noodles</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$49.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item meat season">
            <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
              <div className="product-tag1">sale</div>
              <div className="product-img">
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-6.png"
                    alt="Product Image"
                    className="w-100"
                  />
                </a>
                <a href="shop-details.html">
                  <img
                    src="./src/assets/img/shop/product-2-1.png"
                    alt="Product Image"
                    className="w-100 img_swap"
                  />
                </a>
              </div>
              <div className="product-content d-lg-flex align-items-center">
                <div>
                  <h4 className="product-title h5 mb-1">
                    <a href="shop-details.html">Carne Asada</a>
                  </h4>
                  <span className="price font-theme">
                    <strong>$99.00</strong>
                  </span>
                  <p className="m-0 rating fs-xs text-theme lh-base">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
