import React, { useState } from "react";
import img11 from './img/11.png';
import img12 from './img/12.png';
import img13 from './img/13.png';
import img14 from './img/14.png';
import img15 from './img/15.png';
import img16 from './img/16.png';
import img17 from './img/17.png';
import img18 from './img/18.png';
import img02 from './img/02.png';

import family1 from './img/가족1.png';
import family2 from './img/가족2.png';
import family3 from './img/가족3.png';
import family4 from './img/가족4.png';
import family5 from './img/가족5.png';
import family6 from './img/가족6.png';
import family7 from './img/가족7.png';
import family8 from './img/가족8.png';

import { useSelector } from "react-redux";

import './disign.css';

const images = {
  img11: img11,
  img12: img12,
  img13: img13,
  img14: img14,
  img15: img15,
  img16: img16,
  img17: img17,
  img18: img18,
  img02: img02,
};

const familyImages = {
  img11: family1,
  img12: family2,
  img13: family3,
  img14: family4,
  img15: family5,
  img16: family6,
  img17: family7,
  img18: family8,
};


const ProductItem = ({ productName, calories, nutrients, productLink, imgSrc, toggleModal }) => {
  const { isLoggedIn } = useSelector((state) => state);
  const buttonText =
    productName.includes('제철 과일 정기구독 (소)') ||
      productName.includes('제철 과일 정기구독 (중)') ?
      '효능 확인하기' :
      '레시피 확인하기';

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
              <button className="food-recipe-button" onClick={() => toggleModal(familyImages[imgSrc])}>{buttonText}</button>
              <a href={productLink}><button className="food-purchase-button">상품 구매하기</button></a>
            </div>
          </div> : <p className="food-product-back">로그인 후 확인 가능합니다.</p>
        }
      </div>
    </div>
  );
};

function FamilyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggleModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(!isModalOpen);
  };

  const toggleInfoModal = () => {
    setIsInfoModalOpen(!isInfoModalOpen);
  };

  const families = [
    ["골고루반찬식단 (2~3인)", "영양소: 단백질 25g, 탄수화물 35g, 지방 10g", "", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=1631", "img11"],
    ["가족식단 (3~4인)", "영양소: 단백질 30g, 탄수화물 45g, 지방 15g", "", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=2095", "img12"],
    ["부모님식단 (2~3인)", "영양소: 단백질 28g, 탄수화물 38g, 지방 12g", "", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=965", "img13"],
    ["실속식단 (2~3인)", "영양소: 단백질 26g, 탄수화물 36g, 지방 11g", "", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=478", "img14"],
    ["제철 과일 정기구독 (소)", "제철과일 총 3kg", "영양소: 비타민 C, 섬유질", "https://smartstore.naver.com/allfresh/products/6132663095", "img15"],
    ["제철 과일 정기구독 (중)", "제철과일 총 3.5kg", "영양소: 비타민 C, 섬유질", "https://smartstore.naver.com/allfresh/products/6132679153", "img16"],
    ["모둠전 3종", "해물야채전:140g, 매콤김치전:110g, 감자전:150g", "영양소: 단백질 15g, 탄수화물 50g, 지방 20g", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=1080", "img17"],
    ["닭가슴살 참깨무침", "120g", "영양소: 단백질 30g, 탄수화물 10g, 지방 8g", "https://www.zipbanchan.co.kr/shop/goods/goods_view.php?goodsno=993", "img18"],
  ];

  return (
    <div className="food-product-grid">
      <div id="family-section" className="food-product-row">
        <div className="food-product-row-title-container">
          <div className="food-product-row-title">가족 건강식단</div>
          <button className="food-info-button" onClick={toggleInfoModal}>
            필독!
          </button>
        </div>
        {families.map((family, index) => (
          <ProductItem
            key={index}
            productName={family[0]}
            calories={family[1]}
            nutrients={family[2]}
            productLink={family[3]}
            imgSrc={family[4]}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {isModalOpen && (
        <div id="family-info-modal" className="food-modal">
          <div className="food-modal-content">
            <span className="food-close-button" onClick={toggleModal}>&times;</span>
            <img src={currentImage} alt="가족 건강식단 레시피" />
          </div>
        </div>
      )}

      {isInfoModalOpen && (
        <div id="info-modal" className="food-modal">
          <div className="food-modal-content">
            <span className="food-close-button" onClick={toggleInfoModal}>&times;</span>
            <img src={images.img02} alt="가족 건강식단 정보" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FamilyPage;
