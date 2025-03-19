import React, { useState } from "react";
import { ListItem, InputBase } from "@mui/material";
import { Card, Button, Collapse, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import { useSelector } from "react-redux";

const BoardItem = (props) => {

    const [item] = useState(props.item);

    //콘텐츠 열고 닫기
    const [collapsed, setCollapsed] = useState(false);
    const contoggle = () => {
        setCollapsed(!collapsed);
    };
    const cardStyle = {
        display: collapsed ? 'block' : 'none'
    };
    const hoverStyle = {
        backgroundColor: collapsed ? '#fff0' : ''
    }

    //로그인 계정이 관리자일 때 게시글 수정/삭제 가능 / 로그인 된 id값을 가져옴
    const { id } = useSelector((state) => state);
    const updateStyle = {
        visibility: id === 'manager@naver.com' ? 'visible' : 'hidden'
    };

    //글 삭제
    const deleteItem = props.deleteItem;
    const [modal, setmodal] = useState(false);
    const modalToggle = () => {
        setmodal(!modal);
    }
    const deleteEvent = () => {
        deleteItem(item);
    }

    //콘텐츠 수정
    const [readOnly, setReadOnly] = useState(true);
    const [bcontent, setBcontent] = useState(item.bcontent);
    const editItem = props.editItem;
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    const turnOnReadOnly = () => {
        setReadOnly(true);
        editItem({ ...item, bcontent });
    }
    const contentChange = (e) => {
        setBcontent(e.target.value);
    }

    //select에 따라서 아이콘 변경
    const select = props.select;

    const substringBdate = item.bdate.substring(0, 10);

    return (
        <ListItem className="boardselect">
            <hr className="inhr" style={cardStyle} />
            <Button className="toggleBtn" onClick={contoggle} style={hoverStyle}>
                {
                    select === 'notice' ?
                        <i className="fa-solid fa-bullhorn"></i> :
                        select === 'event' ?
                            <i className="fa-solid fa-gift"></i> :
                            <i className="fa-solid fa-seedling"></i>
                }
                <p className="titlep">{item.btitle}</p>
                <p>{item.userId}</p>
                <p className="date">{substringBdate}</p>
            </Button>
            <Collapse style={cardStyle}>
                <Card>
                    <div className="update" style={updateStyle}>
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
                    <InputBase
                        inputProps={{ readOnly: readOnly }}
                        type="text"
                        multiline
                        id={bcontent}
                        name={bcontent}
                        value={bcontent}
                        onChange={contentChange} />
                </Card>
            </Collapse>
            <Button className="close" style={{ color: 'black', ...cardStyle }} onClick={contoggle}>닫기</Button>
            <hr className="inhr" style={cardStyle} />
        </ListItem>
    );
}

export default BoardItem;