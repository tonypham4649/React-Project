export default function HeaderTop() {
  return (
    <div className="header-top-wrapper bg-black pb-2 pt-10 z-index-step1 d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-4 col-lg-4 d-none d-sm-block">
            <div className="head-top-links text-body2">
              <span className="icon-btn">
                <i className="fal fa-pennant"></i>
              </span>
              <ul>
                <li>
                  {/* <!-- Dropdown --> */}
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink1"
                  >
                    <li>
                      <a href="#">German</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">Italian</a>
                    </li>
                    <li>
                      <a href="#">Latvian</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">Greek</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {/* <!-- Dropdown --> */}
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Currency
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink2"
                  >
                    <li>
                      <a href="#">Canadian Dollar</a>
                    </li>
                    <li>
                      <a href="#">Swiss Franc</a>
                    </li>
                    <li>
                      <a href="#">Chinese Yuan</a>
                    </li>
                    <li>
                      <a href="#">Australian Dollar</a>
                    </li>
                    <li>
                      <a href="#">Swedish Krona</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-5 col-lg-4 text-center">
            <p className="text-body2 mb-0 fs-xs fw-semibold font-theme d-none d-md-inline-block">
              <span className="text-theme">Free exress</span> international
              delevery + Easy returens
            </p>
          </div>
          <div className="col-sm-5 col-md-3 col-lg-4 text-center text-sm-end">
            <div className="social-header fs-xs">
              <span className="text-body2 fs-xs fw-semibold font-theme me-2">
                Social Network
              </span>
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
  );
}
