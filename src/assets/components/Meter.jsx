import { useState, useEffect } from "react";
import './css/meter.css';

const Meter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const meetDay = new Date("2023-08-23T20:00:00").getTime();
            const today = new Date().getTime();
            setCounter(Math.floor((today - meetDay) / 1000));
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="meter">
            <h1 style={{ textAlign: "center",fontSize:50 }}>Like meter</h1>
            <h2 style={{ textAlign: "center" }}>
                <span >{counter}</span>
                
            </h2>
        </div>
    );
};

export default Meter;
