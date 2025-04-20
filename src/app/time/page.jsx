'use client';
import React from "react";

export default function Time() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" , justifyContent: "center" }} className=" text-2xl rounded-lg p-2 m-2">{time}</h1>
    </div>
  );
}