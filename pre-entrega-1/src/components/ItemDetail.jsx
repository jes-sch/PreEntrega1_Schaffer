import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

const onAdd = (quantity) => {
    addItem(item, quantity);
    console.log("Agregaste " + quantity + " productos al carrito 🏹");
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={"../../images/" + item.imagen} className="img-fluid rounded-4" alt={item.nombre} />
                </div>
                <div className="col-md-4">
                    <h1 className="card-text small text-uppercase fs-3 fw-bold" style={{color:"DarkViolet"}}>{item.nombre}</h1>
                    <p className="card-text fs-4" style={{color:"LightSeaGreen"}}>${item.precio}</p>
                    <p className="card-text fs-5" style={{color:"Orchid"}}>{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;