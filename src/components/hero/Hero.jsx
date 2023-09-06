export default function Hero() {
  return (
    <section className="vs-hero-wrapper hero-layout4 ">
      <div
        className="vs-hero-carousel"
        data-height="850"
        data-container="1800"
        data-slidertype="fullwidth"
      >
        <div
        // className="ls-slide"
        // dataLs="duration: 8000; transition2d: 5; kenburnszoom:out; kenburnsscale:1.1;"
        >
          <img
            src="/src/assets/img/hero/hero-bg-3-1.jpg"
            alt="Hero Image"
            className="ls-bg"
          />
          {/* <p
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              left: "50%",
              top: "180px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "52px",
              letterSpacing: "0.9em",
              textTransform: "uppercase",
              color: "#000000",
            }}
            data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  "
          >
            Top selling
          </p>
          <h1
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              left: "50%",
              top: "280px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "160px",
              color: "#000000",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            Organic Food
          </h1>
          <h1
            className="ls-l ls-hide-tablet ls-hide-desktop"
            style={{
              left: "50%",
              top: "480px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "160px",
              color: "#000000",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            20% Off
          </h1>
          <p
            className="ls-l ls-hide-phone"
            style={{
              left: "50%",
              top: "385px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "18px",
              letterSpacing: "0.9em",
              textTransform: "uppercase",
              color: "#000000",
            }}
            data-ls="minfontsize: 10px; durationin: 1500;  delayin: 0; easingin: easeInOutSine; texttransitionin: true; textstartatin: transitioninstart; texttypein: chars_asc; textshiftin: 100; textoffsetyin: -100; textrotatein: -45; parallax: true; parallaxlevel: 2;  "
          >
            Top selling
          </p>
          <h1
            className="ls-l ls-hide-phone"
            style={{
              left: "50%",
              top: "415px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "80px",
              color: "#000000",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1000; delayin: 200; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            Organic Food
          </h1>
          <h1
            className="ls-l ls-hide-phone"
            style={{
              left: "50%",
              top: "503px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "80px",
              color: "#000000",
              textTransform: "uppercase",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 1800; delayin: 600; easingin: easeInOutSine; parallax: true; parallaxlevel: 3; "
          >
            20% Off
          </h1> */}
          <div
            className="ls-l ls-hide-phone"
            style={{
              left: "49%",
              top: "630px",
              textAlign: "center",
            }}
            data-ls="offsetyin: 100; fadein: true; durationin: 2000; delayin: 900; parallax: true; parallaxlevel: 2;"
          >
            <a
              href="shop.html"
              className="vs-btn hero-btn center"
              style={{
                boxShadow: "none",
              }}
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
