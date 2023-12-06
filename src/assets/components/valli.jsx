import React, { useState, useEffect } from "react";
import "./css/timer.css";

const Valli = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const birthdayMonth = 8; // Replace with your birthday month (1-12)
    const birthdayDay = 14; // Replace with your birthday day (1-31)

    const calculateCountdown = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const birthdayDate = new Date(currentYear, birthdayMonth - 1, birthdayDay, 0, 0, 0, 0);

      if (currentDate > birthdayDate) {
        // If the birthday has already occurred this year, calculate for next year
        birthdayDate.setFullYear(currentYear + 1);
      }

      const timeRemaining = birthdayDate - currentDate;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    };

    // Calculate the countdown initially
    calculateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(() => {
      calculateCountdown();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs once on mount

  function pad(n) {
    return n < 10 ? `0${n}` : `${n}`;
  }

  return (
    <>
      <div id="countdown">
        <div id="tiles">
          <span className="countdown-item">
            <span>{countdown.days}</span> Days
          </span>
          <span className="countdown-item">
            <span>{countdown.hours}</span> Hrs
          </span>
          <span className="countdown-item">
            <span>{countdown.minutes}</span> Mins
          </span>
          <span className="countdown-item">
            <span>{countdown.seconds}</span> Secs
          </span>
        </div>
      </div>
    </>
  );
};

export default Valli;
