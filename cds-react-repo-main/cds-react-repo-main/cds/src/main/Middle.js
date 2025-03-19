import React, { useState } from 'react';
import HeaderImage from './HeaderImage';
import BodyImage from './BodyImage';
import UseButton from './UseButton';
import Footer from '../footer/Footer';
import Header2 from '../header/Header2';
import TermsModal from '../footer/TermsModal';

const Middle = () => {
  const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('terms');

    const handleShow = (tab) => {
        setActiveTab(tab);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);


  return (
    <div>
      <Header2 />
      <HeaderImage />
      <BodyImage />
      <UseButton />
      <Footer handleShow={handleShow} />
      <TermsModal show={showModal} handleClose={handleClose} activeTab={activeTab} />
    </div>
  );
};

export default Middle;
