import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";
import { FaBell, FaDiceD6 } from "react-icons/fa";

const NavBar = () => {
  const { cart, user } = useContext(storeContext);
  return (
    <nav className="navbar">
      <div className="bell">
        <Link className="news" to="/coupons">
          <FaBell></FaBell>
        </Link>
      </div>

      <div className="about" id="navbarSupportedContent">
        <Link className="aboutSign" to="/about">
          Heavy Industries Wargaming
        </Link>
      </div>

      <div className="diceAndCart">
        <Link className="diceIcon" to="/catalog">
          <FaDiceD6></FaDiceD6>
        </Link>

        <form className="viewCart">
          <Link
            to="/cart"
            className="btn btn-primary position-relative bg-dark"
          >
            View Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">items</span>
            </span>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
