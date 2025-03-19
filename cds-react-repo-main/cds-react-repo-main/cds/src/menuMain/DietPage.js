import React, { useState } from "react";
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';
import img01 from './img/01.png';

import health1 from './img/건강1.png';
import health2 from './img/건강2.png';
import health3 from './img/건강3.png';
import health4 from './img/건강4.png';
import health5 from './img/건강5.png';
import health6 from './img/건강6.png';
import health7 from './img/건강7.png';
import health8 from './img/건강8.png';
import { useSelector } from "react-redux";

import './disign.css';

const images = {
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  img5: img5,
  img6: img6,
  img7: img7,
  img8: img8,
  img01: img01,
};

const healthImages = {
  img1: health1,
  img2: health2,
  img3: health3,
  img4: health4,
  img5: health5,
  img6: health6,
  img7: health7,
  img8: health8,
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
              <button className="food-recipe-button" onClick={() => toggleModal(healthImages[imgSrc])}>레시피 확인하기</button>
              <a href={productLink}><button className="food-purchase-button">상품 구매하기</button></a>
            </div>
          </div> : <p className="food-product-back">로그인 후 확인 가능합니다.</p>
        }
      </div>
    </div>
  );
};



function DietPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const toggleModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

  const diets = [
    ["[샐러드마녀] 스파이시치킨 샐러드", "245g (279kcal)", "영양소: 단백질 20g, 탄수화물 10g, 지방 5g", "https://smartstore.naver.com/saladmanye/products/8782225573", "img1"],
    ["[샐러드마녀] 수비드닭가슴살 샐러드", "260g (286kcal)", "영양소: 비타민, 미네랄", "https://smartstore.naver.com/saladmanye/products/10348328431", "img2"],
    ["훈제오리 샐러드", "250g (325kcal)", "영양소: 단백질 10g, 탄수화물 20g, 지방 2g", "https://www.pocketsalad.co.kr/goods/goods_view.php?goodsNo=116", "img3"],
    ["샐러드 23종 골라담기", "230~250g (231~365kcal)", "영양소: 단백질 5g, 탄수화물 15g, 지방 1g", "https://www.pocketsalad.co.kr/goods/goods_view.php?goodsNo=1000000140", "img4"],
    ["[비비드키친] 저당 드레싱 3종", "1병(205g, 100g당 240kcal)", "영양소: 단백질 15g, 탄수화물 30g, 지방 5g", "https://smartstore.naver.com/vividkitchen/products/8703483194", "img5"],
    ["[비비드키친] 저당죽 6팩 이상 골라담기", "250~280g (154~165kcal)", "영양소: 단백질 15g, 탄수화물 30g, 지방 5g", "https://smartstore.naver.com/vividkitchen/products/8584263589", "img6"],
    ["[다노] 통밀 베이글 2종_식단용 건강빵", "1개(110g), 총270kcal", "영양소: 단백질 12g, 탄수화물 25g, 지방 3g", "https://danoshop.net/product/%EB%8B%A4%EB%85%B8-%ED%86%B5%EB%B0%80-%EB%B2%A0%EC%9D%B4%EA%B8%80-2%EC%A2%85%EC%8B%9D%EB%8B%A8%EC%9A%A9-%EA%B1%B4%EA%B0%95%EB%B9%B5/716/category/251/display/1/", "img7"],
    ["핸디밀 포켓쉐이크 고소한맛 350g (50gx7입)", "50g(170kcal)", "영양소: 단백질 15g, 탄수화물 30g, 지방 5g", "https://shop.pulmuone.co.kr/shop/goodsView?goods=39562&PageCd=P_PC_SerKwd&ContentCd=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8", "img8"],
  ];



  return (
    <div className="food-product-grid">
      <div id="diet-section" className="food-product-row">
        <div className="food-product-row-title-container">
          <div className="food-product-row-title">다이어트 식단</div>
          <button className="food-info-button" onClick={() => toggleModal(images.img01)}>
            필독!
          </button>
        </div>
        {diets.map((diet, index) => (
          <ProductItem
            key={index}
            productName={diet[0]}
            calories={diet[1]}
            nutrients={diet[2]}
            productLink={diet[3]}
            imgSrc={diet[4]}
            toggleModal={toggleModal}
          />
        ))}

      </div>
      {isModalOpen && (
        <div id="diet-info-modal" className="food-modal">
          <div className="food-modal-content">
            <span className="food-close-button" onClick={() => toggleModal(null)}>&times;</span>
            <img src={currentImage} alt="건강 레시피 정보" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DietPage;
