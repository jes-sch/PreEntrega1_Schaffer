const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-light-emphasis text-center">
                    <h2 style={{color:"orchid"}}>{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;