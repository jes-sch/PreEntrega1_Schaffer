import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import { addDoc, collection, getDocs, getFirestore} from "firebase/firestore";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 2500));
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, []); */

        // Cargo los productos vía FireStore
        useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []);

    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }
    
    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:calcularTotal()}
        
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
                                    <td className="text-end"><b>$ {calcularTotal()}</b></td>
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

   

/*

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
        
        // Agrego un nuevo Documento a la Colección Orders
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });

        const itemsCollection = collection(db, "item");

        arrayProductos.array.forEach(item => {
            addDoc(items, item);
        });

    }

    if (getCountProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>❌ No hay productos en el Carrito ❌</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la PÁGINA PRINCIPAL 🎀</Link>
                    </div>
                </div>
            </div>
        )
    } */