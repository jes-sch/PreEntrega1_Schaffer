import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-danger-subtle p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="logo de la marca" width={345}/>
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
                        <a className="nav-link text-dark" aria-current="page" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">STICKERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">CUADERNOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">LLAVEROS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">LÁMINAS Y PRINTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">TOTE BAGS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">KITS IMPRIMIBLES</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;