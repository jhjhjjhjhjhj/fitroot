import React, { useEffect, useState } from 'react';
import {
    Box,
    Avatar,
    Typography,
    Button,
    IconButton,
    Divider,
    BottomNavigation,
    BottomNavigationAction,
    Grid,
    TextField,
} from '@mui/material';
import { Edit, Home } from '@mui/icons-material';
import { deleteFit, getFit, update } from '../join/ApiService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { validateJoin } from '../join/Join_eff';
import '../Section/excSection.css'


// 전화번호 유효성 검사 함수
function validatePhoneNumber(phoneNumber) {
    if (!phoneNumber || phoneNumber.length !== 11 || isNaN(phoneNumber)) {
        return "유효한 핸드폰 번호를 입력해 주세요.";
    }
    return null;
}

// 비밀번호 유효성 검사 함수
function validatePassword(password) {
    if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[\W_]/.test(password)) {
        return "비밀번호는 최소 8자 이상, 대소문자, 숫자 및 특수문자를 포함해야 합니다.";
    }
    return null;
}

// 생년월일 유효성 검사 함수
function isValidDate(dateStr) {
    if (!/^\d{8}$/.test(dateStr)) return false;

    const year = parseInt(dateStr.slice(0, 4), 10);
    const month = parseInt(dateStr.slice(4, 6), 10);
    const day = parseInt(dateStr.slice(6, 8), 10);

    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function Mypage() {
    const [fitDTO, setFitDTO] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const uIdx = useSelector((state) => state.uIdx);

    // 회원정보 불러오기
    useEffect(() => {
        getFit(uIdx).then((resDTO) => setFitDTO(resDTO));
    }, [uIdx]);

    const onPwChange = (e) => setFitDTO({ ...fitDTO, pw: e.target.value });
    const onBirthdayChange = (e) => setFitDTO({ ...fitDTO, birthday: e.target.value });
    const onTelChange = (e) => setFitDTO({ ...fitDTO, tel: e.target.value });

    // 회원정보 변경 submit 이벤트 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        const newDTO = {
            uIdx: uIdx,
            name: fitDTO.name,
            pw: fitDTO.pw,
            birthday: fitDTO.birthday,
            tel: fitDTO.tel,
        };

        // 데이터 검증
        const newErrors = {};

        if (!newDTO.birthday || newDTO.birthday.length !== 8 || isNaN(newDTO.birthday) || !isValidDate(newDTO.birthday)) {
            newErrors.birthday = "유효한 생년월일을 입력해 주세요.";
        }

        const passwordError = validatePassword(newDTO.pw);
        if (passwordError) {
            newErrors.pw = passwordError;
        }

        const phoneNumberError = validatePhoneNumber(newDTO.tel);
        if (phoneNumberError) {
            newErrors.tel = phoneNumberError;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        update(newDTO).then((response) => {
            if (response.result === "OK") {
                alert("회원정보 변경 성공");
                gomainpage();
            } else {
                alert("회원정보 변경 실패");
            }
        });
    };

    const onDelete = () => {
        deleteFit(uIdx).then((response) => {
            if (response.result === "OK") {
                alert("회원정보가 삭제되었습니다.");
                onLogout();
            } else {
                alert("삭제에 실패하셨습니다.");
            }
        });
    }

    const onLogout = () => {
        sessionStorage.clear(); // 세션 스토리지를 모든 데이터를 삭제함
        navigate('/');
        window.location.reload();
    }

    const gomainpage = () => {
        navigate('/');
    }

    return (
        <div className='mybox'>
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                backgroundColor: '#f9fafb',
                height: 'max-content',
                width: 'max-content',
                border: '2px solid #007aff', // 두께를 2px로, 색상을 #007aff로 설정
                borderRadius: '8px', // 둥근 모서리 설정
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 부드러운 그림자 추가
                justifyContent: 'center',
            }}
        >
            <Box sx={{ textAlign: 'center', position: 'relative', mb: 3 }}>
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        margin: '0 auto',
                        border: '2px solid #007aff',
                    }}
                    src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800"
                />
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 'calc(50% - 45px)', // 위치를 조금 더 중앙으로 조정
                        backgroundColor: '#007aff',
                        color: 'white',
                        width: 25, // 너비 조정
                        height: 25, // 높이 조정
                        padding: 1, // 패딩 조정
                        '&:hover': {
                            backgroundColor: '#005bb5',
                        },
                    }}
                >
                    <Edit />
                </IconButton>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#333' }}>
                    성함
                </Typography>
                <Typography sx={{
                color: '#333', // 색상 변경
                fontSize: '1.0rem', // 폰트 크기 설정
                fontWeight: '800', // 폰트 굵기 설정
                letterSpacing: '0.5px', // 문자 간격 설정
                lineHeight: '1.5', // 줄 높이 설정
                textAlign: 'center', // 텍스트 정렬
                marginTop: 2, // 위쪽 여백
                fontFamily: '"Nanum Gothic", sans-serif', // 폰트 패밀리 설정
            }}>{fitDTO.name}님</Typography>
            </Box>

            <Divider sx={{ width: '100%', mb: 3 }} />

            {/* 회원정보 변경 폼 */}
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2} sx={{ width: '100%', maxWidth: 360 }} >
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="이름"
                            name="name"
                            value={fitDTO.name || ''}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{ readOnly: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="생년월일(8자리)"
                            name="birthday"
                            value={fitDTO.birthday || ''}
                            onChange={onBirthdayChange}
                            InputLabelProps={{
                                shrink: Boolean(fitDTO.birthday),
                            }}
                            variant="outlined"
                            error={Boolean(errors.birthday)}
                            helperText={errors.birthday}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="핸드폰 번호"
                            name="tel"
                            value={fitDTO.tel || ''}
                            onChange={onTelChange}
                            InputLabelProps={{
                                shrink: Boolean(fitDTO.tel),
                            }}
                            variant="outlined"
                            error={Boolean(errors.tel)}
                            helperText={errors.tel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="비밀번호"
                            name="pw"
                            value={fitDTO.pw || ''}
                            onChange={onPwChange}
                            InputLabelProps={{
                                shrink: Boolean(fitDTO.pw),
                            }}
                            type="password"
                            variant="outlined"
                            error={Boolean(errors.pw)}
                            helperText={errors.pw}
                        />
                    </Grid>
                </Grid>

                {/* 회원정보 변경 버튼 */}
                <Box sx={{ width: '100%', maxWidth: 328, textAlign: 'center', mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mb: 1,
                            backgroundColor: '#007aff',
                            color: 'white',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#005bb5',
                            },
                        }}
                    >
                        회원정보 변경
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#666' }}>
                        <Button onClick={onDelete} size="small" color="inherit">회원탈퇴</Button>
                        <Button onClick={onLogout} size="small" color="inherit">로그아웃</Button>
                    </Box>
                </Box>
            </form>

            <BottomNavigation onClick={gomainpage}
                showLabels
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bottom: 0,
                    borderTop: '1px solid #e0e0e0',
                    backgroundColor: '#ffffff',
                }}
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
            </BottomNavigation>
        </Box>
        </div>
    );
}

export default Mypage;
