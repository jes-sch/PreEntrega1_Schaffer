import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-danger-subtle p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="Tienda de Lari" width={330}/>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" aria-current="page" to={"/"}>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/cuaderno"}>CUADERNOS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/imprimible"}>KITS IMPRIMIBLES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/llavero"}>LLAVEROS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/print"}>LÁMINAS Y PRINTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/sticker"}>STICKER</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary textoNavbar" to={"/category/tote"}>TOTE BAGS</NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;