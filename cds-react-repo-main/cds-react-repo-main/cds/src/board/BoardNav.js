import React from "react";

const BoardNav = (props) => {

    //공지사항/이벤트/자주묻는질문 선택 받아오기
    const selectClick = props.selectClick;
    const select = props.select;

    //공지사항/이벤트/자주묻는질문 선택 클릭 이벤트
    const newWritingEnd = props.newWritingEnd;
    const getselectClick = (selectType) => () => {
        selectClick(selectType);
        newWritingEnd();
    }

    //공지사항/이벤트/자주묻는질문 밑줄 스타일
    const getSelectStyle = (buttonType) => ({
        borderBottom: select === buttonType ? 'solid 2px #2C3950' : 'none'
    });

    return (
        <aside>
            <button id="btnNotice" onClick={getselectClick('notice')}>
                <p id="btnNborder" style={getSelectStyle('notice')}>공지사항</p>
            </button>
            <button id="btnEvent" onClick={getselectClick('event')}>
                <p id="btnEborder" style={getSelectStyle('event')}>이벤트</p>
            </button>
            <button id="btnQuestion" onClick={getselectClick('question')}>
                <p id="btnQborder" style={getSelectStyle('question')}>자주 묻는 질문</p>
            </button>
        </aside>
    );
}

export default BoardNav;