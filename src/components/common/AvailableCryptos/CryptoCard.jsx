function CryptoCard(props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card shadow p-1 my-2">
                <div className="card-img">
                    <img src={props.imageSrc} alt={props.title} />
                </div>
                <div className="card-body text-start">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p>{props.textContent}</p>
                </div>
                <div className="card-footer">
                    <div className="d-block position-relative" style={{ height: '40px' }}>
                        <div className="d-inline-block position-absolute" style={{ left: '0' }}>
                            <h4 className="color-red fw-bold">${props.price}</h4>
                        </div>
                        <div className="d-inline-block position-absolute" style={{ right: '0' }}>
                            <button className="button-red">TRADE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoCard;