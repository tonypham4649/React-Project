import { Link } from "react-router-dom";

export default function StickyNav() {
  return (
    <nav className="main-menu menu-sticky1 d-none d-lg-block link-inherit">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
