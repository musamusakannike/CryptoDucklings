import { faTrophy, faWallet, faLock, faDollar, faGift, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features() {
    const features = [
        {
            title: "Weekly Trading Contest",
            icon: faTrophy,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }, {
            title: "Less Commission on Trade",
            icon: faWallet,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }, {
            title: "Safe and Secure Trading Platform",
            icon: faLock,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }, {
            title: "Instant Withdraw Process",
            icon: faDollar,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }, {
            title: "Monthly Commission",
            icon: faGift,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }, {
            title: "24/7 Support Team",
            icon: faHeadset,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime."
        }
    ]

    return (
        <div className="container py-5">
            <h2 className="display-4 fw-bolder text-center">Attractive <span className="color-red">Features</span></h2>
            <p className="text-center">Here are the available features of CryptoDucklings</p>
            <div className="row">
                {features.map((feature, index) => (
                    <div key={index} className="col-md-4">
                        <div className="feature m-2">
                            <div className="feature-heading row justify-content-space-between">
                                <div className="col-3">
                                    <span className="color-red"><FontAwesomeIcon icon={feature.icon} size={'3x'} /></span>
                                </div>
                                <div className="col-9 d-flex align-items-center">
                                    <h4>{feature.title}</h4>
                                </div>
                            </div>
                            <div className="feature-body mt-1 p-1">
                                <p className="color-ash">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, maxime.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;