//Join_eff<- 유효성이 영어로 effectiveness

import { checkid } from "./ApiService";

// Join_eff.js
export const validateJoin = (data) => {
    let errors = {};

    // 이름 유효성 검사
    if (!data.name) {
        errors.name = "이름을 입력해 주세요.";
    }

    // 생년월일 유효성 검사
    function isValidDate(dateStr) {
        // 날짜 형식: yyyyMMdd
        if (!/^\d{8}$/.test(dateStr)) return false;

        const year = parseInt(dateStr.slice(0, 4), 10);
        const month = parseInt(dateStr.slice(4, 6), 10);
        const day = parseInt(dateStr.slice(6, 8), 10);

        // Date 객체로 날짜 생성 시 월은 0부터 시작
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
    }

    // 데이터 검증 코드
    if (!data.birthday || data.birthday.length !== 8 || isNaN(data.birthday) || !isValidDate(data.birthday)) {
        errors.birthday = "유효한 생년월일을 입력해 주세요.";
    }

    // 핸드폰 번호 유효성 검사
    if (!data.tel || data.tel.length !== 11 || isNaN(data.tel)) {
        errors.tel = "유효한 핸드폰 번호를 입력해 주세요.";
    }

    // 아이디 유효성 검사 (이메일 형식)
    if (!data.id || !/\S+@\S+\.\S+/.test(data.id)) {
        errors.id = "유효한 이메일을 입력해 주세요.";
    }
    // 비밀번호 유효성 검사
    if (!data.pw || data.pw.length < 8 || !/[A-Z]/.test(data.pw) || !/[a-z]/.test(data.pw) || !/[0-9]/.test(data.pw) || !/[\W_]/.test(data.pw)) {
        errors.pw = "비밀번호는 최소 8자 이상, 대소문자, 숫자 및 특수문자를 포함해야 합니다.";
    }

    // 비밀번호 재입력 유효성 검사
    if (data.pw !== data.passwordConfirm) {
        errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    // 약관 동의 유효성 검사
    if (!data.agree) {
        errors.agree = "회원가입 약관에 동의해 주세요.";
    }



    return errors;
};
