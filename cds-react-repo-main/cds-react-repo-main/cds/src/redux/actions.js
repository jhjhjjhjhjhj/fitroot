export const SET_ISLOGGEDIN = 'SET_ISLOGGEDIN';
export const SET_UIDX = 'SET_UIDX';
export const SET_ID = 'SET_ID';
export const SET_NAME = 'SET_NAME'

export const setIsLoggedIn = (value) => ({
    type: SET_ISLOGGEDIN,
    payload: value
});

export const setUidx = (uIdx) => ({
    type: SET_UIDX,
    payload: uIdx
});

export const setId = (id) => ({
    type: SET_ID,
    payload: id
});

export const setName = (name) => ({
    type: SET_NAME,
    payload: name
});