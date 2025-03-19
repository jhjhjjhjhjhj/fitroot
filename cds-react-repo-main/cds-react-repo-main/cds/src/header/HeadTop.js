import React from "react";
import { Button } from "reactstrap";
import '../Section/excSection.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeadTop = () => {
    const navigate = useNavigate();
    const { name }  = useSelector((state) => state);
    const username = name;
    const joinIn = () => {
        navigate("/join");
    }

    const LoginIn = () => {
        navigate("/login");
    }
    const myPageIn = () => {
        navigate('/mypage')
    }
    return (
        <div id="headtop">
            {username === "" ?
                <div>
                    <Button onClick={joinIn} className="join" color="black">회원가입</Button>
                    <Button onClick={LoginIn} className="login" color="black">로그인</Button>
                </div>
                :
                <div>
                    <Button onClick={myPageIn} className="myPage" color="black">{username}님 환영합니다.</Button>
                </div>
            }
        </div>
    );
}

export default HeadTop;