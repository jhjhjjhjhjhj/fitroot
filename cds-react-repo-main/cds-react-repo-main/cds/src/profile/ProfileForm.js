import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Grid, Card, CardContent, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { getFit, weightin } from '../join/ApiService';
import '../Section/excSection.css'

function ProfileForm({ onClose }) {
  const { uIdx } = useSelector((state) => state);
  const [formValues, setFormValues] = useState({
    age: '',
    gender: '남',
    height: '',
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    august: '',
    september: '',
    october: '',
    november: '',
    december: '',
    finweight: ''
  });

  const monthMap = [
    "january", "february", "march", "april", "may", "june", 
    "july", "august", "september", "october", "november", "december"
  ];

  const currentMonth = monthMap[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const resDTO = await getFit(uIdx);
        setFormValues({
          age: resDTO.age || '',
          gender: resDTO.gender || '',
          height: resDTO.height || '',
          january: resDTO.january || '',
          february: resDTO.february || '',
          march: resDTO.march || '',
          april: resDTO.april || '',
          may: resDTO.may || '',
          june: resDTO.june || '',
          july: resDTO.july || '',
          august: resDTO.august || '',
          september: resDTO.september || '',
          october: resDTO.october || '',
          november: resDTO.november || '',
          december: resDTO.december || '',
          finweight: resDTO.finweight || ''
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [uIdx]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const updatedValues = {
        ...formValues,
        uIdx 
      };
      await weightin(updatedValues);
      alert("정보가 성공적으로 업데이트되었습니다.");
      onClose();
    } catch (error) {
      console.error("Error updating profile data:", error);
    }
  };

  return (
    <div className='mybox'>
      <Card sx={{ backgroundColor: '#f4f4f4', borderRadius: '30px', height: 'max-content', width:'max-content', border: '2px solid #B0BEC5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Typography variant="h6" style={{ marginBottom: '20px' }}>
            정보 입력
          </Typography>
          <Grid container spacing={2} style={{ width: '100%', maxWidth: '600px' }}>
            <Grid item xs={12} style={{ display: 'block' }}>
              <TextField fullWidth label="나이" name="age" value={formValues.age} onChange={handleChange} variant="outlined" margin="normal" type="number" InputLabelProps={{ shrink: true }} />
              <TextField fullWidth label="성별" name="gender" select value={formValues.gender} onChange={handleChange} variant="outlined" margin="normal" InputLabelProps={{ shrink: true }}>
                <MenuItem value="남">남</MenuItem>
                <MenuItem value="여">여</MenuItem>
              </TextField>
              <TextField fullWidth label="키 (cm)" name="height" value={formValues.height} onChange={handleChange} variant="outlined" margin="normal" type="number" InputLabelProps={{ shrink: true }} />
              <TextField fullWidth label="목표 체중 (kg)" name="finweight" value={formValues.finweight} onChange={handleChange} variant="outlined" margin="normal" type="number" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>월 선택</InputLabel>
                <Select value={selectedMonth} onChange={handleMonthChange} label="월 선택">
                  {monthMap.map((month, index) => (
                    <MenuItem key={month} value={month}>{index + 1}월</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label={`${selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} 체중`} name={selectedMonth} value={formValues[selectedMonth]} onChange={handleChange} variant="outlined" margin="normal" type="number" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>제출</Button>
              <Button variant="outlined" color="secondary" onClick={onClose}>취소</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileForm;
