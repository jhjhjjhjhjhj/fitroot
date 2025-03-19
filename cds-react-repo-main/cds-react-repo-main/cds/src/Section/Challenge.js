import React, { useState } from "react";
import './excSection.css'
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import diet from './IMG/diet.png';
import str from './IMG/strength.png';
import bac from './IMG/bac.png';

const Challenge = () => {
    const [TabState, setTabstate] = useState('diet');

    const toggle = (tabnum) => {
        if (TabState !== tabnum) setTabstate(tabnum);
    };

    return (
        <div>
            <Nav tabs className="nav">
                <NavItem>
                    <NavLink onClick={() => { toggle('diet'); }} style={{ cursor: 'pointer' }}>체중감량</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('strangth'); }} style={{ cursor: 'pointer' }}>근력증가</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('bodyshape'); }} style={{ cursor: 'pointer' }}>체형교정</NavLink>
                </NavItem>
            </Nav>
            <div className="chalbox">
                <TabContent activeTab={TabState}>
                    <TabPane tabId="diet">
                        <img src={diet} alt="Diet" style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                        }} />
                    </TabPane>
                    <TabPane tabId="strangth" >
                        <img src={str} alt="Strength" style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                        }} />
                    </TabPane>
                    <TabPane tabId="bodyshape">
                        <img src={bac} alt="Body Shape" style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                        }} />
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default Challenge;