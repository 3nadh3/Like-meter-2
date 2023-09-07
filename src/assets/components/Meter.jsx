import { useState } from "react"
import './css/meter.css'
const Meter =() =>
{
    let [Counter,SetCounter] = useState(0);
    setInterval(()=>{
        const meet_day = new Date("2023-08-23T20:00:00").getTime();
        const today = new Date().getTime();
        SetCounter(Math.floor((today-meet_day)/1000));
    },1000);

    return(
        <>
        
        <div className="meter">
        <h1>
        &nbsp;Like meter
            </h1>
            <h2>
            <span>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                {
                    Counter
                    
                }
            </h2>
           
        </div>
           
            
     
        </>
    )

}

export default  Meter;