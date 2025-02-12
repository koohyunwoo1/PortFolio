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
            <li>12개월간 총 1600시간의, SW 개발 집중 교육 수료</li>
            <li>
              파이썬과 Django 프레임워크 학습, HTML, CSS 등 웹 기본 기술 습득,
              JavaScript 및 Vue.js 프론트엔드 프레임워크 습득.
            </li>
            <li>
              4회의 팀 프로젝트를 통해 React와 TypeScript를 학습하고, React
              Native를 이용한 모바일 애플리케이션 개발 경험.
            </li>
          </ul>
        </li>

        <li className="CareerText">
          경성대학교 빅데이터응용통계학과 (2018.03 ~ 2024.02)
          <ul className="CareerSubText">
            <li>
              타이타닉 데이터셋과, 꽃잎 데이터셋을 사용하여 데이터전처리, 탐색적
              데이터 분석(EDA) 통계적 분석 수행
            </li>
            <li>Pandas, NumPy, Matplotlib, Seaborn등 라이브러리 사용</li>
            <li>
              실제 설문조사를 통해 얻은 데이터를 SPSS 프로그램을 이용해
              상관분석, 회귀분석 등의 기법을 사용하여 데이터 분석 실행
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Career;
