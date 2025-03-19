import React, { useState } from "react";
import { Grid, TextField, Typography, Modal, Box } from "@mui/material";
import sq from './IMG/sq.jpeg';
import pushup from './IMG/push.jpeg';
import deadlift from './IMG/dead.jpeg';
import lunge from './IMG/lunge.jpeg';
import pullup from './IMG/pullup.jpeg';
import press from './IMG/press.jpeg';
import '../Section/excSection.css';
import Secfoot from "./Secfoot";

function Exercise1() {
    const exercisesList = [
        {
            name: "스쿼트 (Squats)", image: sq, alt: "스쿼트",
            description: (<>
                <p>효과: 하체 근력 강화, 둔근(엉덩이 근육), 허벅지, 코어 근육을 강화하고, 전반적인 하체 발달에 도움을 줍니다</p>
                <p>방법: 발을 어깨 너비로 벌리고 서서 손을 가슴 앞에 모으거나 머리 뒤로 깍지 끼고 있습니다.
                    엉덩이를 뒤로 빼면서 무릎을 구부려 앉습니다. 이때 무릎이 발끝을 넘지 않도록 주의합니다.
                    허리를 곧게 펴고, 허벅지가 바닥과 평행이 될 때까지 앉습니다.
                    발뒤꿈치로 바닥을 밀어 일어서며, 처음 자세로 돌아옵니다.</p>
            </>)
        },
        {
            name: "푸쉬업 (Push-ups)", image: pushup, alt: "푸쉬업",
            description: (<>
                <p>효과: 가슴 근육, 어깨, 삼두근, 코어 근육을 강화하며, 전신의 근력과 지구력을 향상시킵니다.</p>
                <p>방법: 팔을 어깨 너비로 벌리고, 손바닥을 바닥에 대고 엎드립니다.
                    몸 전체를 곧게 펴고, 발끝으로 지지하면서 몸을 일직선으로 유지합니다.
                    팔꿈치를 구부려 가슴이 바닥에 가까워질 때까지 천천히 내려갑니다.
                    팔을 펴서 원래 자세로 돌아옵니다.</p>
            </>)
        },
        {
            name: "데드리프트 (Deadlifts)", image: deadlift, alt: "데드리프트",
            description: (<>
                <p>효과: 허리, 엉덩이, 허벅지, 그리고 등 전체 근육을 강화합니다. 코어 안정성과 척추 건강에 매우 효과적입니다.</p>
                <p>방법: 발을 어깨 너비로 벌리고 바벨을 앞에 두고 섭니다.
                    허리를 곧게 펴고, 무릎을 구부려 바벨을 잡습니다.
                    엉덩이와 무릎을 펴면서 바벨을 들어 올려 몸을 세웁니다.
                    몸을 다시 구부리며 바벨을 바닥으로 천천히 내립니다.</p>
            </>)
        },
        {
            name: "런지 (Lunges)", image: lunge, alt: "런지",
            description: (<>
                <p>효과: 허벅지, 엉덩이, 종아리 근육을 강화하고 균형 감각과 코어 근육을 발달시킵니다.</p>
                <p>방법: 양발을 엉덩이 너비로 벌리고 서서, 한쪽 발을 앞으로 크게 내딛습니다.
                    앞쪽 무릎을 구부려 뒤쪽 무릎이 바닥에 가까워지도록 합니다. 이때 앞쪽 무릎이 발끝을 넘지 않도록 주의합니다.
                    앞발로 바닥을 밀어 원래 자세로 돌아옵니다.
                    반대쪽 다리로 반복합니다.</p>
            </>)
        },
        {
            name: "풀업 (Pull-ups)", image: pullup, alt: "풀업",
            description: (<>
                <p>효과: 등 근육, 특히 광배근을 강화하고, 이두근과 어깨 근육도 함께 발달시킵니다.</p>
                <p>방법: 손바닥이 앞을 향하게 하고, 어깨 너비보다 약간 넓게 바를 잡습니다.
                    몸을 천천히 들어 올려 턱이 바 위로 올라오도록 합니다.
                    천천히 몸을 내려 시작 자세로 돌아옵니다.</p>
            </>)
        },
        {
            name: "벤치프레스 (Bench Press)", image: press, alt: "벤치프레스",
            description: (<>
                <p>효과: 가슴 근육, 어깨, 삼두근을 강화하며, 상체 근력을 전반적으로 발달시킵니다.</p>
                <p>방법: 벤치에 누워 발을 바닥에 단단히 고정시킵니다.
                    바벨을 어깨 너비로 잡고, 가슴 바로 위로 들어 올립니다.
                    천천히 바벨을 가슴 쪽으로 내립니다.
                    가슴 근육을 수축시키며 바벨을 다시 들어 올립니다.</p>
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

export default Exercise1;