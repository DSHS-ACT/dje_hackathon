import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main.css';
import './Sponsor.css';

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

const Sponsor = () => {
  const sponsors = [
    {
      id: 1,
      logo: "/chungnam_logo.png", // 충남대학교 산학협력단 로고
      name: "충남대학교 산학협력단",
      description: "충남대학교 산학협력단은 2004년 설립 이래 대학의 우수한 연구 역량을 바탕으로 기업과 협력하여 새로운 기술과 가치를 창출합니다. 또한, 신기술 개발과 전문 인력 양성을 통해 지역 및 국가 경제 발전에 기여하며 함께 성장하는 국내 최고의 연구중심대학이 되기 위해 노력하고 있습니다.",
      type: "주최",
      website: "https://iuc.cnu.ac.kr/iuc/index.do"
    },
    {
      id: 2,
      logo: "/ACT_logo.png", // A.C.T.(KE) 로고
      name: "A.C.T.(KE)",
      description: "대전대신고등학교의 A.C.T.(KE)는 4차 산업 혁명 시대에 필요한 인재를 양성하는 최대 소프트웨어 동아리입니다. 학생 주도의 자율적인 학습과 다양한 프로젝트를 통해 학교 내외의 IT 문화 확산에 기여하고 있습니다.",
      members: [
        "송리안", "조민준", "박호연", "조건우", "박헌주", "백승우", "박성욱", "신기동",
        "신동건", "김선민", "김재민", "김태환", "안재민", "백현빈"
      ],
      type: "주관",
      website: "https://github.com/DSHS-ACT"
    },
    {
      id: 3,
      logo: "public/bizcool_logo.png", // 청소년 비즈쿨 재단 로고
      name: "청소년 비즈쿨",
      description: "청소년 비즈쿨은 청소년들이 기업가 정신과 창의적인 사고를 기를 수 있도록 돕는 교육 전문 기관입니다. 다양한 프로그램을 통해 학생들이 자신의 아이디어를 구체화하고 미래 사회의 주역으로 성장하도록 지원하고 있습니다.",
      type: "지원",
      website: "https://ebizcool.com/"
    },
    {
      id: 4,
      logo: "/djework_logo.png", // 대전일자리경제 진흥원 로고
      name: "대전일자리경제 진흥원",
      description: "대전일자리경제 진흥원은 대전 시민들의 일자리 창출을 돕고 지역 경제 활성화를 위해 다양한 지원 사업을 펼치는 기관입니다. 창업부터 기업 성장까지 종합적인 도움을 제공하여 대전의 경제 발전을 이끌고 있습니다.",
      type: "지원",
      website: "https://www.djbea.or.kr/intro"
    }
  ];

  return (
    <div className="sponsor-container">
      <Navigation />
      
      <div className="sponsor-content">
        <div className="sponsor-header">
          <h1>OUR SPONSORS & PARTNERS</h1>
          <p>해커톤을 함께 만들어가는 소중한 파트너들</p>
          <div className="header-divider"></div>
        </div>

        <div className="sponsors-section">
          {sponsors.map((sponsor, index) => (
            <div key={sponsor.id} className={`sponsor-block ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
              <div className="sponsor-visual">
                <div className="sponsor-logo-wrapper">
                  <img src={sponsor.logo} alt={`${sponsor.name} 로고`} className="sponsor-logo" />
                </div>
                <div className="sponsor-type-badge">
                  {sponsor.type}
                </div>
              </div>
              
              <div className="sponsor-details">
                <h2 className="sponsor-title">{sponsor.name}</h2>
                <p className="sponsor-description">{sponsor.description}</p>
                {sponsor.members && (
                  <div className="sponsor-members">
                    <h4 className="members-title">구성원</h4>
                    <p className="members-text">
                      {sponsor.members.join(', ')}
                    </p>
                  </div>
                )}
                <div className="sponsor-actions">
                  <a 
                    href={sponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sponsor-link"
                  >
                    웹사이트 방문 →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sponsor-footer">
          <div className="thank-you-section">
            <h3>🙏 감사의 말씀</h3>
            <p>
              모든 파트너 관계자 여러분의 소중한 지원 덕분에 
              <br />성공적인 해커톤 행사를 개최할 수 있었습니다.
            </p>
          </div>
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

export default Sponsor;
