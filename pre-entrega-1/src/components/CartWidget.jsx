import cart from "../assets/cart-check.svg";

const CartWidget = () => {
return (
    <>
        <button type="button" className="btn bg-danger-subtle position-relative">
            <img src={cart} alt="carrito" width={33} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info-subtle text-dark">3</span>
        </button>
    </>
)
}

export default CartWidget;