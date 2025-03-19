import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  Select,
  MenuItem,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validateJoin } from './Join_eff'; // 유효성 검사 함수 임포트
import { useNavigate } from 'react-router-dom'; // React Router v6
import { checkid, loginup } from './ApiService';

const Join = (props) => {
  const navigate = useNavigate();
  const theme = createTheme();
  const [gender, setGender] = useState('');
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    tel: '',
    id: '',
    pw: '',
    passwordConfirm: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false); // 다이얼로그 상태
  const [idError, setIdError] = useState('');
  
  // 동의 체크
  const handleAgree = (event) => {
    const checked = event.target.checked;
    setFormData(prevData => ({
      ...prevData,
      agree: checked
    }));
    setChecked(checked);
  };

  // 성별 선택 핸들러
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // 폼 데이터 변경 핸들러
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사 실행
    const validationErrors = validateJoin(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = new FormData(e.target);
    const name = data.get("name");
    const id = data.get("id");
    const pw = data.get("pw");
    const birthday = data.get("birthday");
    const tel = data.get("tel");

    const isDuplicate =await checkid(id)
    if (isDuplicate === 1) {
      alert('동일한 아이디가 있습니다.');
      return;
    }
   
    loginup({ name: name, pw: pw, id: id, birthday: birthday, tel: tel })

      .then(() => {
        console.log("회원가입 성공"); // 로그 추가
        alert("회원가입이 완료되었습니다.");
        setOpenDialog(true); // 다이얼로그 열기
        navigate('/login')
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      })
  };

  const setJoinSub = props.setJoinSub;

  // 다이얼로그 확인 버튼 핸들러
  const handleDialogClose = () => {
    setOpenDialog(false);
    setJoinSub(true);
  };

  const Homeevent = () =>{
    navigate('/')
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
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" style={{ height: '100%', paddingTop: 10 }}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '8px', // 패딩을 줄여서 빈 공간 줄이기
              }}
            >
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <img 
                  onClick={Homeevent}
                  src={`${process.env.PUBLIC_URL}/headerlogo.webp`}
                  alt="My Image"
                  style={{marginLeft:'35px', width: '300px', height: 'auto', cursor: 'pointer'}}
                />
                <FormControl component="fieldset" variant="standard">
                  <Grid container spacing={1}> {/* 간격을 줄이기 위해 spacing을 1로 설정 */}
                    <Grid item xs={12}>
                      <TextField
                        required
                        autoFocus
                        fullWidth
                        type="text"
                        id="userName"
                        name="name"
                        label="이름"
                        value={formData.name}
                        onChange={handleInputChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text"
                        id="birthday"
                        name="birthday"
                        label="생년월일(8자리)"
                        value={formData.birthday}
                        onChange={handleInputChange}
                        error={!!errors.birthday}
                        helperText={errors.birthday}
                        inputProps={{ maxLength: '8' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined">
                        <Select
                          value={gender}
                          onChange={handleGenderChange}
                          displayEmpty
                          inputProps={{ 'aria-label': '성별' }}
                          style={{ height: '45px', fontSize: '14px' }}
                        >
                          <MenuItem value="" disabled>
                            성별
                          </MenuItem>
                          <MenuItem value="male">남자</MenuItem>
                          <MenuItem value="female">여자</MenuItem>
                          <MenuItem value="other">기타</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text"
                        id="phoneNumber"
                        name="tel"
                        label="핸드폰 번호(-제외)를 입력해주세요"
                        value={formData.tel}
                        onChange={handleInputChange}
                        error={!!errors.tel}
                        helperText={errors.tel}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text"
                        id="userId"
                        name="id"
                        label="아이디(이메일)을 입력해주세요"
                        value={formData.id}
                        onChange={handleInputChange}
                        error={!!errors.id}
                        helperText={errors.id}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="password"
                        id="password"
                        name="pw"
                        label="비밀번호(8자이상, 문자/숫자/특수문자 사용 가능)"
                        value={formData.pw}
                        onChange={handleInputChange}
                        error={!!errors.pw}
                        helperText={errors.pw}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        label="비밀번호 재입력"
                        value={formData.passwordConfirm}
                        onChange={handleInputChange}
                        error={!!errors.passwordConfirm}
                        helperText={errors.passwordConfirm}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox checked={formData.agree} onChange={handleAgree} color="primary" />}
                        label="회원가입 약관에 동의합니다."
                      />
                      {errors.agree && (
                        <Typography color="error" variant="body2">
                          {errors.agree}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2, // 상단 여백을 줄여서 빈 공간 줄이기
                      mb: 2,
                      width: '100%',
                      color: '#fff',
                      backgroundColor: '#243040',
                      '&:hover': {
                        backgroundColor: '#243040',
                        color: '#fff'
                      }
                    }}
                    size="large"
                  >
                    회원가입
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </Container>

          {/* 다이얼로그 추가 */}
          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
          >
            <DialogTitle>회원가입 완료</DialogTitle>
            <DialogContent>
              <Typography>회원가입이 완료되었습니다.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default Join;