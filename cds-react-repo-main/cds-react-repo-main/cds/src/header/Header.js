import React, { useState } from "react";
import HeadTop from "./HeadTop";
import HeadNav from './HeadNav';
import HeadHiddenNav from './HeadHiddenNav';
import '../Section/excSection.css';
const Header = () => {
    //user 이름

    //hiddenNav 숨기기
    const [hidden, setHidden] = useState(true);
    const [hover, setHover] = useState(false); //true

    return (
        <header>
            <HeadTop />
            <HeadNav setHover={setHover} />
        </header>
    );
}

export default Header;