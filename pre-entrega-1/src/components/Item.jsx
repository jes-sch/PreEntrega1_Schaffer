import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card border-0">
                    <img src={"../../images/" + item.imagen} className="img-fluid rounded-4" alt={item.nombre} />
                    <div className="card-body">
                        <p style={{color:"DarkViolet"}} className="card-text small text-uppercase fs-5 fw-medium">{item.nombre}<br></br><span style={{color:"LightSeaGreen"}} className="card-text fs-4"><b>${item.precio}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;