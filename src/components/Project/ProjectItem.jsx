import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "../../style/Project/ProjectItem.css";
import MusicThumbnail from "../../assets/Music.png";
import GflexThumbnail from "../../assets/Gflex.png";
import PillSooThumbnail from "../../assets/PillSoo.png";
import RunUsThumbnail from "../../assets/RunUs.png";

const projects = [
  {
    id: 1,
    title: "RunUs",
    thumbnail: RunUsThumbnail,
    images: Array.from(
      { length: 6 },
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
      { length: 7 },
      (_, index) => `/assets/PillSoo/image${index}.jpg`
    ),
    period: "2024.08.26 - 2024.10.11 (7주)",
    link: "https://github.com/koohyunwoo1/Pillsoo",
  },
  {
    id: 3,
    title: "Music",
    thumbnail: MusicThumbnail,
    images: Array.from(
      { length: 4 },
      (_, index) => `/assets/Music/image${index}.png`
    ),
    period: "2024.10.14 - 2024.11.19 (6주)",
    link: "https://github.com/koohyunwoo1/Music_platform_JaeGuSong",
  },
  {
    id: 4,
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
    selectedImage: null,
  };

  openModal = (project) => {
    this.setState({ selectedProject: project });
  };

  closeModal = () => {
    this.setState({ selectedProject: null, selectedImage: null });
  };

  openImageModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeImageModal = () => {
    this.setState({ selectedImage: null });
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
                        <span className="projectBadge">Vue</span>
                      </>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <>
                        <span className="projectBadge">React</span>
                      </>
                    ) : this.state.selectedProject.title === "Music" ? (
                      <>
                        <span className="projectBadge">React</span>
                      </>
                    ) : (
                      <>
                        <span className="projectBadge">ReactNative</span>
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
                      : this.state.selectedProject.title === "Music"
                      ? "5명 (백엔드 2명, 프론트엔드 3명)"
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
                        - 프론트엔드 팀장
                        <br />
                        - 전체적인 UI 담당
                        <br />- Geolocation API를 사용하여 위치 정보를 받아오고,
                        알고리즘을 활용해 위치 튐 현상을 보정
                        <br />- 러닝 기록 페이지 구현
                      </>
                    ) : this.state.selectedProject.title === "Music" ? (
                      <>
                        - 프론트엔드 팀장
                        <br />
                        - 간단한 음악 플래시 게임 3가지 구현
                        <br />
                        - 실제 드럼 소리를 이용해서 들려준 드럼 소리를 따라치는
                        게임
                        <br />
                        - 들려주는 음역대를 맞추는 절대음감 게임
                        <br />
                        - 목소리 높낮이를 이용해서 위에서 떨어지는 장애물을
                        피하는 게임
                        <br />- 스프링 웹플럭스랑 연동해서 실시간 개인 채팅방,
                        단체 채팅방 구현
                      </>
                    ) : (
                      <>
                        - 프론트엔드 팀장
                        <br />
                        - 전체적인 UI 담당
                        <br />- 회원가입, 로그인, 로그아웃 구현
                        <br />- OCR 분석 구현
                        <br />- 현재 내가 복용중인 영양제 관리 스크린 구현
                        <br />- 구매하고 싶은 영양제 위시 리스트 스크린 구현
                        <br />- 영양제 추천 스크린(나이별, 현재 나의 건강상태
                        기반 영양제 추천)구현
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
                    ) : this.state.selectedProject.title === "Music" ? (
                      <div>
                        <strong style={{ fontSize: "18px" }}>
                          문제 발생 배경
                        </strong>
                        <br />
                        - 채팅방에서 나간 후, 채팅방 리스트에 변경 사항이
                        반영되지 않음. 새로고침 없이 채팅방이 나가지지 않는 문제
                        발생.
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>문제 원인</strong>
                        <br />
                        - 채팅방 나가기 후 서버에서 상태는 변경되지만,
                        클라이언트에서 실시간으로 채팅방 리스트를 갱신하지 않음.
                        <br />
                        - 클라이언트와 서버 간 실시간 통신 부족.
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>해결 과정</strong>
                        <br />
                        - WebSocket을 사용해 채팅방 나가기 후 서버에서
                        실시간으로 리스트 상태를 클라이언트에 전달.
                        <br />
                        - 클라이언트에서 채팅방 나가기 후, WebSocket을 통해
                        변경된 채팅방 리스트를 자동으로 갱신하도록 처리.
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>결과</strong>
                        <br />
                        - 채팅방 나가기 후, 새로고침 없이 실시간으로 채팅방
                        리스트가 갱신됨.
                        <br />
                      </div>
                    ) : (
                      <div>
                        <strong style={{ fontSize: "18px" }}>
                          문제 발생 배경
                        </strong>
                        <br />
                        - Google Vision API 사용 중 OCR 구현 시 인증 관련 오류
                        발생
                        <br />
                        -Access Token 만료 후 Refresh Token으로 재발급 불가
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>문제 원인</strong>
                        <br />
                        - Vision API는 API Key만으로 인증 가능
                        <br />
                        - 불필요한 OAuth 2.0 인증 방식 사용 시도
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>해결 과정</strong>
                        <br />
                        - Google Vision API 공식 문서 재확인
                        <br />
                        - API Key 방식으로 코드 수정 및 테스트 진행
                        <br />
                        <br />
                        <strong style={{ fontSize: "18px" }}>결과</strong>
                        <br />
                        - 불필요한 인증 절차 제거로 간단하고 안정적인 구현 성공
                        <br />- OCR 기능 요청 시 오류 없이 정상 작동 확인
                      </div>
                    )}
                  </p>
                </div>
              </div>
              <div className="projectImages">
                <h1>
                  프로젝트 이미지 소개
                  <br />
                  <span className="projectSmallText">
                    이미지 클릭시 확대됩니다.
                  </span>
                </h1>
                <p>
                  {this.state.selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      onClick={() => this.openImageModal(image)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </p>
              </div>
            </div>
          </div>
        )}
        {this.state.selectedImage && (
          <div
            className="modal"
            onClick={this.closeImageModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="modalContent"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "60vw",
                maxHeight: "60vh",
                backgroundColor: "transparent",
              }}
            >
              <span
                className="modalClose"
                onClick={this.closeImageModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "2em",
                  color: "white",
                  cursor: "pointer",
                  zIndex: "10",
                }}
              >
                &times;
              </span>
              <img
                src={this.state.selectedImage}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectItem;
