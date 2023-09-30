import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="vs-hero-wrapper hero-layout4 ">
      <div
        className="vs-hero-carousel"
        data-height="850px"
        data-container="1800px"
        data-slidertype="fullwidth"
        style={{
          height: "850px",
          backgroundImage: "url(/img/hero/hero-bg-3-1.jpg)",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.363)",
        }}
      >
        <div className="hero-slider-container">
          <p
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              top: "400px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "52px",
              letterSpacing: "0.9em",
              textTransform: "uppercase",
            }}
          >
            Top selling
          </p>
          <h1
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              top: "550px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "160px",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            Organic Food
          </h1>
          <h1
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              top: "750px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "160px",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            20% Off
          </h1>
          <div
            className="ls-l ls-hide-phone"
            style={{
              top: "900px",
              textAlign: "center",
            }}
          >
            <Link
              to="/shop"
              className="vs-btn hero-btn center"
              style={{
                boxShadow: "none",
              }}
            >
              Purchase
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
