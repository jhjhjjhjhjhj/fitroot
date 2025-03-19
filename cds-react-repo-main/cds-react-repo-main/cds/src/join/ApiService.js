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
        console.log("요청내용: " + options.body);
    }
    return fetch(options.url, options) //실행 결과 Promise객체 반환
        .then((response) =>
            response.json()
                .then((json) => {
                    if (!response.ok) {
                        //response.ok가 true이면 정상적인 응답,그렇지 않으면 에러 응답
                        return Promise.reject(json);
                    }
                    console.log(json);
                    return json;
                })
        );
}

export function update(FitDTO) {
    return call("/Fit/updateFit", "PUT", FitDTO)
}

export function loginup(FitDTO) {//회원가입
    return call("/loginup", "POST", FitDTO);
}

export function deleteFit(uIdx) {
    return call(`/Fit/${uIdx}/deleteFit`, "DELETE", null)
}

export function getFit(uIdx) {
    return call(`/fitroot/${uIdx}/getFitIdx`, "GET", null)
}

export function weightin(FitDTO) {
    return call(`/weightin`, "PUT", FitDTO)
}

export function checkid(id) {
    return call(`/fitroot/${id}/checkid`, "GET", null)
}
export function waterin(FitDTO) {
    return call(`/waterin`, "PUT", FitDTO)
}

export function sleep(FitDTO) {
    return call(`/sleep`, "PUT", FitDTO)
}