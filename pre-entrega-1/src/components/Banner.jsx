import banner from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="container">
            <h4 className="fs-4 text-center">🎨💡🦋</h4>
            <p style={{color:"Orchid"}} className="fs-5 fst-italic text-uppercase text-center"><b>✨Algunas de mis Ilustraciones✨</b></p>
            <div className="row" style={{backgroundImage:`url(${banner})`, backgroundSize:"cover", height:570, marginRight:15}}>
            </div>
        </div>
    )
}

export default Banner;