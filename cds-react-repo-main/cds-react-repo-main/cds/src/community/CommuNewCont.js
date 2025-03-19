import React, { useState } from "react";
import { InputBase } from "@mui/material";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

const CommuNewCont = (props) => {

    const { id } = useSelector((state) => state);
    const [item, setItem] = useState({ categoryTag: "exercise", userId: id, ctitle: "", ccontent: "", curl: "/img/logo.webp" });

    //item에 저장
    const newtitle = (e) => {
        setItem({ ...item, ctitle: e.target.value });
    }
    const newcontent = (e) => {
        setItem({ ...item, ccontent: e.target.value })
    }
    const selectTag = (e) => {
        setItem({ ...item, categoryTag: e.target.value });
    }
    const newImg = (e) => {
        setItem({ ...item, curl: '/img/' + e.target.value })
    }

    //새 글 추가하기
    const addItem = props.addItem;
    const newContentSub = () => {
        item.ctitle === '' || item.ccontent === '' ?
            alert("제목과 내용을 모두 입력해주세요") :
            addItem(item);
    }

    return (
        <div className="communewContPaper">
            <div className="selectinput">
                <select onChange={selectTag}>
                    <option value="exercise">운동</option>
                    <option value="meal">식단</option>
                    <option value="forum">자유게시판</option>
                </select>
                <input type="text"
                    placeholder="사진 등록" onChange={newImg} />
            </div>
            <div className="newcon newtitle">
                <p>제목</p>
                <div><InputBase onChange={newtitle} style={{ width: '100%' }} /></div>
            </div>
            <hr />
            <div className="newcon newcontent">
                <p>내용</p>
                <div><InputBase multiline onChange={newcontent} style={{ width: '100%' }} /></div>
            </div>
            <Button onClick={newContentSub} color="primary" style={{ backgroundColor: '#2C3950', border: 'none' }}>등록</Button>
        </div>
    )
}

export default CommuNewCont;