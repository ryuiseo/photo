import { useState, useEffect } from "react";

const DDayCounter = () => {
  const [dDay, setDDay] = useState(null);

  useEffect(() => {
    const targetDate = new Date("2024-11-09");
    const today = new Date();

    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDDay(daysDiff);
  }, []);

  return (
    <div>
      찬섭 <span style={{ color: "#FF9C9C" }}>♥</span> 선우의 결혼식이{" "}
      <span style={{ color: "#FF9C9C" }}>{dDay}일</span> 남았습니다.
    </div>
  );
};

export default DDayCounter;
