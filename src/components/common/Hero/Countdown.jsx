import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const targetDate = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    }

    return (
        <div className='animate__animated animate__slideInUp'>
            {Object.keys(timeLeft).length ? (
                <div>
                    <div className="d-flex justify-content-center text-center" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        <div className="d-inline-block mx-2" style={{flex: '0 0 auto'}}>
                            <span className='d-block fw-bolder color-red' style={{ fontSize: 'x-large' }}>{timeLeft.days}</span>
                            <span className='d-block'>DAYS </span>
                        </div>

                        <div className="d-inline-block mx-2" style={{flex: '0 0 auto'}}>
                            <span className='d-block fw-bolder color-red' style={{ fontSize: 'x-large' }}>{timeLeft.hours}</span>
                            <span className='d-block'>HOURS </span>
                        </div>

                        <div className="d-inline-block mx-2" style={{flex: '0 0 auto'}}>
                            <span className='d-block fw-bolder color-red' style={{ fontSize: 'x-large' }}>{timeLeft.minutes}</span>
                            <span className='d-block'>MINUTES </span>
                        </div>

                        <div className="d-inline-block mx-2" style={{flex: '0 0 auto'}}>
                            <span className='d-block fw-bolder color-red' style={{ fontSize: 'x-large' }}>{timeLeft.seconds}</span>
                            <span className='d-block'>SECONDS</span>
                        </div>
                    </div>
                </div>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
}

export default Countdown;
