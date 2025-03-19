import React, { createContext, useContext, useState } from "react";

const selectContext = createContext();

export const AppContext = ({ children }) => {
    const [commuSelect, setcommuSelect] = useState('all');
    const [boardSelect, setboardSelect] = useState('notice');
    const [menuSelect, setmenuSelect] = useState('diet');

    const contextValue = { commuSelect, setcommuSelect, boardSelect, setboardSelect, menuSelect, setmenuSelect }

    return (
        <selectContext.Provider value={contextValue}>
            {children}
        </selectContext.Provider>
    );
};

export const useSelect = () => useContext(selectContext);