import React from "react";
import { Navigate } from "react-router";

export const LandingPage = () => {
  const goToFolder = () => {
    Navigate("/folder");
  };

  const goToShared = () => {
    Navigate("/shared");
  };

  return (
    <div>
      {/* 버튼 추가 */}
      <button onClick={goToFolder}>(클릭) 폴더페이지로 이동</button>
      <br></br>
      <button onClick={goToShared}>(클릭) 링크페이지로 이동</button>
    </div>
  );
};
