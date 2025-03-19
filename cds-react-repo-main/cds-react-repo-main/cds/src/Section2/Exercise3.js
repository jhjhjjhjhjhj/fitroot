import React, { useState } from "react";
import { Grid, TextField, Typography, Modal, Box } from "@mui/material";
import a from './IMG/hamstring.jpeg';
import b from './IMG/cobra.jpeg';
import c from './IMG/butterfly.jpeg';
import d from './IMG/side body.jpeg';
import e from './IMG/crossleg.webp';
import '../Section/excSection.css';

function Exercise3() {
    const exercisesList = [
        {
            name: "햄스트링 스트레치 (Hamstring Stretch)", image: a, alt: "햄스트링 스트레치",
            description: (<>
                <p>효과: 햄스트링(허벅지 뒤쪽 근육)의 유연성을 높이고, 허리의 긴장을 완화합니다.</p>
                <p>방법: 다리를 곧게 펴고 바닥에 앉아 발끝을 향해 상체를 앞으로 숙입니다.
                    손을 발끝 쪽으로 뻗어 햄스트링이 늘어나는 것을 느낍니다.
                    몇 초간 유지한 후 천천히 원위치로 돌아옵니다.</p>
            </>)
        },
        {
            name: "코브라 스트레치 (Cobra Stretch)", image: b, alt: "코브라 스트레치",
            description: (<>
                <p>효과: 허리와 복부 근육을 스트레칭하며, 척추를 유연하게 만듭니다.</p>
                <p>방법: 바닥에 엎드린 상태에서 손바닥을 바닥에 대고 상체를 들어 올립니다.
                    엉덩이는 바닥에 붙인 채로, 허리를 뒤로 젖히며 상체를 아치형으로 만듭니다.
                    몇 초간 유지한 후 천천히 내려옵니다.</p>
            </>)
        },
        {
            name: "나비자세 (Butterfly Stretch)", image: c, alt: "나비자세",
            description: (<>
                <p>효과: 골반과 허벅지 안쪽 근육의 유연성을 향상시킵니다.</p>
                <p>방법: 바닥에 앉아 양발을 모아 발바닥을 붙입니다.
                    발을 잡고, 무릎을 바닥으로 천천히 누르면서 상체를 앞으로 숙입니다.
                    이 자세를 유지하며 허벅지 안쪽의 스트레칭을 느낍니다.</p>
            </>)
        },
        {
            name: "상체 측면 스트레치 (Side Body Stretch)", image: d, alt: "상체 측면 스트레치",
            description: (<>
                <p>효과: 상체의 측면 근육을 늘려주고, 척추의 유연성을 높입니다.</p>
                <p>방법: 양발을 어깨 너비로 벌리고 서서 한쪽 팔을 머리 위로 뻗습니다.
                    상체를 반대쪽으로 기울이며 팔을 따라 몸을 늘려줍니다.
                    반대쪽으로도 반복하여 스트레칭을 유지합니다.</p>
            </>)
        },
        {
            name: "다리 교차 스트레치 (Cross-Legged Stretch)", image: e, alt: "다리 교차 스트레치",
            description: (<>
                <p>효과: 엉덩이와 허벅지 바깥쪽 근육을 스트레칭하며, 골반의 유연성을 높입니다.</p>
                <p>방법: 바닥에 앉아 한쪽 다리를 다른 쪽 다리 위로 교차시켜 세웁니다.
                    반대쪽 팔꿈치를 세운 다리의 바깥쪽에 대고 몸을 돌려 스트레칭을 느낍니다.
                    이 자세를 몇 초간 유지한 후 반대쪽 다리로 반복합니다.</p>
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

export default Exercise3;