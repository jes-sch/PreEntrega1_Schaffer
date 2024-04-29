import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useSearchParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-light-emphasis text-center">
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;