import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import '../Section/excSection.css';


function Footer({ handleShow }) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p><span onClick={() => handleShow('privacy')} className="footer-link"><strong>개인정보처리방침</strong></span> <span onClick={() => handleShow('terms')} className="footer-link"><strong>이용약관</strong></span></p>
                    <p>상호: (주)코등생컴퍼니  | 대표자: 서수민</p>
                    <p>개인정보취급담당자: 임도현</p>
                    <p>사업자등록번호: 123-45-67891</p>
                    <p>주소: 충남 천안시 동남구 대흥로 215, 8층 6강의실</p>
                </div>
                <div className="footer-center">
                    <h4>고객센터 041-561-1122</h4>
                    <p><strong></strong></p> {/* 전화번호를 굵게 표시 */}
                    <p>평일 11:00 ~ 18:00 | 점심시간 13:00 ~ 14:00</p>
                    <p>(토, 일요일 및 공휴일 휴무)</p>
                    <p>고객문의: teamBeACodingPro@coding.com</p>
                </div>
                <div className="footer-right">
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/accounts/login/?next=%2Fsyiqxh%2Ftagged%2F&source=profile_tagged_tab&locale=ko-KR" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="footer-icon" />
                        </a>
                        <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="footer-icon" />
                        </a>
                    </div>
                    <div className="footer-action">
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;