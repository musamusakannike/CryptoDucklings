import Navbar from "./Navbar";
import Countdown from "./Countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum, faViacoin } from "@fortawesome/free-brands-svg-icons";
import { faUsd } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return ( 
        <header id="header">
            <Navbar />
            <div className="container text-center">
                <h1 className="display-1 fw-bolder animate__animated animate__slideInDown animate__slower">Next Generation Crypto Trading</h1>
                <p className="animate__animated animate__slideInUp">Crypto Market Starts in</p>
                <Countdown />
                <div className="cta-buttons animate__animated animate__slideInUp">
                    <button className="fw-bold button-red mx-2">DOWNLOAD APP</button>
                    <button className="fw-bold button-outline-red mx-2">TRADE CRYPTO</button>
                </div>
                <div className="text-center animate__animated animate__zoomIn">
                    <p>WE ACCEPT:</p>
                    <div className="d-flex justify-content-center text-center" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        <div className="d-inline-block mx-1 mx-md-2" style={{flex: '0 0 auto'}}>
                            <span><span className="color-red me-md-1"><FontAwesomeIcon icon={faBitcoin} /></span>BITCOIN</span>
                        </div>
                        <div className="d-inline-block mx-1 mx-md-2" style={{flex: '0 0 auto'}}>
                            <span><span className="color-red me-md-1"><FontAwesomeIcon icon={faEthereum} /></span>ETHEREUM</span>
                        </div>
                        <div className="d-inline-block mx-1 mx-md-2" style={{flex: '0 0 auto'}}>
                            <span><span className="color-red me-md-1"><FontAwesomeIcon icon={faViacoin} /></span>VIACOIN</span>
                        </div>
                        <div className="d-inline-block mx-1 mx-md-2" style={{flex: '0 0 auto'}}>
                            <span><span className="color-red me-md-1"><FontAwesomeIcon icon={faUsd} /></span>USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Hero;