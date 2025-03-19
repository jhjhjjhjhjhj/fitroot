import React, { createContext, useContext, useState } from "react";


//회원관리와 관련된 값들을 하위 컴포넌트와 공유할 수 있는
//컨텍스트 객체 생성
const LoginContext = createContext();


//chlidren에 해당되는 컴포넌트 : AppContent 컴포넌트와 하위 컴포넌트
export const LoginProvider = ({ children }) => {
    //로그인 관련 상태변수와 상태변경함수
    //로그인은 초기값으로 false값을 할당함
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //사용자의 회원번호 관련 상태변수와 상태변경함수
    const [uIdx, setUidx] = useState('');
    //사용자의 아이디 관련 상태변수와 상태변경 함수

    const [id, setUserId] = useState('');
    //메인페이지 관련 상태변수와 상태변경함수
    const [isMyPage, setIsMyPage] = useState(true);
    const [isMainPage, setIsMainPage] = useState(true);


    const contextValue = {
        isLoggedIn, setIsLoggedIn, uIdx, setUidx,
        id, setUserId, isMainPage, setIsMainPage, isMyPage, setIsMyPage
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    )
}

//하위 컴포넌트에서 컨텍스트 객체를 쉽게 접근할 수 있도록 커스텀 훅 정의
export const useLogin = () => useContext(LoginContext);