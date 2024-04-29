import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 style={{color:"DarkViolet"}}>🩹 ¡Oh no! Error 404 🩹</h1><br></br>
                    <h2 style={{color:"Orchid"}}>No podemos encontrar la página que estás buscando 🚧👽</h2>
                    <p className="my-5"><Link to={"/"} className="btn btn-lg btn-info text-white">Volver al HOME</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;