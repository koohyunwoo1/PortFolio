import "../../style/Profile/Certificate.css";

const Certificate = () => {
  return (
    <>
      <div className="Certificate">
        <i
          className="fas fa-project-diagram"
          style={{ marginRight: "10px" }}
        ></i>
        Certificate
      </div>
      <ul className="CertificateTitle">
        <li className="CertificateText">
          빅데이터 준전문가(Adsp)
          <ul className="CertificateSubText">
            <li>2023년 06월 취득</li>
          </ul>
        </li>

        <li className="CertificateText">
          정보처리 기사
          <ul className="CertificateSubText">
            <li>2025년 02월 필기 합격</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Certificate;
