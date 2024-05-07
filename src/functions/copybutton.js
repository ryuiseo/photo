import React from "react";

const CopyTextButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("복사되었습니다!");
      })
      .catch((err) => {
        console.error("텍스트 복사 중 오류 발생:", err);
        alert("텍스트 복사에 실패했습니다.");
      });
  };

  return (
    <button
      style={{
        marginLeft: "0.5rem",
        backgroundColor: "transparent",
        border: "1px solid #929090",
        cursor: "pointer",
      }}
      onClick={copyToClipboard}
    >
      복사
    </button>
  );
};

export default CopyTextButton;
