import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main.css';
import './Results.css';

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

const Results = () => {
  // 수상팀 데이터 (링크는 나중에 추가)
  const winnerTeams = [
    {
      id: 1,
      teamName: "싸장님",
      award: "grand-prize",
      description: "고령층 계약서 위험도 분석 및 이력 관리 플랫폼 'DealChecker' 개발",
      link: "https://www.notion.so/2025-2412bfa9bbed80458f7cfd8f750b88ac" // 여기에 링크를 추가하세요
    },
    {
      id: 2,
      teamName: "Pioneer",
      award: "excellence-prize",
      description: "전화 예약 고객 대상 선결제 연동 시스템을 통한 노쇼 방지 솔루션 개발",
      link: "https://bright-dog-ca5.notion.site/2025-241574e3b9758037bff9cd00b114491e?source=copy_link" // 여기에 링크를 추가하세요
    },
    {
      id: 3,
      teamName: "Actor",
      award: "excellence-prize",
      description: "배우 지망생 영상 포트폴리오 제작 및 오디션 매칭 플랫폼 'ACTOR' 개발",
      link: "" // 여기에 링크를 추가하세요
    },
    {
      id: 4,
      teamName: "좀인성",
      award: "merit-prize",
      description: "대전 연구원 기반 진로탐색형 멘토링 매칭 서비스 'CSCT' 개발",
      link: "https://www.notion.so/HACK-THON-241dd544503880f484a0ff71ba4226b3?source=copy_link" // 여기에 링크를 추가하세요
    },
    {
      id: 5,
      teamName: "삼위일대",
      award: "merit-prize",
      description: "자가용 의존도를 줄이고 탄소 배출을 저감하는 친환경 탑승형 모빌리티 플랫폼",
      link: "https://handy-naranja-74c.notion.site/2025-242af63de3a380da88a2f1f03524b1e5?source=copy_link" // 여기에 링크를 추가하세요
    },
    {
      id: 6,
      teamName: "PSMFD",
      award: "merit-prize",
      description: "범죄 데이터를 활용한 민간 방호형 안전 귀갓길 추천 스마트 지도 서비스 'DBSA' 개발",
      link: "" // 여기에 링크를 추가하세요
    }
  ];

  // 카드 클릭 핸들러
  const handleCardClick = (team) => {
    if (team.link && team.link.trim() !== "") {
      window.open(team.link, '_blank', 'noopener,noreferrer');
    } else {
      alert(`${team.teamName}팀의 소개 사이트 링크가 아직 준비중입니다.`);
    }
  };

  useEffect(() => {
    // 컨페티 생성 함수
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      document.body.appendChild(confettiContainer);

      // 컨페티 조각들 생성
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // 랜덤 색상
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#fecca7', '#FFD700', '#ff9ff3', '#54a0ff'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // 랜덤 위치와 애니메이션 딜레이
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        confettiContainer.appendChild(confetti);
      }

      // 5초 후 컨페티 제거
      setTimeout(() => {
        if (confettiContainer && confettiContainer.parentNode) {
          confettiContainer.parentNode.removeChild(confettiContainer);
        }
      }, 2500);
    };

    // 페이지 로드 시 컨페티 실행
    createConfetti();
  }, []);

  return (
    <div className="results-container">
      <Navigation />
      
      {/* 메인 수상자 섹션 - 첫 화면 */}
      <div className="main-winners-section">
        <header className="results-header">
          <h1>HACK@THON FINAL RESULT</h1>
          <p>DAEJEON HACKATHON AWARD RESULTS</p>
        </header>

        <div className="winners-list-container">
          {winnerTeams.map((team) => (
            <div 
              key={team.id}
              className={`winner-item ${team.award} clickable-card`}
              onClick={() => handleCardClick(team)}
              style={{ cursor: 'pointer' }}
              title={`${team.teamName}팀 소개 사이트로 이동`}
            >
              <div className="team-label">{team.teamName}</div>
              <div className="team-description">{team.description}</div>
              <div className="click-indicator">🔗 클릭하여 소개 사이트 보기</div>
            </div>
          ))}
        </div>

      </div>

      {/* 상세 결과 섹션 */}
      <div className="detailed-results">
        {/* 1. 행사 결과 */}
        <section className="event-results-section">
          <h2>📊 행사 개요</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">60명</div>
              <div className="stat-label">참가자</div>
              <div className="stat-detail">15팀 구성</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍💼</div>
              <div className="stat-number">30명</div>
              <div className="stat-label">운영 인원</div>
              <div className="stat-detail">행사 운영진</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🧑‍🏫</div>
              <div className="stat-number">15명</div>
              <div className="stat-label">멘토</div>
              <div className="stat-detail">전문가 멘토링</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📱</div>
              <div className="stat-number">15개</div>
              <div className="stat-label">프로젝트</div>
              <div className="stat-detail">혁신적인 아이디어</div>
            </div>
          </div>
        </section>

        {/* 3. 평가 기준 */}
        <section className="evaluation-section">
          <h2>⚖️ 평가 기준</h2>
          <div className="evaluation-grid">
            <div className="eval-item">
              <div className="eval-percentage">10%</div>
              <div className="eval-title">주제 적합성</div>
              <div className="eval-desc">해당 서비스가 제시된 주제와 적합한가?</div>
            </div>
            <div className="eval-item">
              <div className="eval-percentage">20%</div>
              <div className="eval-title">창의성</div>
              <div className="eval-desc">아이디어가 창의적이고 혁신적인가?<br/>기존 서비스/플랫폼과 차별화되는 독창적 요소가 있는가?</div>
            </div>
            <div className="eval-item">
              <div className="eval-percentage">30%</div>
              <div className="eval-title">사용자 경험과 디자인</div>
              <div className="eval-desc">사용자 인터페이스(UI)가 직관적이고 이해하기 쉬운가?<br/>서비스 정보가 명확하게 전달되는가?<br/>사용자 경험(UX)을 고려하여 디자인되었는가?</div>
            </div>
            <div className="eval-item">
              <div className="eval-percentage">30%</div>
              <div className="eval-title">기술 실현</div>
              <div className="eval-desc">핵심 문제를 해결할 수 있는 최소 기능이 구현되었는가?<br/>적절한 프로그래밍 기술을 선택하여 개발하였는가?<br/>기능이 완성도 있게 구현되었는가?</div>
            </div>
            <div className="eval-item">
              <div className="eval-percentage">10%</div>
              <div className="eval-title">사업 모델의 실현성</div>
              <div className="eval-desc">실현 가능하고 지속가능한 사업 모델을 제시하였는가?</div>
            </div>
          </div>
        </section>

        {/* 4. 팀별 제출 주제 */}
        <section className="projects-section">
          <h2>💡 팀별 제출 주제</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="team-name">GPS</div>
              <div className="project-title">뇌 건강 증진을 위한 생체리듬 기반 집중력 향상 시간관리 플랫폼 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">CREATOR</div>
              <div className="project-title">과학기술 분야 진로 탐색을 위한 대전 특화 R&D 체험 플랫폼 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">DDD</div>
              <div className="project-title">우주·항공 테마 기반 대전 연계 AR 탐방 RPG 게임 '꿈돌이GO' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">아카츠키</div>
              <div className="project-title">스트레스 저감을 위한 서브리미널 기법 모바일 감정 회복 웰스케어 앱 게임</div>
            </div>
            <div className="project-card">
              <div className="team-name">삼위일대</div>
              <div className="project-title">자가용 의존도를 줄이고 탄소 배출을 저감하는 친환경 탑승형 모빌리티 플랫폼</div>
            </div>
            <div className="project-card">
              <div className="team-name">애견보이즈</div>
              <div className="project-title">청년 인재를 위한 스카우트 기반 채용 연결 플랫폼 '워크 파인더' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">PSMFD</div>
              <div className="project-title">범죄 데이터를 활용한 민간 방호형 안전 귀갓길 추천 스마트 지도 서비스 'DBSA' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">좀인성</div>
              <div className="project-title">대전 연구원 기반 진로탐색형 멘토링 매칭 서비스 'CSCT' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">샹크스</div>
              <div className="project-title">AI 예측 모델을 기반으로 한 홍수 대응 및 대피 안내 시스템 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">오랑마켓</div>
              <div className="project-title">고등학생 간 멘토링과 중고 거래를 결합한 커뮤니티 플랫폼 '스터디메이트' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">싸장님</div>
              <div className="project-title">고령층 계약서 위험도 분석 및 이력 관리 플랫폼 'DealChecker' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">S.H.R</div>
              <div className="project-title">걷기를 통한 건강 증진과 대전 관광을 위한 위치 기반 마일리지 바이오헬스 플랫폼</div>
            </div>
            <div className="project-card">
              <div className="team-name">404 ERROR</div>
              <div className="project-title">사고력 강화를 위한 독서 중심 습관 훈련 앱 '피피셜로 적어줘' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">Actor</div>
              <div className="project-title">배우 지망생 영상 포트폴리오 제작 및 오디션 매칭 플랫폼 'ACTOR' 개발</div>
            </div>
            <div className="project-card">
              <div className="team-name">Pioneer</div>
              <div className="project-title">전화 예약 고객 대상 선결제 연동 시스템을 통한 노쇼 방지 솔루션 개발</div>
            </div>
          </div>
        </section>

        {/* 마무리 */}
        <section className="closing-section">
          <div className="closing-content">
            <h2>🎉 수고하셨습니다!</h2>
            <p>모든 참가팀들의 열정과 노력에 감사드립니다.<br/>
            혁신적인 아이디어와 기술로 대전의 미래를 밝혀주셔서 고맙습니다.</p>
          </div>
        </section>
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

export default Results;
