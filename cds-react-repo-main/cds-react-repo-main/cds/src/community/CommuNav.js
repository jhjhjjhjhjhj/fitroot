import React from "react";

function CommuNav(props) {

    //전체인기글/운동/식단/자유게시판 선택 받아오기
    const selectClick = props.selectClick;
    const select = props.select;

    //전체인기글/운동/식단/자유게시판 선택 클릭 이벤트
    const newWritingEnd = props.newWritingEnd;
    const getselectClick = (selectType) => () => {
        selectClick(selectType);
        newWritingEnd();
    }

    //전체인기글/운동/식단/자유게시판 밑줄 스타일
    const getSelectStyle = (buttonType) => ({
        borderBottom: select === buttonType ? 'solid 2px #2C3950' : 'none'
    });

    return (
        <aside>
            <button id="btnAll" onClick={getselectClick('all')}>
                <p id="btnAborder" style={getSelectStyle('all')}>전체 인기글</p>
            </button>
            <button id="btnExercise" onClick={getselectClick('exercise')}>
                <p id="btnEborder" style={getSelectStyle('exercise')}>운동</p>
            </button>
            <button id="btnMeal" onClick={getselectClick('meal')}>
                <p id="btnMborder" style={getSelectStyle('meal')}>식단</p>
            </button>
            <button id="btnForum" onClick={getselectClick('forum')}>
                <p id="btnFborder" style={getSelectStyle('forum')}>자유게시판</p>
            </button>
        </aside>
    );
}

export default CommuNav;