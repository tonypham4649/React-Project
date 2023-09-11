export default function Faq() {
  return (
    <section
      className="vs-faq-wrapper space-top"
      data-bg-src="./src/assets/img/bg/shop-bg-1.png"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-xl-7 align-self-end align-self-xxl-start wow slideInUp"
            data-wow-delay="0.3s"
          >
            <div className="banner d-none d-lg-block">
              <img
                src="./src/assets/img/shop/shop-banner-1-1.png"
                alt="Shop Banner"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-5 space-md-bottom pt-lg-4  wow fadeIn"
            data-wow-delay="0.3s"
          >
            <div className="section-title mb-40 ">
              <h2 className="sec-title1">Why we are</h2>
              <h3 className="sec-title2">the best</h3>
              <img
                src="./src/assets/img/icons/sec-icon-1.png"
                alt="Section Title"
                className="mt-10 mb-20"
              />
              <p className="fst-italic fw-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna .
              </p>
            </div>
            <div
              className="vs-accordion accordion-style1 accordion mb-30"
              id="accordionLayout1"
            >
              <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Ut fermentum massa justo
                  </button>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionLayout1"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    labore et dolore magna
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionLayout1"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Ut fermentum massa justo
                  </button>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionLayout1"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
