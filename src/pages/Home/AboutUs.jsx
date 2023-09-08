export default function AboutUs() {
  return (
    <section className="vs-about-wrapper position-relative  space-top space-md-bottom">
      <div className="shape4 text-center text-xl-start mx-auto mx-xl-0">
        {" "}
        <img src="./src/assets/img/about/shape-6.jpg" alt="Shape" />
      </div>
      <div className="shape5 position-absolute ani-moving-x d-none d-hd-block">
        {" "}
        <img src="./src/assets/img/shape/shape-6.png" alt="Shape" />
      </div>
      <div className="container z-index-common">
        <div className="row text-center text-xl-start justify-content-center justify-content-xl-start">
          <div className="col-xl-10 offset-xl-2 about-title-column">
            <div className="title-area mb-10 mb-xl-0">
              <span className="sub-title1">We Are Foodano</span>
              <h2 className="sec-title1">The Best Trusted Farms </h2>
              <h2 className="sec-title2">In the World</h2>
              <img
                src="./src/assets/img/icons/sec-icon-1.png"
                alt="Default Image"
              />
            </div>
          </div>
          <div className="col-lg-10 col-xl-6 offset-xl-4 mb-10 about-text-column">
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p className="text-md">
              {" "}
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
