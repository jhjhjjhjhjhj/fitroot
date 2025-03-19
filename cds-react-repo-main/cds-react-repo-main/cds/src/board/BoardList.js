import React, { useState, useEffect } from "react";
import { List, Paper } from "@mui/material";
import { call } from "../AppService";
import BoardItem from './BoardItem';
import BoardNewCont from "./BoardNewCont";
import BoardNumber from "./BoardNumber";
import BoardNav from "./BoardNav";
import BoardNew from "./BoardNew";
import { useSelect } from "../AppContext";

const BoardList = () => {

    //Board 리스트를 담음
    const [items, setItems] = useState([]);
    //리스트 개수 저장
    const [itemsLength, SetItemsLength] = useState(0);

    //공지사항/이벤트/자주묻는질문 선택 확인
    const { boardSelect, setboardSelect } = useSelect();
    const selectClick = (select) => {
        setboardSelect(select);
    }

    //선택에 따른 목록 리스트 불러오기
    useEffect(() => {
        call(`/board/${boardSelect}/getBoardList`, "GET", null)
            .then((response) => {
                setItems(response)
                SetItemsLength(response.length);
                console.log(response.length);
            });
    }, [boardSelect]);

    //목록 삭제를 위함
    const deleteItem = (item) => {
        const bidx = item.bidx;
        const categoryTag = item.categoryTag;
        call(`/board/${bidx}/${categoryTag}/deleteBoard`, "DELETE", item)
            .then((response) => setItems(response));
    }

    //목록 수정을 위함
    const editItem = (item) => {
        call("/board/updateBoard", "PUT", item)
            .then((response) => setItems(response));
    };

    //목록 리스트 / 새 글 창 띄우기 위함
    const [newcontent, setNewcontest] = useState(false);
    const newWriting = () => {
        setNewcontest(true);
    }
    const newWritingEnd = () => {
        setNewcontest(false);
    }

    //목록 추가를 위함
    const addItem = (item) => {
        call(`/board/insertBoard`, "POST", item)
            .then((response) => setItems(response));
        setboardSelect(item.categoryTag);
        newWritingEnd();
    }

    //목록 검색을 위함
    const [beforeSearch, setBeforeSearch] = useState([]); //검색 전 배열 저장
    const searchItems = (title) => {
        if (title.trim() === '') {
            setItems(beforeSearch);
        } else {
            setBeforeSearch(items);
            console.log(title);
            const filterItems = items.filter((item) => item.btitle.includes(title));
            setItems(filterItems);
        }
    }

    //페이지에 따른 리스트 개수 조정하기
    const [startPost, setStartPost] = useState(0);
    const [endPost, setEndPost] = useState(0);
    const post = (startPost, endPost) => {
        setStartPost(startPost);
        setEndPost(endPost);
    }

    //목록 하나씩 출력하기
    let boardItems = items.length > 0 ? (
        <Paper className="listpaper">
            <List className="list">
                {items.slice(startPost - 1, endPost).map((item) => (
                    <BoardItem key={item.bidx} item={item} editItem={editItem} deleteItem={deleteItem}
                        select={boardSelect} />))}
            </List>
        </Paper>) : (
        <p>no items</p>
    );

    return (
        <div>
            <BoardNav selectClick={selectClick} select={boardSelect} newWritingEnd={newWritingEnd} />
            <BoardNew newWriting={newWriting} searchItems={searchItems} />
            <hr className="outhr" />
            {newcontent ? <div></div> :
                <div className="listcontentTop">
                    <p className="cate">카테고리</p>
                    <p className="title">제목</p>
                    <p className="write">작성자</p>
                    <p className="date">날짜</p>
                </div>
            }
            {newcontent ? <BoardNewCont addItem={addItem} /> : boardItems}
            <BoardNumber newcontent={newcontent} itemsLength={itemsLength} post={post} />
            <hr className="outhr" />
        </div>
    );
}

export default BoardList;