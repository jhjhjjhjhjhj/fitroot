import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, MenuItem, Select, FormControl, Grid, Typography, IconButton } from '@mui/material';
import checkOff from './img/checkoff.png';
import checkOn from './img/checkon.png';
import sleepImage from './img/sleep.png';
import { useSelector } from 'react-redux';
import { getFit, sleep } from '../join/ApiService'; // Assume `sleep` API also handles the check status

const SleepTracker = () => {
  const { uIdx } = useSelector((state) => state);
  const [sleepTime, setSleepTime] = useState('수면 시간 계획하기');
  const [openDialog, setOpenDialog] = useState(false);
  const [startHour, setStartHour] = useState(23);
  const [startMinute, setStartMinute] = useState(0);
  const [endHour, setEndHour] = useState(7);
  const [endMinute, setEndMinute] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const fetchSleepData = useCallback(async () => {
    try {
      setLoading(true);
      const resDTO = await getFit(uIdx);
      const { startsleep, endsleep, sleepcheck } = resDTO;

      if (startsleep && endsleep) {
        const [startHour, startMinute] = startsleep.split(':').map(Number);
        const [endHour, endMinute] = endsleep.split(':').map(Number);

        // Validate hour and minute ranges
        if (isValidTime(startHour, startMinute) && isValidTime(endHour, endMinute)) {
          setStartHour(startHour);
          setStartMinute(startMinute);
          setEndHour(endHour);
          setEndMinute(endMinute);

          setSleepTime(`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')} ~ ${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`);
        } else {
          setSleepTime('수면 시간 계획하기');
        }

        setIsChecked(sleepcheck === 'Y');
      } else {
        setSleepTime('수면 시간 계획하기');
      }
    } catch (error) {
      console.error('Error fetching sleep data:', error);
      setError('Failed to load sleep data.');
    } finally {
      setLoading(false);
    }
  }, [uIdx]);

  useEffect(() => {
    fetchSleepData();
  }, [fetchSleepData]);

  const isValidTime = (hour, minute) => {
    return (hour >= 0 && hour < 24) && (minute >= 0 && minute < 60);
  };

  const handleSaveSleepData = async () => {
    setSaving(true);
    try {
      const formattedStart = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
      const formattedEnd = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;
      const response = await sleep({
        uIdx,
        startsleep: formattedStart,
        endsleep: formattedEnd,
        sleepcheck: isChecked ? 'Y' : 'N',
      });

      if (response.result === 'OK') {
        setSleepTime(`${formattedStart} ~ ${formattedEnd}`);
        setOpenDialog(false);
      } else {
        console.error('Failed to save sleep data.');
        setError('Failed to save sleep data.');
      }
    } catch (error) {
      console.error('Error saving sleep data:', error);
      setError('Error saving sleep data.');
    } finally {
      setSaving(false);
    }
  };

  const handleCheckClick = async () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    try {
      // When checkbox is clicked, update the sleepcheck status immediately
      const formattedStart = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`;
      const formattedEnd = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;
      const response = await sleep({
        uIdx,
        startsleep: formattedStart,
        endsleep: formattedEnd,
        sleepcheck: newChecked ? 'Y' : 'N',
      });

      if (response.result !== 'OK') {
        console.error('Failed to update sleep check status.');
        setError('Failed to update sleep check status.');
      }
    } catch (error) {
      console.error('Error updating sleep check status:', error);
      setError('Error updating sleep check status.');
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '200px', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div style={{ position: 'relative', width: '150px', height: '150px', marginRight: '20px' }}>
            <img
              src={sleepImage}
              alt="sleep"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
            <div
              onClick={() => setOpenDialog(true)}
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '16px',
                textAlign: 'center',
                color: '#7C7C7C',
                backgroundColor: '#D3DEE9',
                borderRadius: '8px',
                padding: '0px 20px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
              }}
            >
              {sleepTime}
            </div>
            <div style={{ position: 'absolute', right: '-10px', top: '-5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <IconButton onClick={handleCheckClick} style={{ padding: '0', position: 'relative' }}>
                <img
                  src={isChecked ? checkOn : checkOff}
                  alt="check"
                  style={{ width: '40px', height: '40px' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '70%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '10px',
                  color: '#7C7C7C',
                  pointerEvents: 'none',
                  marginTop: '5px'
                }}>
                  check!
                </span>
              </IconButton>
            </div>
          </div>

          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            PaperProps={{
              style: { borderRadius: '15px' },
            }}
          >
            <DialogTitle>수면 시간 설정</DialogTitle>
            <DialogContent>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <FormControl>
                    <Select
                      value={startHour}
                      onChange={(e) => setStartHour(Number(e.target.value))}
                      sx={{ minWidth: 70, height: 30 }}
                    >
                      {hours.map((hour) => (
                        <MenuItem key={hour} value={hour}>
                          {String(hour).padStart(2, '0')}시
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <Select
                      value={startMinute}
                      onChange={(e) => setStartMinute(Number(e.target.value))}
                      sx={{ minWidth: 70, height: 30 }}
                    >
                      {minutes.map((minute) => (
                        <MenuItem key={minute} value={minute}>
                          {String(minute).padStart(2, '0')}분
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography>부터</Typography>
                </Grid>
                <Grid item>
                  <FormControl>
                    <Select
                      value={endHour}
                      onChange={(e) => setEndHour(Number(e.target.value))}
                      sx={{ minWidth: 70, height: 30 }}
                    >
                      {hours.map((hour) => (
                        <MenuItem key={hour} value={hour}>
                          {String(hour).padStart(2, '0')}시
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <Select
                      value={endMinute}
                      onChange={(e) => setEndMinute(Number(e.target.value))}
                      sx={{ minWidth: 70, height: 30 }}
                    >
                      {minutes.map((minute) => (
                        <MenuItem key={minute} value={minute}>
                          {String(minute).padStart(2, '0')}분
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography>까지</Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSaveSleepData} disabled={saving}>
                {saving ? '저장 중...' : '저장'}
              </Button>
              <Button onClick={() => setOpenDialog(false)}>취소</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default SleepTracker;