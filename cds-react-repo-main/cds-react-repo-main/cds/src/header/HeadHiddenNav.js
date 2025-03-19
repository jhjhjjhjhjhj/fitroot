import React from "react";
import '../Section/excSection.css';
import { useNavigate } from "react-router-dom";
import { useSelect } from "../AppContext";
const HeadHiddenNav = (props) => {
    const navigate = useNavigate();

    //hidden 숨기기
    const hidden = props.hidden;
    const setHidden = props.setHidden;
    const hover = props.hover;
    const { setcommuSelect, setboardSelect, setmenuSelect } = useSelect();

    const hiddenStyle = {
        visibility: hover ? 'visible' :
            hidden ? 'hidden' : 'visible'
    }



    const hiddenOn = () => {
        setHidden(false);
    }
    const hiddenOff = () => {
        setHidden(true);
    }
    const exciseIn = () => {
        navigate("/exercise");
    }
    const excise2In = () => {
        navigate("/exercise2");
    }
    const excise3In = () => {
        navigate("/exercise3");
    }
    const excise4In = () => {
        navigate("/exercise4");
    }
    const excise5In = () => {
        navigate("/exercise5");
    }
    const familyIn = () => {
        setmenuSelect("diet");
        navigate("/menupage");
    }
    const family2In = () => {
        setmenuSelect("family");
        navigate("/menupage");
    }
    const family3In = () => {
        setmenuSelect("nutrition");
        navigate("/menupage");
    }
    const cumu1In = () => {
        setcommuSelect("all");
        navigate("/community");
    }
    const cumu2In = () => {
        setcommuSelect("exercise");
        navigate("/community");
    }
    const cumu3In = () => {
        setcommuSelect("meal");
        navigate("/community");
    }
    const cumu4In = () => {
        setcommuSelect("forum");
        navigate("/community")
    }
    const board1In = () => {
        setboardSelect("notice");
        navigate("/board")
    }
    const board2In = () => {
        setboardSelect("event");
        navigate("/board")
    }
    const board3In = () => {
        setboardSelect("question");
        navigate("/board")
    }
    const profileIn = () => {
        navigate("/profile")
    }




    return (
        <nav id="hiddennav" style={hiddenStyle} onMouseOver={hiddenOn} onMouseOut={hiddenOff}>
            <div>
                <button onClick={board1In}>공지사항</button>
                <button onClick={board2In}>이벤트</button>
                <button onClick={board3In}>자주 묻는 질문</button>
            </div>
            <div>
                <button onClick={exciseIn}>이 주의 챌린지</button>
                <button onClick={excise2In}>근력향상</button>
                <button onClick={excise3In}>체형교정</button>
                <button onClick={excise4In}>유연성</button>
                <button onClick={excise5In}>다이어트</button>
            </div>
            <div>
                <button onClick={familyIn}>다이어트 식단</button>
                <button onClick={family2In}>가족 건강식단</button>
                <button onClick={family3In}>영양 톡톡</button>
            </div>
            <div>
                <button onClick={cumu1In}>전체 인기글</button>
                <button onClick={cumu2In}>운동</button>
                <button onClick={cumu3In}>식단</button>
                <button onClick={cumu4In}>자유게시판</button>
            </div>
            <div>
                <button onClick={profileIn}>건강 기록하기</button>
            </div>
        </nav>
    );
}

export default HeadHiddenNav;