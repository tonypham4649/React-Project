import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function ShopItemEle({ id, name, price, imgUrl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

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
          </div>

          <h4 className="product-title h5 mb-0">{name}</h4>
          <span className="price font-theme">
            <strong>${price}</strong>
          </span>
          <div>
            {quantity === 0 ? (
              <button onClick={() => increaseCartQuantity(id)}>
                Add to card
              </button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <button
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      minWidth: "2rem",
                    }}
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <button
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      minWidth: "2rem",
                    }}
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
