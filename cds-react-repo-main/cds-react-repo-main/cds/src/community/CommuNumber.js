import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const CommuNumber = (props) => {

    const select = props.select;
    const itemview = props.itemview;
    const newcontent = props.newcontent;
    const numberStyle = {
        visibility: newcontent ? 'hidden' :
            itemview ? 'hidden' :
                select === 'all' ? 'hidden' : 'visible'
    }

    //items 길이
    const itemsLength = props.itemsLength;
    const pageRange = 12; // 페이지당 보여줄 게시물 수
    const allPageBtn = Math.ceil(itemsLength / pageRange); // 게시물 수에 따른 필요한 페이지 버튼 총 개수
    const btnRange = 5; // 보여질 페이지 버튼의 개수
    const pageBtn = Math.min(btnRange, allPageBtn); //보여질 페이지 버튼의 개수

    //페이지네이션의 상태 관리
    const [page, setPage] = useState(1); //페이지 저장

    const currentSet = Math.ceil(page / btnRange); //현재 버튼이 몇번째 세트인지 나타내는 수
    const startPage = (currentSet - 1) * btnRange + 1; //현재 보여질 버튼의 첫번째 수
    const endPage = startPage + btnRange - 1; //현재 보여질 끝 버튼의 수
    const totalSet = Math.ceil(Math.ceil(itemsLength / pageRange) / btnRange); //전체 버튼 세트 수

    //게시물 업데이트
    const post = props.post;
    useEffect(() => {
        const startPost = (page - 1) * pageRange + 1;
        const endPost = startPost + pageRange - 1;
        post(startPost, endPost)
    }, [page, pageRange, post]);

    return (
        <div className="communumber" style={numberStyle}>
            {currentSet > 1 && (
                <Button onClick={() => setPage(startPage - 1)}>
                    &lt;
                </Button>
            )}
            {Array(pageBtn).fill(startPage).map((_, i) => {
                return (
                    <Button key={i}
                        onClick={() => setPage(startPage + i)}
                        active={page === startPage + i} style={{ backgroundColor: '#2C3950' }}>
                        {startPage + i}
                    </Button>
                );
            })}
            {totalSet > currentSet && (
                <Button onClick={() => setPage(endPage + 1)}>
                    &gt;
                </Button>
            )}
        </div>
    );
}

export default CommuNumber;