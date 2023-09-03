import StickyNav from "../nav-bars/sticky-nav-bar";

export default function StickyHeader() {
  return (
    <div className="sticky-header-wrap sticky-header py-2 py-lg-1">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-5 col-md-3">
            <div className="logo">
              <a href="index.html">
                <img src="./src/assets/img/logo.svg" alt="Foodano" />
              </a>
            </div>
          </div>
          <div className="col-7 col-md-9 text-end position-static">
            <StickyNav />
            <button className="vs-menu-toggle d-inline-block d-lg-none">
              <i className="far fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
