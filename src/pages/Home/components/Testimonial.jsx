import { useEffect } from "react";
import { queryCarouselButtons } from "../../../assets/js/ulti";

export default function Testimonial() {
  useEffect(() => {
    queryCarouselButtons();
  }, []);

  return (
    <section className="vs-testimonial-wrapper bg-black space-top space-md-bottom">
      <div className="container testimonial">
        <div className="section-title text-center  wow fadeIn">
          <h2 className="sec-title1 text-white">What Our Customer</h2>
          <h3 className="sec-title2">Saying?</h3>
          <img
            src="./src/assets/img/icons/sec-icon-1.png"
            alt="Section Title Icon"
          />
        </div>
        <div className="position-relative  wow fadeIn">
          <div className="row vs-carousel" id="slideBox1" data-carousel>
            <button
              className="icon-btn style2 testimonial-arrow left d-none d-xl-inline-block"
              data-carousel-button="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="icon-btn style2 testimonial-arrow right d-none d-xl-inline-block"
              data-carousel-button="next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <ul data-slides>
              <li className="col-xl-6 slide" data-active>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                </div>
              </li>
              <li className="col-xl-6 slide">
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
                      <h4 className="author-name mb-0 text-white">
                        John Smith{" "}
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                </div>
              </li>
              <li className="col-xl-6 slide">
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
