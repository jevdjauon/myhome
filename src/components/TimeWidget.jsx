import { useState, useEffect } from "react";
import "../styles/timeWidget.scss";

const TimeWidget = () => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const getTime = new Date().toLocaleTimeString("en-SR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(getTime);
  });

  return (
    <div className="time-container">
      <p>{time}</p>
    </div>
  );
};

export default TimeWidget;
