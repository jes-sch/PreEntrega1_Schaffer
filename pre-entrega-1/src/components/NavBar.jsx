import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-danger-subtle p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="logo de la marca" width={330}/>
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">STICKERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">CUADERNOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">LLAVEROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">LÁMINAS Y PRINTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">TOTE BAGS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary textoNavbar" href="#">KITS IMPRIMIBLES</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;