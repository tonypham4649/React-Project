import ShopItemEle from "../../components/shop/ShopItem";
import { useData } from "../../context/DataContext";

export default function ShopProducts() {
  const data = useData();
  return (
    <section className="vs-shop-wrapper position-relative space-top space-md-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="vs-sort-bar row justify-content-center justify-content-sm-between align-items-center pb-4 mb-1 ">
              <div className="col-auto mb-3 mb-sm-0">
                <div className="nav" role="tablist">
                  <a
                    className="icon-btn style3 active me-2"
                    id="tab-shop-grid"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-grid"
                    role="tab"
                    aria-controls="tab-grid"
                    aria-selected="true"
                  >
                    <i className="fas fa-th"></i>
                  </a>
                  <a
                    className="icon-btn style3  "
                    id="tab-shop-list"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-list"
                    role="tab"
                    aria-controls="tab-grid"
                    aria-selected="false"
                  >
                    <i className="far fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="col d-none d-md-block">
                <div className="border-top"></div>
              </div>
              <div className="col-sm-9 col-md-7 col-lg-8 col-xl-6">
                <div className="row justify-content-center justify-content-sm-between">
                  <div className="col-auto d-flex align-items-center mb-3 mb-sm-0">
                    <label className="text-body2" htmlFor="sortBy">
                      Sort by
                    </label>
                    <select name="sortBy" id="sortBy" className="form-select">
                      <option value="productName">Sorted Product Name</option>
                      <option value="productName">Sorted Product New</option>
                      <option value="productName">
                        Sorted Product Popular
                      </option>
                    </select>
                  </div>
                  <div className="col-auto d-flex align-items-center">
                    <label className="text-body2" htmlFor="showTotal">
                      Show
                    </label>
                    <select
                      name="showTotal"
                      id="showTotal"
                      className="form-select"
                    >
                      <option value="productName">01</option>
                      <option value="productName">02</option>
                      <option value="productName">03</option>
                      <option value="productName">04</option>
                      <option value="productName">05</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="tab-grid"
                role="tabpanel"
                aria-labelledby="tab-shop-grid"
              >
                <div className="row">
                  {data.map((item) => (
                    <ShopItemEle
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      imgUrl={item.image}
                    />
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-list"
                role="tabpanel"
                aria-labelledby="tab-shop-list"
              >
                <div className="row ">
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-1.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-8.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Apple juice</a>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-tag1">sale</div>
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-2.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-7.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Black Beans</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$22 .00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-3.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-6.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Plum Silho</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$83.00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-4.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-5.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Carne Asada</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$78.00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-5.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-4.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Quesadilla</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$48.00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-tag1">sale</div>
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-6.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-3.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Pepperoni</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$45.00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-7.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-2.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>Meatballs</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$52.00</strong>
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
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                      <div className="product-img">
                        <a>
                          <img
                            src="/img/shop/product-2-8.png"
                            alt="Product Image"
                            className="w-100"
                          />
                        </a>
                        <a>
                          <img
                            src="/img/shop/product-2-1.png"
                            alt="Product Image"
                            className="w-100 img_swap"
                          />
                        </a>
                      </div>
                      <div className="product-content d-xl-flex align-items-center">
                        <div>
                          <h4 className="product-title h5 mb-1">
                            <a>kidney beans</a>
                          </h4>
                          <span className="price font-theme">
                            <strong>$23.00</strong>
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
            </div>
            <div className="pagination-layout1 list-style-none mt-0 mt-lg-4 mb-30">
              <ul>
                <li>
                  <a>Prev</a>
                </li>
                <li>
                  <a className="active">1</a>
                </li>
                <li>
                  <a>2</a>
                </li>
                <li>
                  <a>3</a>
                </li>
                <li>
                  <a>Next</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <aside className="sidebar-area">
              <div className="widget widget_search   ">
                <h3 className="widget_title">Product Name</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget widget_categories   ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <input type="checkbox" name="juice" id="juice" />
                    <label htmlFor="juice">Juice</label>
                    <span>(06)</span>
                  </li>
                  <li>
                    <input type="checkbox" name="Fresh" id="Fresh" />
                    <label htmlFor="Fresh">Fresh</label>
                    <span>(06)</span>
                  </li>
                  <li>
                    <input type="checkbox" name="Smoothie" id="Smoothie" />
                    <label htmlFor="Smoothie">Smoothie</label>
                    <span>(06)</span>
                  </li>
                </ul>
              </div>

              <div className="widget widget_tag_cloud   ">
                <h3 className="widget_title">Size</h3>
                <div className="tagcloud">
                  <a>300G</a>
                  <a>450G</a>
                  <a>500G</a>
                  <a>1000G</a>
                  <a>1200G</a>
                </div>
              </div>
              <div className="widget   ">
                <h3 className="widget_title">Best Seller</h3>
                <div className="vs-widget-recent-post">
                  <div className="recent-post d-flex align-items-center">
                    <div className="media-img">
                      <img
                        src="/img/widget/recent-1.jpg"
                        width="100"
                        height="73"
                        alt="Recent Post Image"
                      />
                    </div>
                    <div className="media-body pl-30">
                      <h4 className="recent-post-title h5 mb-0">
                        <a href="">100% organic healthy</a>
                      </h4>
                      <a href="" className="text-theme fs-12">
                        January 04, 2022
                      </a>
                    </div>
                  </div>
                  <div className="recent-post d-flex align-items-center">
                    <div className="media-img">
                      <img
                        src="/img/widget/recent-2.jpg"
                        width="100"
                        height="73"
                        alt="Recent Post Image"
                      />
                    </div>
                    <div className="media-body pl-30">
                      <h4 className="recent-post-title h5 mb-0">
                        <a>Keep Your Fruits fresh</a>
                      </h4>
                      <a className="text-theme fs-12">March 04, 2022</a>
                    </div>
                  </div>
                  <div className="recent-post d-flex align-items-center">
                    <div className="media-img">
                      <img
                        src="/img/widget/recent-3.jpg"
                        width="100"
                        height="73"
                        alt="Recent Post Image"
                      />
                    </div>
                    <div className="media-body pl-30">
                      <h4 className="recent-post-title h5 mb-0">
                        <a>Get natural healthy food</a>
                      </h4>
                      <a className="text-theme fs-12">April 04, 2022</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
