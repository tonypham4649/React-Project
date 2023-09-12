export default function BreadCrumb() {
  return (
    <div
      className="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200"
      style={{
        backgroundImage: "url(/src/assets/img/breadcumb/breadcumb-img-1.jpg)",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.363)",
      }}
    >
      <div className="container">
        <div className="breadcumb-content text-center">
          <h1
            className="breadcumb-title"
            style={{ color: "rgb(236, 234, 234)" }}
          >
            Organic
          </h1>
          <ul className="breadcumb-menu-style1 mx-auto">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
