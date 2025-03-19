import { API_BASE_URL } from "./app-config";


export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    //fetch :서버로 요청을 보내고 응답을 가져오는 함수
    return fetch(options.url, options) //정상적인 요청일경우(리젝트?) .then 실행 / 아닐경우 .catch 실행 
        .then((response) => { //then(): 서버의 응답을 JSON 형식으로 변환하여 결과 반환
            if (response.status === 200) {
                return response.json();
            } else if(response.status === 403) {
                window.location.href = "/login"; //redirect
            } else {
                Promise.reject(response);
                throw Error(response);
            }
        }).catch((error) => { //catch(): 네트워크 에러나 요청 처리 중 발생한 에러 처리
            console.log("http error");
            console.log(error);
        });
}