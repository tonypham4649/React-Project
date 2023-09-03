import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-menu menu-style1 mobile-menu-active menu-style2 text-white">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
