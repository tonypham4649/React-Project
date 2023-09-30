import { Link } from "react-router-dom";
import useDataFetcher from "../../../api/DataFetcher";

export default function Services() {
  const { data, loading, error } = useDataFetcher();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No items found</div>;

  const featureItems = data.slice(0, 6).map((item) => {
    return (
      <div className="col-md-6 col-xl-4" key={item.id}>
        <div className="service-box1">
          <div className="sr-shape1">
            <img src="./src/assets/img/shape/service-s-1-1.png" alt="Image" />
          </div>
          <div className="sr-shape2">
            <img src="./src/assets/img/shape/service-s-1-2.png" alt="Image" />
          </div>
          <div className="service-img">
            <img src={item.image} alt="Service Image" />
          </div>
          <div className="service-content">
            <h3 className="service-title h2 fw-semibold">{item.name}</h3>
            <p className="service-text fs-xs mb-0">{item.description}</p>
            <Link to="/shop" className="icon-btn">
              <i className="fal fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="vs-service-wrapper position-relative pt-175 space-md-bottom">
      <div
        className="service-shape1 position-absolute start-0 top-0"
        style={{
          backgroundImage: "url(./src/assets/img/service/service-bg-1-2.png)",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.363)",
        }}
      />
      <div className="container z-index-common">
        <div
          className="section-title text-center text-lg-start  wow fadeIn"
          data-wow-delay="0.3s"
        >
          <h2 className="sec-title1 text-white">Netural Market</h2>
          <h3 className="sec-title2">Healthy Food</h3>
          <img src="./src/assets/img/icons/sec-icon-1.png" alt="About Image" />
        </div>
        <div
          className="row vs-carousel  wow fadeIn"
          data-wow-delay="0.3s"
          data-slide-show="3"
          data-md-slide-show="2"
        >
          {featureItems}
        </div>
      </div>
    </section>
  );
}
