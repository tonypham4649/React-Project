export default function ShopItem({ id, name, price, imgUrl }) {
  return (
    <div className="col-sm-6 col-xl-4" id={id}>
      <div className="vs-product-box1 thumb_swap">
        <div className="product-img">
          <a href="shop-details.html">
            <img
              src={imgUrl}
              alt="Product Image"
              className="w-100"
              style={{ width: "270px", height: "245px" }}
            />
          </a>
          <a href="shop-details.html">
            <img
              src={imgUrl}
              alt="Product Image"
              className="w-100 img_swap"
              style={{ width: "270px", height: "245px" }}
            />
          </a>
        </div>
        <div className="product-content">
          <div className="actions-btn">
            <a href="">
              <i className="fal fa-cart-plus"></i>
            </a>
            <a href="assets/img/shop/product-1-3.png" className="popup-image">
              <i className="far fa-search"></i>
            </a>
            <a href="wishlist.html">
              <i className="fal fa-heart"></i>
            </a>
          </div>
          <h4 className="product-title h5 mb-0">
            <a href="">{name}</a>
          </h4>
          <span className="price font-theme">
            <strong>${price}</strong>
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
  );
}
