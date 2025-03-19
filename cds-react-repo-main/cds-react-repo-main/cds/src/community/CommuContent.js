import React, { useState } from "react";
import { InputBase } from "@mui/material";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useSelector } from "react-redux";

const CommuContent = (props) => {

    //게시글 상세조회 아이템 받아오기
    const item = props.item;

    //작성자 아이디랑 같아야 수정 가능
    const { id, isLoggedIn } = useSelector((state) => state);
    const updateStyle = {
        visibility: id === item.userId ? 'visible' : 'hidden'
    }

    //콘텐츠 수정
    const [readOnly, setReadOnly] = useState(true);
    const [ctitle, setCtitle] = useState(item.ctitle);
    const [ccontent, setCcontent] = useState(item.ccontent);
    const editItem = props.editItem;
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    const turnOnReadOnly = () => {
        setReadOnly(true);
        editItem({ ...item, ctitle, ccontent });
    }
    const titleChange = (e) => {
        setCtitle(e.target.value);
    }
    const contentChange = (e) => {
        setCcontent(e.target.value);
    }

    //콘텐츠 삭제
    const deleteItem = props.deleteItem;
    const [modal, setmodal] = useState(false);
    const modalToggle = () => {
        setmodal(!modal);
    }
    const deleteEvent = () => {
        deleteItem(item);
    }

    //좋아요 버튼 수정
    const [like, setLike] = useState(item.likebtn)
    const contentLikeEvent = () => {
        if(isLoggedIn){
        setLike(prevLike => {
            const newLike = prevLike + 1;
            const updatedItem = { ...item, likebtn: newLike };
            editItem(updatedItem);
            return newLike;
        })}
    };

    //x 버튼 누르면 목록으로 돌아가기
    const setItemview = props.setItemview;
    const closeClickEvent = () => {
        setItemview(false);
    }

    const img = item.curl === '/img/logo.jpg' ? null : item.curl;
    const substringCdate = item.cdate.substring(0, 10);

    return (
        <div className="commuItemContPaper">
            <div className="commuContTop">
                <div className="contentUpdate" style={updateStyle}>
                    <Button onClick={turnOffReadOnly} style={{ color: 'black' }}>수정</Button>
                    <Button onClick={readOnly ? modalToggle : turnOnReadOnly} style={{ color: 'black' }}>
                        {readOnly ? '삭제' : '완료'}</Button>
                    <Modal isOpen={modal} fade={true} toggle={modalToggle}>
                        <ModalHeader toggle={modalToggle}>정말 삭제하시겠습니까?</ModalHeader>
                        <ModalBody>확인을 누르시면 되돌릴 수 없습니다.</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={deleteEvent}>확인</Button>
                            <Button color="secondary" onClick={modalToggle}>취소</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <Button className="commuclose" color="none" onClick={closeClickEvent}>
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </div>
            <div className="commuinput commuinputctitle">
                <InputBase style={{ width: '70%' }}
                    value={ctitle} inputProps={{ readOnly: readOnly }} onChange={titleChange} />
                <div>{substringCdate}</div>
                <div>{item.userId}</div>
                <div>
                    <i className="fa-regular fa-eye"></i>
                    <span>{item.views}</span>
                </div>
            </div>
            <div className="commuinput commuinputcontent">
                <img src={img} alt={item.title} style={{maxHeight:'400px'}} />
                <InputBase style={{ width: '100%' }}
                    value={ccontent} multiline inputProps={{ readOnly: readOnly }} onChange={contentChange} />
            </div>
            <button className="commulikebtn" onClick={contentLikeEvent}>
                <i className="fa-regular fa-thumbs-up"></i>
                <span>{like}</span>
            </button>
        </div>
    );
}

export default CommuContent;