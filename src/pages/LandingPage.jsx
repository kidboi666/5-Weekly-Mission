import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const goToFolder = () => {
    navigate("/folder");
  };
  const goToShared = () => {
    navigate("/shared");
  };

  return (
    <div>
      <button onClick={goToFolder}>(클릭) 폴더페이지로 이동</button>
      <br></br>
      <button onClick={goToShared}>(클릭) 링크페이지로 이동</button>
    </div>
  );
};
