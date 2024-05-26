const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-grow text-info m-5" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="visually-hidden">Loading ⏳</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;