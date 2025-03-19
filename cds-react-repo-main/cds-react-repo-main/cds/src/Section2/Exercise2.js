import React, { useState } from "react";
import { Grid, TextField, Typography, Modal, Box } from "@mui/material";
import Catcow from './IMG/Catcow.jpeg'
import bridge from './IMG/bridge.jpeg';
import superman from './IMG/superman.jpeg';
import wallangel from './IMG/wallangel.jpeg';
import chiarsq from './IMG/chiarsq.jpeg';
import child from './IMG/child.jpeg';
import '../Section/excSection.css';

function Exercise2() {
    const exercisesList = [
        {
            name: "고양이-소 스트레칭(Cat-Cow Stretch)", image: Catcow, alt: "고양이-소 스트레칭",
            description: (<>
                <p>효과: 척추의 유연성을 높이고, 목과 등 상부의 긴장을 완화합니다.</p>
                <p>방법: 네 발로 바닥에 엎드린 자세에서, 허리를 천장으로 향하게 아치형으로 굽혔다가, 허리를 아래로 내려 등 전체를 스트레칭합니다. 팔은 앞으로 뻗고, 엉덩이는 발뒤꿈치에 가깝게 유지합니다.</p>
            </>)
        },
        {
            name: "브리지 운동(Bridge Exercise)", image: bridge, alt: "브리지 운동",
            description: (<>
                <p>효과: 둔근(엉덩이 근육)과 하부 허리를 강화해 골반을 안정시킵니다.</p>
                <p>방법: 등을 대고 누워 무릎을 세운 상태에서 엉덩이를 들어 올려 몸이 직선이 되도록 유지합니다. 천천히 엉덩이를 내려 원래 자세로 돌아갑니다. 팔은 앞으로 뻗고, 엉덩이는 발뒤꿈치에 가깝게 유지합니다.</p>
            </>)
        },
        {
            name: "슈퍼맨 운동(Superman Exercise)", image: superman, alt: "슈퍼맨 운동",
            description: (<>
                <p>효과: 허리와 엉덩이, 상체 근육을 강화해 척추를 안정시킵니다.</p>
                <p>방법: 바닥에 엎드린 상태에서 동시에 팔과 다리를 들어 올려 몸이 U자 모양이 되도록 합니다. 몇 초간 유지한 후 천천히 내립니다.</p>
            </>)
        },
        {
            name: "월 엔젤(Wall Angels)", image: wallangel, alt: "월 엔젤",
            description: (<>
                <p>효과: 상체의 자세를 교정하고, 어깨와 등 근육을 강화합니다.</p>
                <p>방법: 벽에 등을 대고 서서 팔을 벽에 붙인 채로 위아래로 움직입니다. 이때 팔이 벽에서 떨어지지 않도록 유지합니다. 팔은 앞으로 뻗고, 엉덩이는 발뒤꿈치에 가깝게 유지합니다.</p>
            </>)
        },
        {
            name: "체어 스쿼트(Chair Squat)", image: chiarsq, alt: "체어 스쿼트",
            description: (<>
                <p>효과: 하체 근육과 둔근을 강화하며, 허리와 무릎의 안정성을 높입니다.</p>
                <p>방법: 의자 앞에 서서, 앉는 듯이 엉덩이를 뒤로 빼며 무릎을 구부립니다. 의자에 닿기 직전 멈추고 일어섭니다.</p>
            </>)
        },
        {
            name: "차일드 포즈(Child's Pose)", image: child, alt: "차일드 포즈",
            description: (<>
                <p>효과: 척추의 유연성을 높이고, 하체와 상체의 긴장을 완화합니다.</p>
                <p>방법: 무릎을 꿇고 앉은 자세에서 상체를 앞으로 숙여 이마가 바닥에 닿도록 합니다. 팔은 앞으로 뻗고, 엉덩이는 발뒤꿈치에 가깝게 유지합니다.</p>
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

export default Exercise2;