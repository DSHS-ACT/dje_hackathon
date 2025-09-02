import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './main.css';
import './Gallery.css';

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

const Footer = () => {
  return (
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
  );
};

const Gallery = () => {
  // 각 날짜별 플레이스홀더 개수
  const galleryData = {
    "DAY 1": 12,
    "DAY 2": 23,
    "DAY 3": 20
  };

  // DAY 1 이미지 목록
  const day1Images = [
    "d1 (1).jpg",
    "d1 (1).png", 
    "d1 (2).jpg",
    "d1 (3).jpg",
    "d1 (4).jpg",
    "d1 (5).jpg",
    "d1 (6).jpg",
    "d1 (7).jpg",
    "d1 (8).jpg",
    "d1 (9).jpg",
    "d1 (10).jpg",
    "d1 (11).jpg"
  ];

  // DAY 2 이미지 목록
  const day2Images = [
    "d2 (1).jpg",
    "d2 (2).jpg",
    "d2 (3).jpg",
    "d2 (4).jpg",
    "d2 (5).jpg",
    "d2 (6).jpg",
    "d2 (7).jpg",
    "d2 (8).jpg",
    "d2 (9).jpg",
    "d2 (10).jpg",
    "d2 (11).jpg",
    "d2 (12).jpg",
    "d2 (13).jpg",
    "d2 (14).jpg",
    "d2 (15).jpg",
    "d2 (16).jpg",
    "d2 (17).jpg",
    "d2 (18).jpg",
    "d2 (19).jpg",
    "d2 (20).jpg",
    "d2 (21).jpg",
    "d2 (22).jpg",
    "d2 (23).jpg"
  ];

  // DAY 3 이미지 목록
  const day3Images = [
    "d3 (1).png",
    "d3 (2).png",
    "d3 (3).png",
    "d3 (4).png",
    "d3 (5).png",
    "d3 (6).png",
    "d3 (7).png",
    "d3 (8).png",
    "d3 (9).png",
    "d3 (10).png",
    "d3 (11).png",
    "d3 (12).png",
    "d3 (13).png",
    "d3 (14).png",
    "d3 (15).png",
    "d3 (16).png",
    "d3 (17).png",
    "d3 (18).png",
    "d3 (19).png",
    "d3 (20).png"
  ];

  return (
    <div className="gallery-container">
      <Navigation />
      
      <div className="gallery-content">
        <div className="gallery-header">
          <h1>HACK@THON GALLERY</h1>
          <p>3일간의 열정과 도전이 담긴 소중한 순간들</p>
        </div>
        
        {/* 일차별 갤러리 섹션 */}
        {Object.entries(galleryData).map(([day, count]) => (
          <div key={day} className="day-section">
            <h2 className="day-title">{day}</h2>
            <div className="images-grid">
              {day === "DAY 1" ? (
                // DAY 1은 실제 이미지 표시
                day1Images.map((imageName, index) => (
                  <div key={index} className="image-item">
                    <img 
                      src={`/D1/${imageName}`} 
                      alt={`DAY 1 - ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))
              ) : day === "DAY 2" ? (
                // DAY 2도 실제 이미지 표시
                day2Images.map((imageName, index) => (
                  <div key={index} className="image-item">
                    <img 
                      src={`/D2/${imageName}`} 
                      alt={`DAY 2 - ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))
              ) : day === "DAY 3" ? (
                // DAY 3도 실제 이미지 표시
                day3Images.map((imageName, index) => (
                  <div key={index} className="image-item">
                    <img 
                      src={`/D3/${imageName}`} 
                      alt={`DAY 3 - ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))
              ) : (
                // 다른 날짜는 플레이스홀더 표시
                Array.from({ length: count }, (_, index) => (
                  <div key={index} className="image-placeholder">
                    <div className="placeholder-content">
                      <span>{day} - {index + 1}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;