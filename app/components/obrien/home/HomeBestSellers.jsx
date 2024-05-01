import BestSellerScreamer from './bestsellers/BestSellerScreamer';
import BestSellerBlackMagic from './bestsellers/BestSellerBlackMagic';
import BestSellerCelebrity from './bestsellers/BestSellerCelebrity';
import BestSellerEasyRider from './bestsellers/BestSellerEasyRider';
import BestSellerWomensTraditional from './bestsellers/BestSellerWomensTraditional';
import BestSellerFreeboard from './bestsellers/BestSellerFreeboard';
import BestSellerWaterCarpet from './bestsellers/BestSellerWaterCarpet';
import BestSellerSystem from './bestsellers/BestSellerSystem';

export default function HomeBestSellers({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
}) {
  return (
    <section id="bestsellers" className="grayBack">
      <div className="inside-sm homeSlidePadd"></div>
      <div className="inside-xxl">
        <div className="auto-grid-home">
          <BestSellerScreamer image1={image1} />
          <BestSellerWomensTraditional image2={image2} />
          <BestSellerSystem image3={image3} />
          <BestSellerCelebrity image4={image4} />
          <BestSellerBlackMagic image5={image5} />
          <BestSellerWaterCarpet image6={image6} />
          <BestSellerEasyRider image7={image7} />
          <BestSellerFreeboard image8={image8} />
        </div>
      </div>
    </section>
  );
}
