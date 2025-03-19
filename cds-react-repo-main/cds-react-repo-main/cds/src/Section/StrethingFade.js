import React, { useState } from 'react';
import { CardImg, Fade } from 'reactstrap';

const StrechingFade = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const handleButtonClick = (src) => {
        setFadeIn(false); // 이전 Fade를 숨기기 위해 false로 설정
        setTimeout(() => {
            setImgSrc(src);
            setFadeIn(true); // 약간의 지연 후 Fade를 다시 활성화
        },);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <button className='fadebutton' onClick={() => handleButtonClick("https://lh3.googleusercontent.com/proxy/UFZCBX-D9k_I5nWiL_GU9h4Rz4CsVAMuhl4G-ojqgIwwllh5IM-1FSkBMS2t4njZVCfc8na6i_BPB73YYJMNqbYeO0bsa2wtZjf7")}>어깨 스트레칭</button>
                <button className='fadebutton' onClick={() => handleButtonClick("https://lh6.googleusercontent.com/proxy/sYr3OwwHDYBtx3E6vyrfoedzDHJvSKQbHp-bLY1smQ9vR8MXZ7md3KGZ3FwN2c4-pg_u7rPN84kdRPxmmIzkQJn5-qlfdCldV8rQ")}>무릎 스트레칭</button>
                <button className='fadebutton' onClick={() => handleButtonClick("https://lh4.googleusercontent.com/proxy/yeskZ-hFtJ6kbUb6MjmypYgPAhIS3-XJfuJPoQlI7HV6BPXUgG619KDb2O3n5y22Xx6Lz6-cYwzJebD0o_bDaVtisQ6wd2QtGWAN")}>옆구리 스트레칭</button>
                <button className='fadebutton' onClick={() => handleButtonClick('http://www.korea.kr/newsWeb/resources/temp/images/000117/01_2.jpg')}> 목 스트레칭</button>
                <button className='fadebutton' onClick={() => handleButtonClick('http://www.korea.kr/newsWeb/resources/temp/images/000117/03.jpg')}>손목 스트레칭</button>
                <button className='fadebutton' onClick={() => handleButtonClick('http://www.korea.kr/newsWeb/resources/temp/images/000117/04.jpg')}>허리 스트레칭</button>
            </div>
            <Fade in={fadeIn}>
                <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', marginTop: '20px' }}>
                    {imgSrc && (
                        <CardImg src={imgSrc} style={{ width: '100%' }} />
                    )}
                </div>
            </Fade>
        </div>
    );
};

export default StrechingFade;