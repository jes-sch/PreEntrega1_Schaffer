const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5 p-3">
                <div className="col text-center">
                    <h4 style={{color:"DarkViolet "}}>Si te gusta mi trabajo, no dudes en contactarme 💌🌸</h4><br></br>
                    <div className="redes">
            <a href="https://www.instagram.com/laraschafferart/" target="_blank">
                <div className="footer__iconos">
                    <i className="fa-brands fa-instagram"></i>
                    <p>INSTAGRAM</p>
                </div>
            </a>
            <a href="https://www.behance.net/laraschfferart" target="_blank">
                <div className="footer__iconos">
                    <i className="fa-brands fa-behance"></i>
                    <p>BEHANCE</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/lara-sch%C3%A4ffer-95891417a/">
                <div className="footer__iconos">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <p>LINKEDIN</p>
                </div>
            </a>
        </div><br></br>
                    <div className="col textoFooter text-end">
                    <p>© Copyright <b>Jesica Schäffer 2024</b> ● Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;