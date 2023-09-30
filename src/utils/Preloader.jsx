export default function Preloader() {
  return (
    <div className="preloader  ">
      <button className="vs-btn preloaderCls">Cancel Preloader </button>
      <div className="preloader-inner">
        <div className="loader-logo">
          <img src="/img/logo.svg" alt="Foodano" />
        </div>
        <div className="loader-wrap pt-4">
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
}
