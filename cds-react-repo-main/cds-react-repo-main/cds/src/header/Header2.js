import React, { useState } from "react";
import HeadTop from "./HeadTop";
import HeadNav from './HeadNav';
import HeadHiddenNav from './HeadHiddenNav';
import '../Section/excSection.css';
import { useSelector } from "react-redux";
const Header2 = () => {
    //hiddenNav 숨기기
    const [hidden, setHidden] = useState(true);
    const [hover, setHover] = useState(false); //true

    return (
        <header>
            <HeadTop />
            <HeadNav setHover={setHover} />
            <HeadHiddenNav hover={hover} hidden={hidden} setHidden={setHidden} />
        </header>
    );
}

export default Header2;