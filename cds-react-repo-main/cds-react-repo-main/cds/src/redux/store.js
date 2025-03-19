import { configureStore } from '@reduxjs/toolkit';
import myPrjtReducer from './reducer';

//세션 스토리지에 저장된 state가 있는 경우 저장된 객체를 가져오고
//없는 경우 undefined를 반환하는 함수
// const loadState = () => {
//   try {

//     const serializedState = sessionStorage.getItem('state');

//     console.log("serializedState:"+serializedState);

//     if (serializedState === null){
//       return undefined;
//     }else{
//       return JSON.parse(serializedState);
//     } 

//   } catch (err) { return undefined; }
// };

// const preLoadState = loadState;

//세션 스토리지에 상태 저장
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (err) {
        console.error('state 저장 시 에러 발생', err);
    }
};

const store = configureStore({
    reducer: myPrjtReducer,
    // 미들웨어: 스토어의 디스패치 과정에서 액션을 가로채고, 추가적인 로직을 실행할 수 있게 해주는 함수
    // 주로 로깅, 비동기 처리, 오류 처리 등을 위해 사용
},
    // preLoadState
);


//상태가 변경될 때마다 세션 스토리지에 저장
store.subscribe(() => {
    saveState(store.getState());
});



export default store;
