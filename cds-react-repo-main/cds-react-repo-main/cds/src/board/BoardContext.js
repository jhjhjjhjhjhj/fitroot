import React, { createContext, useState, useContext } from "react";

const LoginIdContext = createContext();

export const BoardContext = ({ children }) => {
    const [loggedId, setLoggedId] = useState(3);

    const contextValue = { loggedId, setLoggedId };

    return (
        <LoginIdContext.Provider value={contextValue}>
            {children}
        </LoginIdContext.Provider>
    );
};

export const useLoginId = () => useContext(LoginIdContext);