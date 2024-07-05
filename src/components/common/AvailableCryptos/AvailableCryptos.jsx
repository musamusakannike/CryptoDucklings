import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";

function AvailableCryptos() {
    const apiUrl = 'cryptocurrencies.json'
    const [currencies, setCurrencies] = useState([])

    useEffect(function () {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setCurrencies(data)
            })
            .catch(error => {
                console.error('Fetch Error:', error);
            });
    }, [])

    return (
        <div className="py-5 container">
            <h2 className="display-4 text-center fw-bolder">Available <span className="color-red">Cryptos</span></h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <div className="row justify-content-center text-center">
                {currencies.map((currency, index) => (
                    <CryptoCard key={index} imageSrc={currency.image_src} title={currency.title} price={currency.price} textContent={currency.text_content} />
                ))}
            </div>
        </div>
    );
}

export default AvailableCryptos;