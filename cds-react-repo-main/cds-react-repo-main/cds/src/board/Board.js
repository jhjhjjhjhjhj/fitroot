import './Board.css';
import 'bootstrap/dist/css/bootstrap.css' //bootstrap에 저장된 css 사용하기 위한 import
import React, { useState } from "react";
import BoardList from './BoardList';
import { BoardContext } from './BoardContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TermsModal from "../footer/TermsModal";


const Board = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('terms');

    const handleShow = (tab) => {
        setActiveTab(tab);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <BoardContext>
            <Header />
            <BoardList />
            <Footer handleShow={handleShow} />
      <TermsModal show={showModal} handleClose={handleClose} activeTab={activeTab} />
        </BoardContext>
    );
}

export default Board;