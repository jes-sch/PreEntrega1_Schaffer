import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 2500));
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, []);

    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }
    
    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:calcularTotal()}
        console.log(order);
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            console.log(data);
        })
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
        </div>
    )
}

export default Checkout;


    // Cargo los productos vía JSON
    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 40000));
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, []); */

    // Cargo los productos vía FireStore
    /*useEffect(() => {
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
        const order = {buyer:buyer, items:items, total:calcularTotal()};
        //console.log(order);
        
        // Agrego un nuevo Documento al Firestore
        /* const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        }); */

        // Para agregar todos los productos mi array JSON a mi BD Firestore
        /* const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        })
        console.log("Proceso de carga productos completo!"); */

        // Modificar un Documento por ID en Firestore
        /* const db = getFirestore();
        const orderDoc = doc(db, "items", "8zsqSha4k6kT8MFPv6XM");
        updateDoc(orderDoc, {precio:55000, nombre:"Taza Cafetera Porteña", precioPromocional:45000}).then(data => {
            console.log("El Producto se actualizó correctamente!");
        }) */


        // Modificar más de un Document con Batch en Firestore
        /* const db = getFirestore();
        const doc1 = doc(db, "items", "8zsqSha4k6kT8MFPv6XM");
        const doc2 = doc(db, "items", "AmZ5MMrY503MKofHkODR");
        const doc3 = doc(db, "items", "OFRHGr6uqon87Qzvznwz");
        const batch = writeBatch(db);
        batch.update(doc1, {stock:2});
        batch.update(doc2, {stock:20});
        batch.set(doc3, {stock:2});
        batch.commit();
        console.log("Productos actualizados!");
    } 

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico: </label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono: </label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>GENERAR ORDEN 🧷</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>x{item.quantity}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;

/*import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
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
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico: </label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono: </label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>GENERAR ORDEN 🧷</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>x{item.quantity}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout; */