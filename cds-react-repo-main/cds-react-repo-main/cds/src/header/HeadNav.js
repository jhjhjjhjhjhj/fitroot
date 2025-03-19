import React from "react";
import '../Section/excSection.css';
import { useNavigate, Link } from 'react-router-dom';

const HeadNav = (props) => {
    const navigate = useNavigate();
    const setHover = props.setHover;


    const navhover = () => {
        setHover(true);
    }
    const navhoverout = () => {
        setHover(false);
    }


    const bannerOnclick = () => {

        setTimeout(() => {
            navigate("/")
        }, 150);
    }

    return (
        <div className="navp">
            <img onClick={bannerOnclick}
                src={`${process.env.PUBLIC_URL}/headerlogo.webp`}
                alt="My Image"
                style={{ width: '300px', height: 'auto', cursor: 'pointer' }}
            />
            <div>
                <div className="class"></div>
                <nav id="nav" onMouseOver={navhover} onMouseOut={navhoverout}>
                    <div className="navi">
                        <Link className="link1" to="/board">공지사항</Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="navi">
                        <Link className="link1" to="/exercise">운동</Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="navi">
                        <Link className="link1" to="/menupage">식단</Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="navi">
                        <Link className="link1" to="/community">커뮤니티</Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="navi">
                        <Link className="link1" to="/profile">건강정보</Link>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeadNav;