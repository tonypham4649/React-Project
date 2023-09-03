export default function Footer() {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      data-bg-src="./src/assets/img/footer/footer-bg-2.jpg"
    >
      <div className="container">
        <div className="widget-area pt-100">
          <div className="row align-items-start justify-content-between">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="widget footer-widget  ">
                <h3 className="widget_title text-white">Contact Us</h3>
                <div className="vs-widget-about">
                  <p className="fs-md text-body2">
                    6Fifth Avenue 5501, Broadway, New York Morris Street <br />
                    London 1234
                  </p>
                  <p className="mb-1 link-inherit text-body2">
                    <i className="fas fa-paper-plane me-3"></i>
                    <a href="mailto:foodano@example.com">foodano@example.com</a>
                  </p>
                  <p className="mb-0 link-inherit text-body2">
                    <i className="fal fa-fax me-3"></i>
                    <a href="tel:+123456789000">+(123) 4567 89000</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 col-xl-2">
              <div className="widget widget_nav_menu  footer-widget  ">
                <h3 className="widget_title text-white">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu text-body2">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="blog.html">Blogs</a>
                    </li>
                    <li>
                      <a href="error.html">Terms Of Service</a>
                    </li>
                    <li>
                      <a href="error.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 col-xl-2">
              <div className="widget  footer-widget  ">
                <h3 className="widget_title text-white">Follow Us Now</h3>
                <div className="footer-social-links text-body2">
                  <ul>
                    <li>
                      <a href="htttps://google.com">
                        <i className="fab fa-facebook-f"></i>facebook
                      </a>
                    </li>
                    <li>
                      <a href="htttps://google.com">
                        <i className="fab fa-twitter"></i>twitter
                      </a>
                    </li>
                    <li>
                      <a href="htttps://google.com">
                        <i className="fab fa-behance"></i>Behance
                      </a>
                    </li>
                    <li>
                      <a href="htttps://google.com">
                        <i className="fal fa-basketball-ball"></i>dribvble
                      </a>
                    </li>
                    <li>
                      <a href="htttps://google.com">
                        <i className="fab fa-linkedin-in"></i>linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <div className="widget footer-widget   ">
                <h4 className="widget_title text-white">Subscribe</h4>
                <form className="footer-newsletter pt-2">
                  <input
                    className="form-control mb-25 dark"
                    type="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button
                    type="submit"
                    className="vs-btn mask-style1 shadow-none"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center pb-35">
          <p className="mb-0 link-inherit">
            Copyright &copy; 2022 <a href="index.html">Foodano</a> - All Rights
            Reserved by{" "}
            <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
