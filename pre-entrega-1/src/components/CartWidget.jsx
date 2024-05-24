import { Link } from "react-router-dom";
import cart from "../assets/cart-check.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {getCountProducts} = useContext(CartContext);

      if (getCountProducts() > 0) {
        return (
            <Link to={"/cart"} className="btn bg-danger-subtle position-relative">
              <img src={cart} alt="carrito" width={33} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info-subtle text-dark">{getCountProducts()}</span>
            </Link>
        )
      }
};

export default CartWidget;