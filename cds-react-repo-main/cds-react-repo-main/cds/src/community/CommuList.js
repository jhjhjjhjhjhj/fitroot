import React, { useState, useEffect } from "react";
import { List } from "@mui/material";
import { call } from "../join/ApiService";
import CommuItem from "./CommuItem";
import CommuNumber from "./CommuNumber";
import CommuContent from "./CommuContent";
import CommuNav from "./CommuNav";
import CommuNew from "./CommuNew";
import CommuNewCont from "./CommuNewCont";
import { useSelect } from "../AppContext";

const CommuList = () => {

    //Community 리스트를 담음
    const [items, setItems] = useState([]);
    //리스트 개수 저장
    const [itemsLength, SetItemsLength] = useState(0);

    //전체인기글/운동/식단/자유게시판 선택 확인
    const { commuSelect, setcommuSelect } = useSelect();
    const selectClick = (select) => {
        setcommuSelect(select);
    }

    //선택에 따른 목록 리스트 불러오기
    useEffect(() => {
        commuSelect === 'all' ?
            call(`/community/getCommuList`, "GET", null)
                .then((response) => {
                    setItems(response)
                    SetItemsLength(response.length);
                    console.log(response);
                }) :
            call(`/community/${commuSelect}/getCommuList`, "GET", null)
                .then((response) => {
                    setItems(response)
                    SetItemsLength(response.length);
                    console.log(response);
                });
    }, [commuSelect]);

    //게시글 상세조회
    const [itemview, setItemview] = useState(false);
    const [item, setItem] = useState([]);
    const contentView = (item) => {
        setItemview(true);
        setItem(item);
    };

    //목록 삭제를 위함
    const deleteItem = (item) => {
        const cidx = item.cidx;
        const categoryTag = item.categoryTag;
        call(`/community/${cidx}/${categoryTag}/deleteCommu`, "DELETE", item)
            .then((response) => setItems(response));
        setItemview(false);
    }

    //목록 수정을 위함
    const editItem = (item) => {
        call("/community/updateCommu", "PUT", item)
            .then((response) => setItems(response));
    };

    //목록 리스트 / 새 글 창 띄우기 위함
    const [newcontent, setNewcontent] = useState(false);
    const newWriting = () => {
        setNewcontent(true);
    }
    const newWritingEnd = () => {
        setNewcontent(false);
        setItemview(false);
    }

    //새 글 추가하기
    const addItem = (item) => {
        console.log(item);
        call(`/community/insertCommu`, "POST", item)
            .then((response) => setItems(response));
        setcommuSelect(item.categoryTag);
        newWritingEnd();
    }

    //목록 검색을 위함
    const [beforeSearch, setBeforeSearch] = useState([]); //검색 전 배열 저장
    const searchItems = (title) => {
        if (title.trim() === '') {
            setItems(beforeSearch);
        } else {
            setBeforeSearch(items);
            const filterItems = items.filter((item) => item.ctitle.includes(title));
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
    let commuItems = items.length > 0 ? (
        <div className="commulistpaper">
            <List className="commulist">
                {items.slice(startPost - 1, endPost).map((item) => (
                    <CommuItem key={item.cidx} item={item} contentView={contentView}
                        editItem={editItem} select={commuSelect} />))}
            </List>
        </div>) : (
        <p>no items</p>
    );

    return (
        <div>
            <CommuNav selectClick={selectClick} select={commuSelect} newWritingEnd={newWritingEnd} />
            <CommuNew newWriting={newWriting} searchItems={searchItems} />
            <hr className="outhr" />
            {newcontent ?
                <CommuNewCont addItem={addItem} /> :
                itemview ?
                    <CommuContent item={item} editItem={editItem} deleteItem={deleteItem}
                        setItemview={setItemview} /> :
                    commuItems
            }
            <hr className="outhr" />
            <CommuNumber select={commuSelect} itemview={itemview} itemsLength={itemsLength} post={post} newcontent={newcontent} />
        </div>
    );
}

export default CommuList;