import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, settelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }else if (email == "") {
            return false;
        } else if (telefono == "") {
            return false;
        }

        const buyer = {nombre:nombre, email:email, telefono:telefono};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(data => {
                setOrderId(data.id);
                setNombre("");
                setEmail("");
                settelefono("");
                clear();
            });
    }

    if (getCountProducts() == 0 && !orderId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3 style={{color:"DarkViolet"}}>❌ No hay productos en el Carrito ❌</h3>
                        <Link to={"/"} className="btn btn-lg btn-info text-white my-5">Volver a la PÁGINA PRINCIPAL 🎀</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
            {!orderId ?
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label fs-5" style={{color:"LightSeaGreen"}}>Nombre: </label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5" style={{color:"LightSeaGreen"}}>Correo electrónico: </label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-5" style={{color:"LightSeaGreen"}}>Teléfono: </label>
                            <input type="text" className="form-control" onInput={(e) => {settelefono(e.target.value)}} />
                        </div>
                            <button type="button" className="btn btn-info text-white fw-bold" onClick={generarOrden}>GENERAR ORDEN 🧷</button>
                    </form>
                </div>
                <div className="col">
                <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img className="img-fluid rounded-3" src={"../../images/" + item.imagen} alt={item.nombre} style={{color:"LightSeaGreen"}} width={130} /></td>
                                    <td className="fw-bold" style={{color:"Orchid"}}>{item.nombre}</td>
                                    <td className="text-end fw-bold" style={{color:"Orchid"}}>$ {item.precio}</td>
                                </tr>
                            ))}
                                <tr>
                                    <td className="fw-bold" style={{color:"LightSeaGreen"}} colSpan={2}><b>TOTAL: </b></td>
                                    <td className="fw-bold text-end" style={{color:"LightSeaGreen"}}>$ {getSumProducts()}</td>
                                </tr>
                        </tbody>
                    </table>    
                </div>
            </div> : "" }
            <div className="row my-4">
                <div className="col text-center">
                {orderId ? <div className="alert alert-info" role="alert">✍🏽 Se generó el siguiente ID a tu compra: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;