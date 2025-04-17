import { useState, useEffect } from "react";

const DDayCounter = () => {
  const [dDay, setDDay] = useState(null);

  useEffect(() => {
    const targetDate = new Date("2025-09-20");
    const today = new Date();

    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDDay(daysDiff);
  }, []);

  return (
    <div>
      한건 <span style={{ color: "#7BBD00" }}>♥</span> 채영의 결혼식이{" "}
      <span style={{ color: "#7BBD00", fontWeight: "bold" }}>{dDay}일</span>{" "}
      남았습니다.
    </div>
  );
};

export default DDayCounter;
