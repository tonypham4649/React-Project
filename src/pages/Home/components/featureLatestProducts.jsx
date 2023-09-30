import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDataFetcher from "../../../api/DataFetcher";

export default function FeatureLatestProducts() {
  const { data, loading, error } = useDataFetcher();
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState();

  function handleSetFilter(filterValue) {
    setActiveFilter(filterValue);

    if (filterValue === "all") {
      setProducts(data);
    } else {
      setProducts(() => data.filter((item) => item.category === filterValue));
    }
  }

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

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
            className={activeFilter === "all" ? "active" : ""}
            data-bg-src="./src/assets/img/shape/shape-filter.png"
            onClick={() => handleSetFilter("all")}
          >
            <i className="flaticon-salad"></i>Show All
          </button>
          <button
            className={activeFilter === "juice" ? "active" : ""}
            data-bg-src="./src/assets/img/shape/shape-filter.png"
            onClick={() => handleSetFilter("juice")}
          >
            <i className="flaticon-salvsadbox-1"></i>Juice
          </button>
          <button
            className={activeFilter === "fresh" ? "active" : ""}
            data-bg-src="./src/assets/img/shape/shape-filter.png"
            onClick={() => handleSetFilter("fresh")}
          >
            <i className="flaticon-vegetables"></i>Fresh Food
          </button>
          <button
            className={activeFilter === "smoothie" ? "active" : ""}
            data-bg-src="./src/assets/img/shape/shape-filter.png"
            onClick={() => handleSetFilter("smoothie")}
          >
            <i className="flaticon-healthy-food"></i>Smoothie
          </button>
        </div>

        <div className="row filter-active">
          {products.slice(0, 6).map((item) => {
            return (
              <div
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item "
                key={item.id}
                id={item.id}
              >
                <div className="vs-product-box2 thumb_swap  d-lg-flex has-border">
                  {item.sale > 0 ? (
                    <div className="product-tag1">sale</div>
                  ) : null}
                  <div className="product-img">
                    <Link to="/shop">
                      <img
                        src={item.image}
                        alt="Product Image"
                        className="w-100"
                      />
                    </Link>
                  </div>
                  <div className="product-content d-lg-flex align-items-center">
                    <div>
                      <h4 className="product-title h5 mb-1">
                        <Link to="/shop" style={{ textDecoration: "none" }}>
                          {item.name}
                        </Link>
                      </h4>
                      <span className="price font-theme">
                        <strong>${item.price}</strong>
                      </span>
                      <p className="m-0 rating fs-xs text-theme lh-base">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </p>
                      {item.sale > 0 ? (
                        <p
                          className="bg-danger text-white"
                          style={{ marginTop: ".5rem" }}
                        >
                          {item.sale * 100}% off
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
