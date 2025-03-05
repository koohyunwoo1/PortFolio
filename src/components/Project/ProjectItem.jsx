import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "../../style/Project/ProjectItem.css";
import projects from "../../constants/Project/Project";

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
                        <span className="projectBadge">JavaScript</span>
                        <span className="projectBadge">Vue</span>
                      </>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <>
                        <span className="projectBadge">JavaScript</span>
                        <span className="projectBadge">React</span>
                        <span className="projectBadge">Context API</span>
                        <span className="projectBadge">Geolocation API</span>
                        <span className="projectBadge">OpenWeatherMap API</span>
                      </>
                    ) : this.state.selectedProject.title === "Music" ? (
                      <>
                        <span className="projectBadge">TypeScript</span>
                        <span className="projectBadge">React</span>
                      </>
                    ) : (
                      <>
                        <span className="projectBadge">TypeScript</span>
                        <span className="projectBadge">ReactNative</span>
                        <span className="projectBadge">Redux</span>
                        <span className="projectBadge">Google Vision API</span>
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
                        <span className="projectBadge">기획</span>
                        <span className="projectBadge">프론트엔드</span>
                      </>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <>
                        <span className="projectBadge">기획</span>
                        <span className="projectBadge">프론트엔드 팀장</span>
                      </>
                    ) : this.state.selectedProject.title === "Music" ? (
                      <>
                        <span className="projectBadge">기획</span>
                        <span className="projectBadge">프론트엔드</span>
                      </>
                    ) : (
                      <>
                        <span className="projectBadge">기획</span>
                        <span className="projectBadge">프론트엔드 팀장</span>
                      </>
                    )}
                  </p>
                </div>

                <h1 style={{ fontSize: "18px", color: "bisque" }}>기능</h1>
                <div className="projectFeel">
                  <p>
                    {this.state.selectedProject.title === "Gflex" ? (
                      <div>
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            메인 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ G-flex 추천 Top 10 영화를 슬라이드 형식으로
                            보여주는 carousel 라이브러리 구현
                            <br />∙ 영화 검색 기능을 제공하는 검색 바 추가로
                            사용자의 편리한 영화 탐색 지원
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            영화 상세 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ 영화 정보를 동적으로 렌더링하여 최신 정보 제공
                            <br />∙ 좋아요 기능 구현으로, 하트 아이콘 클릭 시
                            색상 변화와 좋아요 숫자 업데이트
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            무드/기분별 영화 선택 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ 기분/무드 태그 버튼을 사용하여 선택 시 버튼 색상
                            변화
                            <br />∙ 선택된 태그로 영화 검색 후, 검색 버튼 클릭
                            시 화면 자동 스크롤 및 해당 영화 포스터 렌더링
                          </div>
                          <br />
                        </div>
                      </div>
                    ) : this.state.selectedProject.title === "RunUs" ? (
                      <div>
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            메인 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ 현재 위치 정보를 지도로 표시
                            <br />∙ OpenWeatherMap API를 이용해 현재 위치의
                            날씨예보를 렌더링
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            리포트 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ 월별로 운동 거리 데이터를 시각화하여 recharts
                            라이브러리를 사용하여 그래프로 제공
                            <br />
                            ∙ 다양한 운동 모드를 기준으로 필터링 기능 구현
                            <br />
                            ∙ 페이지 상단으로 빠르게 이동할 수 있는 상단으로
                            이동 버튼 추가
                            <br />∙ 무한 스크롤 구현하여, 리포트 데이터를
                            효율적으로 렌더링
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            러닝 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ Geolocation API를 활용하여 사용자의 이동 경로를
                            실시간으로 추적하고 거리 변화 반영
                            <br />
                            ∙ 위치 튐 현상 해결을 위한 알고리즘 개발, 위치
                            오차를 5m 이내로 개선
                            <br />
                            ∙ 팀 러닝 모드에서 WebSocket을 이용하여 팀원의
                            위치를 실시간으로 지도에 렌더링
                            <br />
                            ∙ 운동 시작 전 3-2-1 카운트다운 화면 구현으로 사용자
                            경험 향상
                            <br />∙ 팀 방에 입장하기 위해 QR 코드 스캔 기능을
                            도입, 사용자 편의성 강화
                          </div>
                          <br />
                        </div>
                      </div>
                    ) : this.state.selectedProject.title === "Music" ? (
                      <div>
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            게임 페이지
                          </strong>
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            <br />
                            ∙ Tone 라이브러리를 활용하여 음정을 가져와 들려주는
                            음감을 맞추는 절대음감 게임 구현
                            <br />
                            ∙ 실제 드럼 소리를 재생하고, 앞서 나오는 드럼 소리를
                            듣고 그대로 따라 치는 게임 구현
                            <br />∙ 사용자의 목소리 옥타브를 활용하여 음표를
                            피하는 게임 구현
                          </div>
                          <br />
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            채팅
                          </strong>
                          <br />
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            ∙ Spring WebFlux를 활용하여 비동기적이고 실시간으로
                            동작하는 1:1 채팅 시스템 구현
                            <br />
                            ∙ 실시간으로 현재 참여 중인 채팅방 리스트를 동적으로
                            렌더링하여 사용자 경험 향상
                            <br />∙ 채팅방 나가기 버튼을 통해 사용자가 채팅방을
                            떠날 때 즉시 해당 채팅방을 동적으로 삭제하는 기능
                            구현
                          </div>
                          <br />
                        </div>
                        <br />
                      </div>
                    ) : (
                      <div>
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            검색 페이지
                          </strong>
                          <br />
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            ∙ 영양제 검색 시, 실시간으로 키 입력에 따라 동적으로
                            영양제 정보를 렌더링하여 사용자 편의성 향상
                            <br />
                            ∙ 무한 스크롤 구현을 통해 효율적으로 영양제 정보를
                            렌더링, 페이지 로딩 시간을 최소화하고 사용자 경험
                            개선
                            <br />
                          </div>
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            영양제 상세 페이지
                          </strong>
                          <br />
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            ∙ 영양제 상세 정보 (효능, 주의사항, 유통기한 등)을
                            동적으로 렌더링하여 사용자가 필요한 정보를 손쉽게
                            확인
                            <br />
                            ∙ 복용중 클릭 시, 해당 영양제를 위시 리스트로
                            자동으로 전송하여 편리한 관리 제공
                            <br />
                            ∙ 위시 리스트 담기 클릭 시, 선택된 영양제를 위시
                            리스트에 추가하여 개인화된 관리 기능 제공
                            <br />
                          </div>
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            위시 리스트/복용중인 페이지
                          </strong>
                          <br />
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            ∙ 위시 리스트와 복용 중인 영양제를 리스트 형식으로
                            효율적으로 렌더링하여 사용자가 한눈에 볼 수 있도록
                            구현
                            <br />∙ 구매하러 가기 버튼을 클릭 시, 사용자가
                            네이버 쇼핑으로 직접 이동할 수 있도록 연동하여
                            편리한 쇼핑 경험 제공
                          </div>
                        </div>
                        <br />
                        <div>
                          <strong
                            style={{
                              fontSize: "18px",
                            }}
                          >
                            영양제 추천 페이지
                          </strong>
                          <br />
                          <br />
                          <div
                            style={{
                              fontSize: "14px",
                            }}
                          >
                            ∙ 사용자 맞춤형 영양제 추천 기능을 구현하여, 개별
                            사용자의 건강 상태에 최적화된 영양제를 자동으로
                            렌더링
                            <br />
                            ∙ 건강 카테고리별 영양제 추천 페이지에서, 사용자가
                            영양제를 가로 슬라이드 형식으로 손쉽게 탐색할 수
                            있도록 UI 개선
                            <br />
                            ∙ 현재 건강 상태를 텍스트로 입력하면, 입력 내용에
                            맞는 영양제를 추천해주는 기능과 함께 로딩 스피너를
                            구현하여 사용자가 대기하는 동안 더욱 직관적인 UX
                            제공
                            <br />
                            ∙ OCR 스캔 기능을 추가하여 영양제의 로고나 이름을
                            스캔한 후, 자동으로 영양제를 검색할 수 있는 기능
                            구현
                            <br />
                            ∙ 스캔 결과가 정확하지 않은 경우, 사용자가 텍스트를
                            수정할 수 있는 인터페이스를 제공하여 정확한 정보를
                            손쉽게 입력할 수 있도록 UX 개선
                            <br />
                          </div>
                        </div>
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
