import React from "react";
import "../../style/Profile/Career.css";
import "../../style/Profile/Profile.css";

const Career = () => {
  return (
    <>
      <div className="Career">
        <i
          className="fas fa-project-diagram"
          style={{ marginRight: "10px" }}
        ></i>
        Education
      </div>

      <ul className="CareerTitle">
        <li className="CareerText">
          삼성청년SW아카데미 11th ( 2024.01 ~ 2024.12 )
          <ul className="CareerSubText">
            <li>
              파이썬과 Django 프레임워크 학습, HTML, CSS 등 웹 기본 기술 습득,
              JavaScript 및 Vue.js 프론트엔드 프레임워크 경험.
            </li>
            <li>
              네 번의 프로젝트를 통해 React와 TypeScript를 학습하고, React
              Native를 이용한 모바일 애플리케이션 개발 경험.
            </li>
          </ul>
        </li>

        <li className="CareerText">
          경성대학교 빅데이터응용통계학과 (2018.03 ~ 2024.02)
          <ul className="CareerSubText">
            <li>파이썬을 활용한 데이터 전처리, 시각화 및 통계적 분석 실습</li>
            <li>
              음악 플랫폼 선택과 관련된 실제 설문조사를 실시하여 약 100명의
              데이터를 확보
            </li>
            <li>
              확보된 데이터를 가지고, 가설 검정과, 회귀 분석, 상관 분석을 실시
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Career;
