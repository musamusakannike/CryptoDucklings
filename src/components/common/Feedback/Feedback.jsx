import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Feedback() {
    const feedbacks = [
        {
            name: "Cameron Williamson",
            job: "FX Trader",
            imageSrc: "assets/img/pfp1.png",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid aliquam dolorum!"
        },
        {
            name: "Bessie Cooper",
            job: "Stock Manager",
            imageSrc: "assets/img/pfp2.png",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid aliquam dolorum!"
        },
        {
            name: "Albert Flores",
            job: "Crypto Analyst",
            imageSrc: "assets/img/pfp3.png",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid aliquam dolorum!"
        }
    ]

    return (
        <div className="container py-5" id="Testimonial">
            <h2 className="display-4 fw-bolder text-center">30 Million Users Worldwide</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row mt-5 mb-3">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="col-md-4">
                        <div className="feedback-card rounded px-3 py-5 text-center my-2">
                            <div style={{ minHeight: '100px' }}>
                                <span className="color-red"><FontAwesomeIcon icon={faQuoteLeft} size={'3x'} /></span>
                                <p className="py-3">{feedback.comment}</p>
                                <img src={feedback.imageSrc} alt="" className="profile-pic" />
                                <h5>{feedback.name}</h5>
                                <p className="color-red">{feedback.job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feedback;