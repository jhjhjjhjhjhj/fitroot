import React, { useState } from 'react';
import Profile from './Profile';
import ProfileForm from './ProfileForm';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TermsModal from '../footer/TermsModal';

function ProfileApp() {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('terms');

  const handleShow = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormClose = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <Header />
      <div style={{ height: '100vh', backgroundColor: '#DAE4E8' }}>
        {isEditing ? (
          <ProfileForm onClose={handleFormClose} />
        ) : (
          <Profile onEdit={handleEditClick} />
        )}
      </div>
      <Footer handleShow={handleShow} />
      <TermsModal show={showModal} handleClose={handleClose} activeTab={activeTab} />
    </div>
  );
}

export default ProfileApp;
