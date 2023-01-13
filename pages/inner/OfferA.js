import { useState, useEffect } from "react";
import { render } from "react-dom";
import ReactWhatsapp from "react-whatsapp";
function OfferA() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 3000);
  }, []);

  const ClosePopup = () => {
    setPopup(false);
  };
  const [message, setMessage] = useState("");

  // Countdown
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  // Timer
  const countDown = () => {
    const dueDate = new Date("November 25, 2022 00:00").getTime();
    const currentDate = new Date().getTime();

    const remainings = dueDate - currentDate;

    if (remainings > 0) {
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      // Remainings
      let remainingDay = Math.floor(remainings / day);
      let remainingHour = Math.floor((remainings % day) / hour);
      let remainingMinute = Math.floor((remainings % hour) / minute);
      let remainingSecond = Math.floor((remainings % minute) / second);

      // Day
      let dayLength = remainingDay.toString().length;

      if (dayLength === 1) {
        setDay1(0);
        setDay2(remainingDay);
      } else if (dayLength === 2) {
        remainingDay = remainingDay.toString().split("");

        setDay1(remainingDay[0]);
        setDay2(remainingDay[1]);
      }

      // Hour
      let hourLength = remainingHour.toString().length;

      if (hourLength === 1) {
        setHour1(0);
        setHour2(remainingHour);
      } else if (hourLength === 2) {
        remainingHour = remainingHour.toString().split("");

        setHour1(remainingHour[0]);
        setHour2(remainingHour[1]);
      }

      // Minute
      let minuteLength = remainingMinute.toString().length;

      if (minuteLength === 1) {
        setMinute1(0);
        setMinute2(remainingMinute);
      } else if (minuteLength === 2) {
        remainingMinute = remainingMinute.toString().split("");

        setMinute1(remainingMinute[0]);
        setMinute2(remainingMinute[1]);
      }

      // Second
      let secondLength = remainingSecond.toString().length;

      if (secondLength === 1) {
        setSecond1(0);
        setSecond2(remainingSecond);
      } else if (secondLength === 2) {
        remainingSecond = remainingSecond.toString().split("");

        setSecond1(remainingSecond[0]);
        setSecond2(remainingSecond[1]);
      }
    } else {
      setDay1(0);
      setDay2(0);

      setHour1(0);
      setHour2(0);

      setMinute1(0);
      setMinute2(0);

      setSecond1(0);
      setSecond2(0);
    }
  };

  setInterval(countDown, 1000);
  return (
    <div>
      <div className={`${popup ? "active" : ""} offer-a`}>
        <div className="popup-width">
          <button className="close-btn" onClick={ClosePopup}>
            <img src="assets/img/close.svg" alt="Image Not Found" />
          </button>

          <div className="popup-area">
            <div className="timer-inner text-size">
              <div className="time-dev">
                <span>{day1}</span>
                <span>{day2}</span>
              </div>
              <span>:</span>
              <div className="time-dev">
                <span>{hour1}</span>
                <span>{hour2}</span>
              </div>
              <span>:</span>
              <div className="time-dev">
                <span>{minute1}</span>
                <span>{minute2}</span>
              </div>
              <span>:</span>
              <div className="time-dev">
                <span>{second1}</span>
                <span>{second2}</span>
              </div>
            </div>
            <div className="popup-content">
              <p>Don&lsquo;t Miss Out</p>
              <h2>Take 40% off your order!</h2>
              <p>Contact us now to get 40% off on your next order.</p>
              <div className="popup-input">
                <textarea
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control offer-input"
                ></textarea>
                <ReactWhatsapp number="+13025977087" message={message}>
                  <span className="animation">
                    <button className="submit-btn" type="submit">
                      Get In Touch Now
                    </button>
                  </span>
                </ReactWhatsapp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferA;
