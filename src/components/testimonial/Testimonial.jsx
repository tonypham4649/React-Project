export default function Testimonial() {
  return (
    <section
      className="vs-testimonial-wrapper bg-black space-top space-md-bottom"
      data-bg-src="./src/assets/img/testimonial/testimo-bg-1.jpg"
    >
      <div className="container">
        <div
          className="section-title text-center  wow fadeIn"
          data-wow-delay="0.3s"
        >
          <h2 className="sec-title1 text-white">What Our Customer</h2>
          <h3 className="sec-title2">Saying?</h3>
          <img
            src="./src/assets/img/icons/sec-icon-1.png"
            alt="Section Title Icon"
          />
        </div>
        <div className="position-relative  wow fadeIn" data-wow-delay="0.3s">
          <button
            data-slick-prev="#slideBox1"
            className="icon-btn style2 testimonial-arrow d-none d-xl-inline-block"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            data-slick-next="#slideBox1"
            className="icon-btn style2 testimonial-arrow d-none d-xl-inline-block"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div
            className="row vs-carousel"
            data-slide-show="2"
            data-lg-slide-show="2"
            data-sm-slide-show="1"
            id="slideBox1"
          >
            <div className="col-xl-6">
              <div className="testimonial-box bg-dark">
                <span className="quote-icon">
                  <i className="flaticon-left-quote"></i>
                </span>
                <div className="d-flex align-items-center mb-2 mb-lg-4">
                  <div className="author-img">
                    <img
                      src="./src/assets/img/testimonial/author-1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="ps-4">
                    <h4 className="author-name mb-0 text-white">
                      Albert Huynaya{" "}
                    </h4>
                    <span className="author-degi font-theme fw-medium text-theme">
                      Smoothie Bartender
                    </span>
                    <div className="vs-rating fs-xs lh-base">
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star "></i>
                    </div>
                  </div>
                </div>
                <p className="testi-text fs-xs text-body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial-box bg-dark">
                <span className="quote-icon">
                  <i className="flaticon-left-quote"></i>
                </span>
                <div className="d-flex align-items-center mb-2 mb-lg-4">
                  <div className="author-img">
                    <img
                      src="./src/assets/img/testimonial/author-2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="ps-4">
                    <h4 className="author-name mb-0 text-white">John Smith </h4>
                    <span className="author-degi font-theme fw-medium text-theme">
                      Smoothie Bartender
                    </span>
                    <div className="vs-rating fs-xs lh-base">
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star "></i>
                    </div>
                  </div>
                </div>
                <p className="testi-text fs-xs text-body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial-box bg-dark">
                <span className="quote-icon">
                  <i className="flaticon-left-quote"></i>
                </span>
                <div className="d-flex align-items-center mb-2 mb-lg-4">
                  <div className="author-img">
                    <img
                      src="./src/assets/img/testimonial/author-3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="ps-4">
                    <h4 className="author-name mb-0 text-white">
                      Vivi Marian{" "}
                    </h4>
                    <span className="author-degi font-theme fw-medium text-theme">
                      Smoothie Bartender
                    </span>
                    <div className="vs-rating fs-xs lh-base">
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star active"></i>
                      <i className="fas fa-star "></i>
                    </div>
                  </div>
                </div>
                <p className="testi-text fs-xs text-body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
