import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyLinkButton = ({ text }) => {
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
    <>
      <ContentCopyIcon
        style={{
          display: "flex",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          marginRight: "1rem",
          color: "black",
        }}
        onClick={copyToClipboard}
      ></ContentCopyIcon>
      <p
        style={{ fontSize: "0.9rem", cursor: "pointer" }}
        onClick={copyToClipboard}
      >
        링크 복사하기
      </p>
    </>
  );
};

export default CopyLinkButton;
