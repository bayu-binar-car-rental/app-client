import { useEffect, useState } from "react";

export default function useTimer(deadline: string) {
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  const getTime = (deadline: string) => {
    console.log(deadline);
    const time = Date.parse(deadline) - Date.now();

    const calculateHour = Math.floor((time / (1000 * 60 * 60)) % 24).toString();
    if (calculateHour.length === 1) {
      setHours("0" + calculateHour);
    } else {
      setHours(calculateHour);
    }

    const calculateMinute = Math.floor((time / 1000 / 60) % 60).toString();
    if (calculateMinute.length === 1) {
      setMinutes("0" + calculateMinute);
    } else {
      setMinutes(calculateMinute);
    }

    const calculateSecond = Math.floor((time / 1000) % 60).toString();
    if (calculateSecond.length === 1) {
      setSeconds("0" + calculateSecond);
    } else {
      setSeconds(calculateSecond);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return { hours, minutes, seconds };
}
