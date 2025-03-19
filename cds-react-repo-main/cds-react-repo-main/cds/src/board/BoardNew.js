import React, { useState } from "react";
import { useSelector } from "react-redux";

const BoardNew = (props) => {

    //로그인 된 id값을 가져옴
    const { id } = useSelector((state) => state);

    //새 글 입력창 띄우기
    const newWriting = props.newWriting;
    const newcontent = () => {
        newWriting();
    }

    //글 검색하기
    const [title, setTitle] = useState("");
    const searchEvent = (e) => {
        setTitle(e.target.value);
    }
    const searchItems = props.searchItems;
    const searchClick = () => {
        searchItems(title);
    }
    const enterEvent = (e) => {
        if (e.key === 'Enter') {
            searchClick();
        }
    }

    return (
        <div className="boardSearch">
            {id === 'manager@naver.com' ?
                <div className="boardNew">
                    <button onClick={newcontent}>
                        <i className="fa-solid fa-plus"></i>
                        새 글
                    </button>
                </div> :
                <div style={{ opacity: 0 }}>
                    <button style={{pointerEvents:"none"}}>
                        <i className="fa-solid fa-plus"></i>
                        입력불가
                    </button>
                </div>}
            <div>
                <input type="text" placeholder="제목 검색" id="search" onChange={searchEvent} onKeyDown={enterEvent} />
                <button className="searchBtn" onClick={searchClick}>
                    &nbsp;<i className="fa-solid fa-magnifying-glass" style={{ color: '#fff', fontSize: '15px' }}></i>
                </button>
            </div>
        </div>
    );
}

export default BoardNew;