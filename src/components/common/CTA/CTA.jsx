function CTA() {
    return ( 
        <div className="py-5 text-center container-fluid" id="CTA">
            <div className="container d-flex justify-content-center align-items-center" style={{width: '100%'}}>
                <div className="position-relative">
                    <img src="assets/img/bg.png" style={{width: '100%', height: 'auto', visibility: 'hidden'}} alt="" />
                    <h1 className="display-3 fw-bolder position-absolute" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%'}}>Most Advanced Crypto Trading Platform Ever</h1>
                    <img src="assets/img/google-play.png" className="mx-2" style={{width: '120px'}} alt="" />
                    <img src="assets/img/app-store.png" className="mx-2" style={{width: '120px'}} alt="" />
                </div>
            </div>
        </div>
     );
}

export default CTA;