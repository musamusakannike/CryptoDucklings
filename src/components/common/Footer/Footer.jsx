import { faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer className="container-fluid py-4">
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-6 col-lg-3">
                        <h6 className="color-red">CRYPTO</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui possimus voluptates quas aliquam neque.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="color-red">LINKS</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">How it Works</a></li>
                            <li><a href="#" className="text-light">Cryptos</a></li>
                            <li><a href="#" className="text-light">Features</a></li>
                            <li><a href="#" className="text-light">Testimonial</a></li>
                            <li><a href="#" className="text-light">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="color-red">LEGAL</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Terms of Use</a></li>
                            <li><a href="#" className="text-light">Terms and Condition</a></li>
                            <li><a href="#" className="text-light">Privacy Policy</a></li>
                            <li><a href="#" className="text-light">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="color-red">NEWSLETTER</h6>
                        <p>Over 250,000 have joined</p>
                        <div className="input-group">
                            <input type="text" className="form-control p-2" placeholder="Search" aria-label="Search" />
                            <button className="button-red" type="button">Search</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="row justify-content-space-between">
                        <div className="col-4">
                            <p><a href="#">Privacy & Terms</a></p>
                            <p><a href="#">Contact us</a></p>
                        </div>
                        <div className="col-4 text-center">
                            Copyright 2024
                        </div>
                        <div className="col-4 text-end">
                            <span className="mx-1"><FontAwesomeIcon icon={faThreads} /></span>
                            <span className="mx-1"><FontAwesomeIcon icon={faXTwitter} /></span>
                            <span className="mx-1"><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className="mx-1"><FontAwesomeIcon icon={faLinkedin} /></span>
                            <span className="mx-1"><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;