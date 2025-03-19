import { SET_ISLOGGEDIN, SET_NAME, SET_UIDX, SET_ID } from './actions';

const initialState = {
    isLoggedIn: false,
    uIdx: "",
    id: "",
    name: ""
};

const serializedState = sessionStorage.getItem('state');
console.log("serializedState:" + serializedState);
const sessionState = JSON.parse(serializedState);

//state를 초기화시킬 떄 세션 스토리지에 state가 있을 때는 sessionState로 초기화하고
//없을 때에는 initialState로 초기화하도록 confirmedState를 정의함
const confirmedState = (sessionState === null) ? initialState : sessionState;

const myPrjtReducer = (state = confirmedState, action) => {

    switch (action.type) {
        case SET_ISLOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case SET_UIDX:
            return {
                ...state,
                uIdx: action.payload
            };
        case SET_ID:
            return {
                ...state,
                id: action.payload
            };
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default myPrjtReducer;