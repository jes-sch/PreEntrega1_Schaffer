import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};

        // Para agregar un nuevo Documento a Firestore:
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(data => {
                setOrderId(data.id);
            });

    // Para agregar todos los productos mi array JSON a mi BD Firestore
    /* const db = getFirestore();
    const itemsCollection = collection(db, "items");
    arrayProductos.forEach(item => {
        addDoc(itemsCollection, item);
    })
    console.log("PRUEBA SUPERADA : PRODUCTOS COMPLETAMENTE CARGADOS"); */

    }

    if (getCountProducts() == 0) {
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
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                            <button type="button" className="btn btn-info text-white fw-bold" onClick={generarOrden}>GENERAR ORDEN 🧷</button>
                    </form>
                </div>
                <div className="col">
                <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} style={{color:"LightSeaGreen"}} width={80} /></td>
                                    <td className="fw-bold" style={{color:"Orchid"}}>{item.nombre}</td>
                                    <td className="text-end fw-bold" style={{color:"Orchid"}}>$ {item.precio}</td>
                                </tr>
                            ))}
                                <tr>
                                    <td style={{color:"OrLightSeaGreenchid"}} colSpan={2}><b>Total</b></td>
                                    <td className="text-end"><b>$ {getSumProducts()}</b></td>
                                </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="row my-4">
                <div className="col text-center">
                {orderId ? <div className="alert alert-info" role="alert">✍🏽 Se generó el siguiente ID a tu compra: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;