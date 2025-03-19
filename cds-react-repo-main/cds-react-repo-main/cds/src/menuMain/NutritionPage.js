import React, { useState } from "react";
import img21 from './img/21.png';
import img22 from './img/22.png';
import img23 from './img/23.png';
import img24 from './img/24.png';
import img25 from './img/25.png';
import img26 from './img/26.png';
import img27 from './img/27.png';
import img28 from './img/28.png';
import img03 from './img/03.png';
import img001 from './img/001.png';
import img002 from './img/002.png';
import img003 from './img/003.png';
import img004 from './img/004.png';
import img005 from './img/005.png';
import img006 from './img/006.png';
import img007 from './img/007.png';
import img008 from './img/008.png';
import { useSelector } from "react-redux";
import './disign.css';

const images = {
  img21: img21,
  img22: img22,
  img23: img23,
  img24: img24,
  img25: img25,
  img26: img26,
  img27: img27,
  img28: img28,
  img03: img03,
  img001: img001,
  img002: img002,
  img003: img003,
  img004: img004,
  img005: img005,
  img006: img006,
  img007: img007,
  img008: img008,
};

const ProductItem = ({ productName, calories, nutrients, productLink, imgSrc, toggleModal }) => {
  const { isLoggedIn } = useSelector((state) => state); 
  return (
    <div className="food-product-item">
      <div className="food-product-item-inner">
        <div className="food-product-front">
          <a href={productLink}><img src={images[imgSrc]} alt={productName} /></a>
          <div className="food-product-description">{productName}</div>
        </div>
        {isLoggedIn ? 
          <div className="food-product-back">
            <div className="food-product-back-content">
              <p>{calories}</p>
              <p>{nutrients}</p>
              <button className="food-recipe-button" onClick={() => toggleModal(imgSrc)}>효능 확인하기</button>
              <a href={productLink}><button className="food-purchase-button">상품 구매하기</button></a>
            </div>
          </div> : <p className="food-product-back">로그인 후 확인 가능합니다.</p>
        }
      </div>
    </div>
  );
};

function NutritionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggleModal = (imgSrc) => {
    if (imgSrc === 'img03') {
      setCurrentImage('img03');
    } else {
      const imageMap = {
        img21: 'img001',
        img22: 'img002',
        img23: 'img003',
        img24: 'img004',
        img25: 'img005',
        img26: 'img006',
        img27: 'img007',
        img28: 'img008',
      };
      setCurrentImage(imageMap[imgSrc]);
    }
    setIsModalOpen(!isModalOpen);
  };

  const nutritionProducts = [
    ["[라티브] 클렌즈/디톡스 과채주스 (4종)", "150~200ml (46~79ckal)", "영양소: 비타민 A, B, C, E, 마그네슘, 미네랄 등", "https://www.yundiet.com/shop_view/?idx=128", "img21"],
    ["종합 영양제 멀티 비타민 미네랄", "3개월분 / 피로회복", "영양소: 비타민D, B1, B2, B6, B12, C, E, K, 나이아신, 판토텐산, 엽산, 비오틴, 아연, 요오드, 망간 등", "https://smartstore.naver.com/ren0509/products/9027526445", "img22"],
    ["센트룸 멀티구미 젤리", "20일분 / 칼로리: 50kcal", "영양소: 비타민 C, E, 비오틴, 나이아신, 요오드 등", "https://smartstore.naver.com/small-inhome/products/6951188731", "img23"],
    ["종근당건강 락토핏 골드 생유산균", "1통(50일분) / 칼로리: 30kcal", "영양소: 유산균", "https://brand.naver.com/ckdhc/products/8302714433", "img24"],
    ["고려은단 멀티비타민", "멀티비타민 올인원 1560mg x 60캡슐(1개)", "영양소: 비타민A,C,D,E", "https://brand.naver.com/koreaeundanhc/products/5288465421", "img25"],
    ["[다노] 고백펌킨티_호박차 티백", "100% 국산 늙은 호박차 티백", "영양소: 비타민 A, 섬유질 / 효능: 트러블과 노화방지, 시력보호", "https://danoshop.net/product/%EB%8B%A4%EB%85%B8-31-%EC%A6%9D%EC%A0%95-%EA%B3%A0%EB%B0%B1%ED%8E%8C%ED%82%A8%ED%8B%B0100-%EA%B5%AD%EC%82%B0-%EB%8A%99%EC%9D%80-%ED%98%B8%EB%B0%95%EC%B0%A8-%ED%8B%B0%EB%B0%B5/910", "img26"],
    ["[다노] 초코에빠진병아리콩", "단백질 초코볼 / 저당 0.7g", "영양소: 단백질", "https://danoshop.net/product/%EB%8B%A4%EB%85%B8-31-%EC%A6%9D%EC%A0%95-%EC%B4%88%EC%BD%94%EC%97%90%EB%B9%A0%EC%A7%84%EB%B3%91%EC%95%84%EB%A6%AC%EC%BD%A9-%EB%8B%A8%EB%B0%B1%EC%A7%88%EC%B4%88%EC%BD%94%EB%B3%BC/183", "img27"],
    ["오쏘몰 바이탈 m 7일분", "1개월분 / 영양보충", "영양소: 오메가3, 비타민A, C, E, 미네랄 함유, 비오틴, 아연, 칼슘 등", "https://brand.naver.com/dapharm/products/9682610504", "img28"],
  ];

  return (
    <div className="food-product-grid">
      <div id="nutrition-section" className="food-product-row">
        <div className="food-product-row-title-container">
          <div className="food-product-row-title">영양 톡톡</div>
          <button className="food-info-button" onClick={() => toggleModal('img03')}>
            필독!
          </button>
        </div>
        {nutritionProducts.map((product, index) => (
          <ProductItem
            key={index}
            productName={product[0]}
            calories={product[1]}
            nutrients={product[2]}
            productLink={product[3]}
            imgSrc={product[4]}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {isModalOpen && currentImage && (
        <div id="nutrition-info-modal" className="food-modal">
          <div className="food-modal-content">
            <span className="food-close-button" onClick={toggleModal}>&times;</span>
            <img src={images[currentImage]} alt="효능 정보" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NutritionPage;
