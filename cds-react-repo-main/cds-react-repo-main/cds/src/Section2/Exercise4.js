import React, { useState } from "react";
import { Grid, TextField, Typography, Modal, Box } from "@mui/material";
import a from './IMG/running.jpeg';
import b from './IMG/cycling.jpeg';
import c from './IMG/power walking.jpeg';
import d from './IMG/jumping.jpeg';
import '../Section/excSection.css';

function Exercise4() {
    const exercisesList = [
        {
            name: "러닝 (running)", image: a, alt: "러닝",
            description: (<>
                <p>효과: 심장과 폐의 기능을 강화하고, 체지방 감소에 효과적입니다. 또한 하체 근육을 발달시키고 스트레스 해소에도 도움이 됩니다.</p>
                <p>방법: 편안한 운동화와 복장을 착용합니다.
                    일정한 속도로 가볍게 달립니다. 처음에는 천천히 시작하고, 점차 속도를 높입니다.
                    최소 20분 이상 조깅을 지속하여 효과를 극대화합니다.</p>
            </>)
        },
        {
            name: "사이클링 (Cycling)", image: b, alt: "사이클링",
            description: (<>
                <p>효과: 하체 근육을 강화하고, 심폐 기능을 향상시키며, 관절에 무리가 적어 체중 감량에 효과적입니다.</p>
                <p>방법: 자전거를 타고 평탄한 도로나 자전거 도로에서 출발합니다.
                    일정한 속도로 페달을 밟아 심박수를 유지합니다.
                    30분에서 1시간 정도 지속적으로 타는 것이 좋습니다.</p>
            </>)
        },
        {
            name: "파워 워킹 (Power Walking)", image: c, alt: "파워 워킹",
            description: (<>
                <p>효과: 걷기의 장점에 더해 빠른 걸음으로 심박수를 높여 심폐 지구력을 강화하고 체지방을 줄이는 데 도움이 됩니다. 관절에 부담이 적어 안전하게 할 수 있는 운동입니다.</p>
                <p>방법: 편안한 운동화와 복장을 착용하고, 허리를 곧게 펴고 어깨를 이완시킨 채로 걷기 시작합니다.
                    보폭을 넓히고 팔을 힘차게 흔들며 빠른 속도로 걷습니다.
                    최소 30분에서 1시간 정도 지속적으로 걸으며, 적당한 속도로 유지합니다.</p>
            </>)
        },
        {
            name: "점핑잭 (Jumping Jacks)", image: d, alt: "점핑잭",
            description: (<>
                <p>효과: 전신의 근육을 사용하여 심박수를 높이고, 전반적인 체력을 향상시킵니다. 간단한 동작으로 장소에 구애받지 않고 할 수 있습니다.</p>
                <p>방법: 발을 모으고 서서, 팔을 몸 옆에 둡니다.
                    동시에 팔을 머리 위로 올리면서 다리를 양옆으로 점프합니다.
                    다시 원래 자세로 돌아오며 반복합니다. 한 세트에 20-30회를 반복하며, 3세트 정도 진행합니다.</p>
            </>)
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [exercises, setExercises] = useState(exercisesList);
    const [open, setOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchTerm(searchValue);
        const filteredExercises = exercisesList.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchValue)
        );
        setExercises(filteredExercises);
    };

    const handleClick = (exercise) => {
        setSelectedExercise(exercise);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedExercise(null);
    };

    return (
        <div>
            <TextField
                label="운동 검색"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleSearch}
                style={{ marginBottom: '20px' }}
            />

            <Grid container spacing={4}>
                {exercises.map((exercise, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <a
                            href="#"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            onClick={() => handleClick(exercise)}
                        >
                            <div className="exercise-box">
                                <img className="eximg"
                                    src={exercise.image} alt={exercise.alt} />
                                <Typography variant="h6" align="center">
                                    {exercise.name}
                                </Typography>
                            </div>
                        </a>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px',
                    }}
                >
                    {selectedExercise && (
                        <>
                            <img
                                src={selectedExercise.image}
                                alt={selectedExercise.alt}
                                style={{
                                    width: '400px',   // 원하는 고정 너비
                                    height: '300px',  // 원하는 고정 높이
                                    objectFit: 'cover', // 이미지 비율 유지하면서 잘라냄
                                }}
                            />
                            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                                {selectedExercise.name}
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                                {selectedExercise.description}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default Exercise4;