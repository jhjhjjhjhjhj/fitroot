import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Section/excSection.css';

const Secfoot = () => {
    const quotes = [
        {
            text: "운동은 삶의 질을 높여주고, 건강한 삶을 지속시킨다.",
            author: "조지프 필라테스"
        },
        {
            text: "건강은 이 세상에서 가장 소중한 재산이다.",
            author: "마하트마 간디"
        },
        {
            text: "체력은 삶의 질을 결정하는 중요한 요소이다.",
            author: "아놀드 슈왈제네거"
        },
        {
            text: "건강한 몸에 건강한 정신이 깃든다.",
            author: "유베날리스"
        },
        {
            text: "운동은 몸뿐만 아니라 마음을 위한 투자이다.",
            author: "미셸 오바마"
        },
        {
            text: "계획하지 않는 목표는 단지 꿈일 뿐이다.",
            author: "앤서니 로빈스"
        },
        {
            text: "당신이 할 수 있다고 믿으면, 반은 이미 이룬 셈이다.",
            author: "시어도어 루즈벨트"
        },
        {
            text: "작은 발걸음들이 결국 큰 목표를 이룬다.",
            author: "로버트 콜리어"
        }
    ];

    return (
        <div className="quote-carousel">
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={7000}
                transitionTime={500}
                emulateTouch={true}
                dynamicHeight={false}
            >
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-slide">
                        <div className="quote-content">
                            <p className="quote-text">"{quote.text}"</p>
                            <p className="quote-author">- {quote.author}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Secfoot;