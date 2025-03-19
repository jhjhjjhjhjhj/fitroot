import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, FormGroup, Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function JoinUse(props) {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    termsOfService: false,
    privacyPolicy: false,
    ageVerification: false,
    locationServices: false,
  });

  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setCheckedItems({
      termsOfService: newChecked,
      privacyPolicy: newChecked,
      ageVerification: newChecked,
      locationServices: newChecked,
    });
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const setJoinUse = props.setJoinUse;
  const joinUse = () => {
    setJoinUse(false);
  }

  return (
    <Box 
      sx={{ 
        maxWidth: '600px', 
        margin: 'auto', 
        mt: 5, 
        p: 3, 
        border: '1px solid #e0e0e0', 
        borderRadius: 2,
        boxShadow: 1,
        bgcolor: 'background.paper',
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
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        약관 동의
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              onChange={handleAllChecked}
              sx={{
                color: '#cdeeff',
                '&.Mui-checked': {
                  color: '#cdeeff',
                },
                '& .MuiSvgIcon-root': {
                  borderRadius: 2,
                  border: `1px solid #cdeeff`,
                }
              }}
            />
          }
          label={<Typography variant="body1" sx={{ fontWeight: 'bold' }}>전체 동의하기</Typography>}
        />

        <Divider sx={{ my: 2 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsOfService"
                  checked={checkedItems.termsOfService}
                  onChange={handleChecked}
                  sx={{
                    color: '#cdeeff',
                    '&.Mui-checked': {
                      color: '#cdeeff',
                    },
                    '& .MuiSvgIcon-root': {
                      borderRadius: 2,
                      border: `1px solid #cdeeff`,
                    }
                  }}
                />
              }
              label="[필수]핏루트 이용약관"
              sx={{ m: 0 }}
            />
          </AccordionSummary>
          <AccordionDetails sx={{ maxHeight: '100px', overflowY: 'auto' }}>
            <Typography variant="body2" color="textSecondary">
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              핏루트 이용약관에 대한 설명입니다. 여기에 약관에 대한 자세한 내용을 추가할 수 있습니다.
              {/* 약관 내용 생략 */}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              control={
                <Checkbox
                  name="privacyPolicy"
                  checked={checkedItems.privacyPolicy}
                  onChange={handleChecked}
                  sx={{
                    color: '#cdeeff',
                    '&.Mui-checked': {
                      color: '#cdeeff',
                    },
                    '& .MuiSvgIcon-root': {
                      borderRadius: 2,
                      border: `1px solid #cdeeff`,
                    }
                  }}
                />
              }
              label="[필수]개인정보 수집 및 이용"
              sx={{ m: 0 }}
            />
          </AccordionSummary>
          <AccordionDetails sx={{ maxHeight: '100px', overflowY: 'auto' }}>
            <Typography variant="body2" color="textSecondary">
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              개인정보 수집 및 이용에 대한 설명입니다.
              {/* 약관 내용 생략 */}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              control={
                <Checkbox
                  name="ageVerification"
                  checked={checkedItems.ageVerification}
                  onChange={handleChecked}
                  sx={{
                    color: '#cdeeff',
                    '&.Mui-checked': {
                      color: '#cdeeff',
                    },
                    '& .MuiSvgIcon-root': {
                      borderRadius: 2,
                      border: `1px solid #cdeeff`,
                    }
                  }}
                />
              }
              label="[필수]신원 인증된 아이디로 가입"
              sx={{ m: 0 }}
            />
          </AccordionSummary>
          <AccordionDetails sx={{ maxHeight: '100px', overflowY: 'auto' }}>
            <Typography variant="body2" color="textSecondary">
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              신원 인증된 아이디로 가입에 대한 설명입니다.
              {/* 약관 내용 생략 */}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormControlLabel
              control={
                <Checkbox
                  name="locationServices"
                  checked={checkedItems.locationServices}
                  onChange={handleChecked}
                  sx={{
                    color: '#cdeeff',
                    '&.Mui-checked': {
                      color: '#cdeeff',
                    },
                    '& .MuiSvgIcon-root': {
                      borderRadius: 2,
                      border: `1px solid #cdeeff`,
                    }
                  }}
                />
              }
              label="[필수]위치기반서비스 이용약관"
              sx={{ m: 0 }}
            />
          </AccordionSummary>
          <AccordionDetails sx={{ maxHeight: '100px', overflowY: 'auto' }}>
            <Typography variant="body2" color="textSecondary">
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              위치기반서비스 이용약관에 대한 설명입니다.
              {/* 약관 내용 생략 */}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Button 
          variant="contained" 
          sx={{ 
            mt: 3, 
            width: '100%', 
            color:'white',
            backgroundColor: '#243040', 
            '&:hover': {
              backgroundColor: '#243040',
              color:'white'
            }
          }}
          onClick={joinUse}
        >
          다음
        </Button>
      </FormGroup>
    </Box>
  );
}

export default JoinUse;