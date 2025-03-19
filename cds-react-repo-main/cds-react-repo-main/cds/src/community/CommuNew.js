import React, { useState } from "react";
import { useSelector } from "react-redux";

const CommuNew = (props) => {

    //로그인 여부를 확인함
    const { isLoggedIn } = useSelector((state) => state);

    
    //새 글 입력창 띄우기
    const newWriting = props.newWriting;
    const newcontent = () => {
        newWriting();
    }

    //목록 검색을 위함
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
        <div className="commuSearch">
            {isLoggedIn ?
                <div className="commuNew">
                    <button onClick={newcontent}>
                        <i className="fa-solid fa-plus"></i>
                        새 글
                    </button>
                </div> :
                <div className="commuNew" style={{margin: '0px 10px'}}>
                    <div>
                        로그인 후 새 글을 작성할 수 있습니다
                    </div>
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

export default CommuNew;