import React, { useState } from "react";
import { ListItem } from "@mui/material";
import { Button } from 'reactstrap';

const CommuItem = (props) => {

    const [item, setItem] = useState(props.item);
    const [views, setViews] = useState(item.views);

    //게시글을 클릭했을 때 게시글 상세조회
    const editItem = props.editItem;
    const contentView = props.contentView;
    const contentViewEvent = () => {
        setViews(prevViews => {
            const newViews = prevViews + 1;
            setItem(prevItem => {
                const updatedItem = { ...prevItem, views: newViews };
                editItem(updatedItem); // 업데이트된 item을 전달
                contentView(updatedItem); // 업데이트된 item을 전달
                return updatedItem;
            });
            return newViews;
        });
    };

    const select = props.select;
    const categoryTag = item.categoryTag;
    const selectcon = (
        categoryTag === 'exercise' ? <i className="fa-solid fa-dumbbell"></i> :
            categoryTag === 'meal' ? <i className="fa-solid fa-utensils"></i> :
                <i className="fa-solid fa-people-group"></i>
    )
    const curl = item.curl ? `url(${item.curl})` : undefined;
    return (
        <ListItem className="commuselect">
            <Button className="selectCon" onClick={contentViewEvent} color="black">
                <div className="img" style={{ backgroundImage: curl }}></div>
                {
                    select === "all" ?
                        <div className="middle">
                            <div className="tag">{selectcon}</div>
                            <div className="content"><p>{item.ctitle}</p></div>
                        </div> :
                        <div className="middle">
                            <div className="content" style={{ width: '100%' }}><p>{item.ctitle}</p></div>
                        </div>
                }
                <div className="commuconI">
                    <i className="fa-regular fa-thumbs-up"></i><span>{item.likebtn}</span>
                    <i className="fa-regular fa-eye"></i><span>{views}</span>
                </div>
            </Button>
        </ListItem>
    );
}

export default CommuItem;