const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-light-emphasis text-center">
                    <h3 style={{color:"LightSeaGreen"}}>{mensaje}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;