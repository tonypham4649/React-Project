import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-menu menu-style1 mobile-menu-active menu-style2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}
