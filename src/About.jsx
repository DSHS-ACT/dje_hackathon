import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main.css';
import './About.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <img src="/mainlogo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-menu">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
        <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
        <Link to="/results" className={`nav-item ${location.pathname === '/results' ? 'active' : ''}`}>RESULTS</Link>
        <Link to="/gallery" className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>GALLERY</Link>
        <Link to="/sponsor" className={`nav-item ${location.pathname === '/sponsor' ? 'active' : ''}`}>SPONSOR</Link>
      </div>
    </nav>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <Navigation />
      
      <div className="about-content">
        <div className="about-header">
          <h1>ABOUT HACK@THON</h1>
          <p>2025 대전시 청소년 창업캠프 SW해커톤</p>
        </div>

        <div className="about-sections">
          {/* 해커톤 소개 */}
          <section className="about-section">
            <div className="section-icon">🚀</div>
            <h2>해커톤 소개</h2>
            <p>
              <strong>"대전 지역 문제해결을 위한 창의적 솔루션 개발"</strong>을 주제로 하는 2025 대전시 청소년 창업캠프 SW해커톤입니다. 
              대전시 현안 중 자유 선택을 통해 실제 지역 문제를 해결하는 혁신적인 서비스를 개발하고, 
              미래의 창업가로 성장할 수 있는 기회를 제공합니다.
            </p>
            
            <div className="theme-section">
              <h4>💡 개발 주제 분야</h4>
              <div className="theme-grid">
                <div className="theme-card healthcare">
                  <span className="theme-label">A</span>
                  <span className="theme-name">항공우주</span>
                </div>
                <div className="theme-card bio">
                  <span className="theme-label">B</span>
                  <span className="theme-name">바이오헬스케어</span>
                </div>
                <div className="theme-card nano">
                  <span className="theme-label">C</span>
                  <span className="theme-name">나노·반도체</span>
                </div>
                <div className="theme-card defense">
                  <span className="theme-label">D</span>
                  <span className="theme-name">국방</span>
                </div>
              </div>
              <p className="theme-description">
                기타 가능 분야: <strong>교통, 환경, 교육, 문화, 안전, 생활</strong> 등 대전시 지역 현안과 관련된 모든 분야
              </p>
            </div>

            <div className="highlight-box">
              <strong>최종 산출물:</strong> 실제 동작하는 웹/앱 서비스<br/>
              <strong>Mission:</strong> 청소년 창업가 정신 함양 및 SW 개발 역량 강화<br/>
              <strong>Vision:</strong> 지역 문제 해결을 통한 사회적 가치 창출과 혁신적인 청소년 개발자 양성
            </div>
          </section>

          {/* 일정 및 스케줄 */}
          <section className="about-section">
            <div className="section-icon">📅</div>
            <h2>일정 및 스케줄</h2>
            <div className="schedule-grid">
              <div className="schedule-day">
                <h3>DAY 1 - 7.31.(목)</h3>
                <div className="schedule-item highlight">
                  <span className="time">08:40 - 09:00</span>
                  <span className="activity">등록 및 1일차 출석확인</span>
                  <span className="location">1층 스터디카페</span>
                </div>
                <div className="schedule-item">
                  <span className="time">09:10 - 09:50</span>
                  <span className="activity">개회식, 안전교육, 캠프안내, 기념사진</span>
                  <span className="location">4층 시청각실</span>
                </div>
                <div className="schedule-item">
                  <span className="time">10:00 - 11:30</span>
                  <span className="activity">기조강연 1 : 창업과 혁신의 이해</span>
                  <span className="location">4층 시청각실</span>
                </div>
                <div className="schedule-item break">
                  <span className="time">11:30 - 13:00</span>
                  <span className="activity">점심식사</span>
                  <span className="location">-</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:00 - 14:30</span>
                  <span className="activity">기조강연 2 : 벤처기업 창업 사례 공유</span>
                  <span className="location">4층 시청각실</span>
                </div>
                <div className="schedule-item">
                  <span className="time">14:30 - 14:50</span>
                  <span className="activity">분야별 교실 배정, 이동</span>
                  <span className="location">-</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:00 - 18:00</span>
                  <span className="activity">아이디어 도출 및 사업성 검토</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="day-end">1일차 종료</div>
              </div>
              
              <div className="schedule-day">
                <h3>DAY 2 - 8.1.(금)</h3>
                <div className="schedule-item highlight">
                  <span className="time">08:40 - 09:00</span>
                  <span className="activity">2일차 출석 확인</span>
                  <span className="location">1층 스터디카페</span>
                </div>
                <div className="schedule-item">
                  <span className="time">09:00 - 12:00</span>
                  <span className="activity">집중작업1 : 핵심기능 개발</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="schedule-item break">
                  <span className="time">12:00 - 13:30</span>
                  <span className="activity">점심식사</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:30 - 17:30</span>
                  <span className="activity">집중작업2 : UI/UX 구현</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="schedule-item break">
                  <span className="time">17:30 - 19:00</span>
                  <span className="activity">저녁식사</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="schedule-item">
                  <span className="time">19:00 - 20:30</span>
                  <span className="activity">집중작업3 : 기능완성 및 테스트</span>
                  <span className="location">각 팀별 공간</span>
                </div>
                <div className="schedule-item">
                  <span className="time">20:30 - 22:00</span>
                  <span className="activity">중간 발표 : 아이디어 및 구현 현황 발표 - 간식 제공</span>
                  <span className="location">부문별 공간</span>
                </div>
                <div className="day-end">2일차 종료</div>
              </div>
              
              <div className="schedule-day">
                <h3>DAY 3 - 8.2.(토)</h3>
                <div className="schedule-item">
                  <span className="time">09:00 - 11:00</span>
                  <span className="activity">시연영상, 노션페이지 제작</span>
                  <span className="location">팀별 자유 공간</span>
                </div>
                <div className="schedule-item final">
                  <span className="time">11:00</span>
                  <span className="activity">최종 제출</span>
                  <span className="location">온라인</span>
                </div>
                <div className="schedule-item break">
                  <span className="time">12:00 - 13:30</span>
                  <span className="activity">심사 및 정리</span>
                  <span className="location">온라인</span>
                </div>
                <div className="schedule-item ceremony">
                  <span className="time">13:30 - 14:00</span>
                  <span className="activity">시상 및 폐회식</span>
                  <span className="location">온라인</span>
                </div>
                <div className="day-note">폐회식 이후 사진 촬영 및 이수증 수여</div>
              </div>
            </div>
          </section>

          {/* 참가 대상 */}
          <section className="about-section">
            <div className="section-icon">👥</div>
            <h2>참가 대상</h2>
            <div className="target-grid">
              <div className="target-card">
                <h4>연령</h4>
                <p>만 17세 ~ 18세<br/>청소년</p>
              </div>
              <div className="target-card">
                <h4>지역</h4>
                <p>대전시 거주 또는<br/>대전 소재 학교 재학생</p>
              </div>
              <div className="target-card">
                <h4>관심분야</h4>
                <p>SW개발, 창업,<br/>기술혁신에 관심있는 청소년</p>
              </div>
              <div className="target-card">
                <h4>팀 구성</h4>
                <p>3-4명으로 구성<br/>(개인 참가 후 팀 매칭 가능)</p>
              </div>
            </div>
          </section>

          {/* 시상 내역 */}
          <section className="about-section">
            <div className="section-icon">🏆</div>
            <h2>시상 내역</h2>
            <div className="awards-grid">
              <div className="award-card gold">
                <div className="award-rank">1등</div>
                <div className="award-title">대상</div>
                <div className="award-prize">상품 20만원</div>
                <div className="award-benefit">AULA KTT 독거미 키보드</div>
              </div>
              <div className="award-card silver">
                <div className="award-rank">2등</div>
                <div className="award-title">최우수상</div>
                <div className="award-prize">상품 15만원</div>
                <div className="award-benefit">QCY 손목 위치</div>
              </div>
              <div className="award-card bronze">
                <div className="award-rank">3등</div>
                <div className="award-title">우수상</div>
                <div className="award-prize">상품 5만원</div>
                <div className="award-benefit">노트북 파우치 or 장패드</div>
              </div>
              <div className="award-card special">
                <div className="award-rank">참가자 전원</div>
                <div className="award-title">참가상</div>
                <div className="award-prize">기념품</div>
                <div className="award-benefit">+ 참가 이수증</div>
              </div>
            </div>
          </section>

          {/* 규칙 및 가이드라인 */}
          <section className="about-section">
            <div className="section-icon">📋</div>
            <h2>규칙 및 가이드라인</h2>
            <div className="rules-container">
              <div className="rules-column">
                <h4>참가 규정</h4>
                <ul>
                  <li>팀당 3-4명으로 구성 (필수)</li>
                  <li>3일 전 일정 참가 필수</li>
                  <li>개발 언어 및 플랫폼 제한 없음</li>
                  <li>오픈소스 라이브러리 사용 가능</li>
                  <li>기존 개발된 코드 사용 금지</li>
                </ul>
              </div>
              <div className="rules-column">
                <h4>제출 요구사항</h4>
                <ul>
                  <li>작동하는 프로토타입 또는 MVP</li>
                  <li>소스코드 (GitHub 등 공개 저장소)</li>
                  <li>프로젝트 설명서 및 발표자료</li>
                  <li>데모 영상 (선택사항)</li>
                  <li>비즈니스 모델 제안서</li>
                </ul>
              </div>
              <div className="rules-column">
                <h4>심사 기준</h4>
                <ul>
                  <li>창의성 및 혁신성 (30%)</li>
                  <li>기술적 완성도 (25%)</li>
                  <li>비즈니스 가능성 (20%)</li>
                  <li>사회적 가치 (15%)</li>
                  <li>발표 및 팀워크 (10%)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-title">HACK@THON</div>
          </div>
          <div className="footer-right">
            <div className="footer-copyright">© 2025 A.C.T.(KE). All rights reserved.</div>
            <div className="footer-developed">
              Developed by <a href="https://github.com/UntameDuck" target="_blank" rel="noopener noreferrer">UntameDuck</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
