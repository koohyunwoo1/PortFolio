import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "../../style/Project/ProjectItem.css";

import GflexThumbnail from "../../assets/Gflex.png";
import PillSooThumbnail from "../../assets/PillSoo.png";
import RunUsThumbnail from "../../assets/RunUs.png";

const projects = [
  {
    id: 1,
    title: "RunUs",
    thumbnail: RunUsThumbnail,
    images: Array.from(
      { length: 12 },
      (_, index) => `/assets/RunUs/image${index}.gif`
    ),
    period: "2024.07.05 - 2024.08.16 (6주)",
    link: "https://github.com/koohyunwoo1/RunUs",
  },
  {
    id: 2,
    title: "PillSoo",
    thumbnail: PillSooThumbnail,
    images: Array.from(
      { length: 12 },
      (_, index) => `/assets/PillSoo/image${index}.jpg`
    ),
    period: "2024.08.26 - 2024.10.11 (7주)",
    link: "https://github.com/koohyunwoo1/Pillsoo",
  },
  {
    id: 3,
    title: "Gflex",
    thumbnail: GflexThumbnail,
    images: Array.from(
      { length: 12 },
      (_, index) => `/assets/Gflex/image${index}.png`
    ),
    period: "2024.05.16 - 2024.05.24 (1주)",
    link: "https://github.com/koohyunwoo1/G-flex",
  },
];

class ProjectItem extends Component {
  state = {
    selectedProject: null,
  };

  openModal = (project) => {
    this.setState({ selectedProject: project });
  };

  closeModal = () => {
    this.setState({ selectedProject: null });
  };

  render() {
    return (
      <div className="projectItem">
        {projects.map((project) => (
          <div
            key={project.id}
            className="projectCard"
            onClick={() => this.openModal(project)}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="projectImage"
            />
            <div className="projectDetails">
              <h1>{project.title}</h1>
              <p className="projectPeriod">{project.period}</p>
            </div>
          </div>
        ))}

        {this.state.selectedProject && (
          <div className="modal" onClick={this.closeModal}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <span className="modalClose" onClick={this.closeModal}>
                &times;
              </span>
              <div className="modalHeader">
                <h2 style={{ color: "white", marginLeft: "20px" }}>
                  {this.state.selectedProject.title}
                </h2>
                <a
                  href={this.state.selectedProject.link}
                  className="githubButton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ fontSize: "24px" }} /> GitHub
                </a>
              </div>
              <div className="projectDetail">
                <p className="projectPeriod">
                  {this.state.selectedProject.period}
                </p>
                <div className="projectSkills">
                  <h1>Skills</h1>
                  <div>
                    {this.state.selectedProject.title === "Gflex" ? (
                      <>
                        {/* <span className="projectBadge">Django</span> */}
                        <span className="projectBadge">Vue.js</span>
                      </>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <>
                        <span className="projectBadge">React.js</span>
                        {/* <span className="projectBadge">Spring</span> */}
                      </>
                    ) : (
                      <>
                        <span className="projectBadge">ReactNative</span>
                        {/* <span className="projectBadge">Spring</span> */}
                      </>
                    )}
                  </div>
                </div>

                <div className="projectTools">
                  <h1>Tools</h1>
                  <div>
                    {this.state.selectedProject.title === "Gflex" ? (
                      <span className="projectBadge">Visual Studio</span>
                    ) : (
                      <>
                        <span className="projectBadge">Visual Studio</span>
                        <span className="projectBadge">MySQL</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="projectTeam">
                  <h1>개발 인원</h1>
                  <p>
                    {this.state.selectedProject.title === "Gflex"
                      ? "2명 (백엔드 1명, 프론트엔드 1명)"
                      : this.state.selectedProject.title === "RunUs"
                      ? "7명 (백엔드 5명, 프론트엔드 2명)"
                      : "6명 (백엔드 4명, 프론트엔드 2명)"}
                  </p>
                </div>
                <div className="projectRole">
                  <h1>역할</h1>
                  <p>
                    {this.state.selectedProject.title === "Gflex" ? (
                      <>
                        - 기획
                        <br />- 프론트엔드(Vue.js)를 이용해 REST API 연결
                      </>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <>
                        - 기획
                        <br />
                        - 전체적인 UI 담당
                        <br />
                        - Auth 기능을 제외한 모든 기능 개발
                        <br />- Geolocation API를 사용하여 위치 정보를 받아오고,
                        알고리즘을 활용해 위치 튐 현상을 보정
                      </>
                    ) : (
                      <>
                        - 기획
                        <br />
                        - 전체적인 UI 담당
                        <br />- Auth 기능, REST API, OCR 분석 담당
                      </>
                    )}
                  </p>
                </div>

                <div className="projectFeel">
                  <h1>트러블 슈팅</h1>
                  <p>
                    {this.state.selectedProject.title === "Gflex" ? (
                      <div>
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 발생 배경
                        </strong>
                        <br />- JSON 형식으로 데이터를 받을 시 이미지 렌더링
                        과정에서 문제 발생
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 원인:
                        </strong>
                        <br />
                        - 템플릿 문법 오류 src 속성에 참조가 잘못 되었음.
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          해결 과정:
                        </strong>
                        <br />
                        - v-if 조건문을 사용하여서 데이터가 준비 된 후에만
                        이미지를 렌더링 할 수 있도록 설정
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          결과:
                        </strong>
                        <br />- 영화 포스터 이미지를 렌더링 하였음.
                      </div>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <div>
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 발생 배경
                        </strong>
                        <br />- GPS 데이터를 받아오는 과정에서 위치 튐 현상 발생
                        <br />
                        - 웹소켓 연결이 자주 끊어지는 현상 발생
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 원인:
                        </strong>
                        <br />
                        - GPS 신호 불안정 및 데이터 수집 시간 차이로 인한 위치
                        튐 현상 발생 <br />
                        - 네트워크 상태 변화 및 서버 부하로 인해 웹 소켓 연결
                        불안정
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          해결 과정:
                        </strong>
                        <br />
                        - 이동 거리와 시간을 계산하여 위치가 비정상적으로 튀었을
                        때 최대 이동 가능한 거리로 대체하는 GPS 데이터 필터링
                        알고리즘을 개발함 <br />
                        - 연결 끊김 감지 및 자동 재연결 로직을 구현하여 안정적인
                        연결 유지
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          결과:
                        </strong>
                        <br />
                        - 이동 거리 오차 10m 이내로 정확도 향상 <br /> - 웹 소켓
                        연결 안정성을 확보하여 단체 러닝 측정 기능이 원활히
                        작동함
                      </div>
                    ) : (
                      <div>
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 발생 배경
                        </strong>
                        <br />- GPS 데이터를 받아오는 과정에서 위치 튐 현상 발생
                        <br />
                        - 웹소켓 연결이 자주 끊어지는 현상 발생
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          문제 원인:
                        </strong>
                        <br />
                        - GPS 신호 불안정 및 데이터 수집 시간 차이로 인한 위치
                        튐 현상 발생 <br />
                        - 네트워크 상태 변화 및 서버 부하로 인해 웹 소켓 연결
                        불안정
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          해결 과정:
                        </strong>
                        <br />
                        - 이동 거리와 시간을 계산하여 위치가 비정상적으로 튀었을
                        때 최대 이동 가능한 거리로 대체하는 GPS 데이터 필터링
                        알고리즘을 개발함 <br />
                        - 연결 끊김 감지 및 자동 재연결 로직을 구현하여 안정적인
                        연결 유지
                        <br />
                        <br />
                        <strong
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          결과:
                        </strong>
                        <br />
                        - 이동 거리 오차 10m 이내로 정확도 향상 <br /> - 웹 소켓
                        연결 안정성을 확보하여 단체 러닝 측정 기능이 원활히
                        작동함
                      </div>
                    )}
                  </p>
                </div>
              </div>
              <div className="projectImages">
                {this.state.selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`project ${index}`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectItem;
