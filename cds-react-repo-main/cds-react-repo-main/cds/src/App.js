import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Join from './join/Join';
import './App.css';
import Login from './login/Login';
import JoinUse from './join/Join_Use';
import Mypage from './prjtMypage.js/Mypage';
import ExcSection from './Section/ExcSection';
import 'bootstrap/dist/css/bootstrap.css'
import ExcSection2 from './Section2/ExcSection2';
import ExcSection3 from './Section2/ExcSection3';
import ExcSection4 from './Section2/ExcSection4';
import ExcSection5 from './Section2/ExcSection5';
import Middle from './main/Middle';
import Community from './community/Community';
import Board from './board/Board';
import MenuPage from './menuMain/MenuPage';
import { AppContext } from './AppContext';
import ProfileApp from './profile/ProfileApp';

function App() {

  const [joinUse, setJoinUse] = useState(true);
  const [joinSub, setJoinSub] = useState(false);

  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="join" element={
            joinUse ? (
              <JoinUse setJoinUse={setJoinUse} />
            ) : (
              joinSub ? <Middle /> : <Join setJoinSub={setJoinSub} />
            )
          } />
          <Route path="login" element={<Login />} />
          <Route path="exercise" element={<ExcSection />} />
          <Route path="exercise2" element={<ExcSection2 />} />
          <Route path="exercise3" element={<ExcSection3 />} />
          <Route path="exercise4" element={<ExcSection4 />} />
          <Route path="exercise5" element={<ExcSection5 />} />
          <Route path="community" element={<Community />} />
          <Route path="board" element={<Board />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="menupage" element={<MenuPage />} />
          <Route path="profile" element={<ProfileApp />} />
          <Route index element={<Middle />} />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;