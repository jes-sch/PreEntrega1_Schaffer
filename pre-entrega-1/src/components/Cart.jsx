import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";

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
            <div className="container">
                <div className="row">
                   <div className="col"><br /><br />
                   <h3 className="text-center" style={{color:"Orchid"}}>C A R R I T O 💌</h3><br /><br />
                        <table className="table">
                            <tbody>
                                <tr>
                                <td colSpan={6} className="text-end"><button className="btn btn-info text-white fw-bold" onClick={clear}>Vaciar carrito</button></td> 
                                </tr>
                                {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="fw-bold" style={{color:"DarkViolet"}}><img src={item.imagen} alt={item.nombre} width={122} /></td>
                                    <td className="align-middle text-center fw-bold" style={{color:"DarkViolet"}}>{item.nombre}</td>
                                    <td className="align-middle text-center fw-bold" style={{color:"DarkViolet"}}>$ {item.precio}</td>
                                    <td className="align-middle text-center fw-bold" style={{color:"DarkViolet"}}>{item.quantity}</td>
                                    <td className="align-middle text-center fw-bold" style={{color:"DarkViolet"}}>$ {item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><img src={trash} width={24} alt="Eliminar producto" title="Eliminar producto" onClick={() => {removeItem(item.id)}} /></td>
                                </tr>
                                ))}
                                <tr className="align-middle">
                                    <td style={{color:"Orchid"}} colSpan={4}><b>💰 T O T A L 💰</b></td>
                                    <td className="text-center" style={{color:"Orchid"}}><b>$ {getSumProducts()}</b></td>
                                    <td>&nbsp;</td>
                                    <td className="text-end"><Link to={"/checkout"} className="btn btn-info text-white fw-bold">Comprar ✨💰</Link></td>
                                </tr>
                            </tbody>
                        </table><br /><br />
                    </div>
                </div>
            </div>
        )
}

export default Cart;