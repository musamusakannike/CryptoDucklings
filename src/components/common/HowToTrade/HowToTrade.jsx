function HowToTrade() {
    return (
        <div className="container text-center py-5" id="howItWorks">
            <h2 className="display-4 fw-bolder">How to Trade With <span className="color-red">Crypto</span>Duckling</h2>
            <p>Here are the steps you should follow to trade with our coin:</p>
            <div className="row py-3 justify-content-space-between">
                <div className="col-md-6 d-flex align-items-center text-center my-2">
                    <div className="position-relative">
                        <img src="assets/img/mobile-bg.png" className="img-fluid" alt="" />
                        <img src="assets/img/Play button.png" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '80px' }} alt="" />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center text-center my-2">
                    <div>
                        <h3 className="color-red fw-bold text-start">Steps to Trade:</h3>
                        <ul className="list-unstyled steps-list">
                            <li className="my-2 p-2 rounded-pill">
                                <div className="d-flex">
                                    <button className="button-red m-2 border-circle color-dark">01</button>
                                    <p className="text-red m-0 d-flex align-items-center"><span style={{ fontSize: '20px' }}>Create an Account</span></p>
                                </div>
                            </li>

                            <li className="my-2 p-2 rounded-pill">
                                <div className="d-flex">
                                    <button className="button-red m-2 border-circle color-dark">02</button>
                                    <p className="text-red m-0 d-flex align-items-center"><span style={{ fontSize: '20px' }}>Download Platform</span></p>
                                </div>
                            </li>

                            <li className="my-2 p-2 rounded-pill">
                                <div className="d-flex">
                                    <button className="button-red m-2 border-circle color-dark">03</button>
                                    <p className="text-red m-0 d-flex align-items-center"><span style={{ fontSize: '20px' }}>Select Crypto</span></p>
                                </div>
                            </li>

                            <li className="my-2 p-2 rounded-pill">
                                <div className="d-flex">
                                    <button className="button-red m-2 border-circle color-dark">04</button>
                                    <p className="text-red m-0 d-flex align-items-center"><span style={{ fontSize: '20px' }}>Start Trading</span></p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToTrade;