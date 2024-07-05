import AvailableCryptos from "../common/AvailableCryptos/AvailableCryptos";
import CTA from "../common/CTA/CTA";
import Features from "../common/Features/Features";
import Feedback from "../common/Feedback/Feedback";
import Hero from "../common/Hero/Hero";
import HowToTrade from "../common/HowToTrade/HowToTrade";
import Footer from "../common/Footer/Footer";

function LandingPage() {
    return ( 
        <div>
            <Hero />
            <HowToTrade />
            <AvailableCryptos />
            <Features />
            <CTA />
            <Feedback />
            <Footer />
        </div>
     );
}

export default LandingPage;