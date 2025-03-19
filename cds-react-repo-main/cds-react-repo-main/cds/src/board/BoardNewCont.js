import React, { useState } from "react";
import { InputBase, Paper } from "@mui/material";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

const BoardNewCont = (props) => {

    const { id } = useSelector((state) => state);
    const [item, setItem] = useState({ categoryTag: "notice", userId: id, btitle: "", bcontent: "" });

    //item에 저장
    const newtitle = (e) => {
        setItem({ ...item, btitle: e.target.value });
    }
    const newcontent = (e) => {
        setItem({ ...item, bcontent: e.target.value })
    }
    const selectTag = (e) => {
        setItem({ ...item, categoryTag: e.target.value });
    }

    //새 글 추가하기
    const addItem = props.addItem;
    const newContentSub = () => {
        item.btitle === '' || item.bcontent === '' ?
            alert("제목과 내용을 모두 입력해주세요") :
            addItem(item);
    }

    return (
        <Paper className="boardnewContPaper">
            <select onChange={selectTag}>
                <option value="notice">공지사항</option>
                <option value="event">이벤트</option>
                <option value="question">자주묻는질문</option>
            </select>
            <div className="newcon newtitle">
                <p>제목</p>
                <div><InputBase onChange={newtitle} style={{ width: '100%' }} /></div>
            </div>
            <hr />
            <div className="newcon newcontent">
                <p>내용</p>
                <div><InputBase multiline onChange={newcontent} style={{ width: '100%' }} /></div>
            </div>
            <Button onClick={newContentSub} color="primary">등록</Button>
        </Paper>
    );
}

export default BoardNewCont;