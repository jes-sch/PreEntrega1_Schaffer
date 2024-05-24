import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const  {cart, removeItem, clear, getCountProducts, getSumProducts} = useContext(CartContext);

    if (getCountProducts() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <div className="alert alert-info" role="alert">
                        <br /><h2>No se econtraron productos en el carrito</h2><br />
                        <Link to={"/"} className="btn btn-lg btn-info text-white">Volver al HOME 👽</Link><br /><br />
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <h1>C A R R I T O 💌</h1>
    )
}

export default Cart;