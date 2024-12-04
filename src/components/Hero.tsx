
import Image from 'next/image';
 
 import  "../style/Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Section (Text Content) */}
      <div className="hero__text hero__text--md">
        <h1 className="hero__heading hero__heading--md">
          NEW
        </h1>
        
        {/* Gap between headings */}
        <h2 className="hero__heading hero__heading--md">
          COLLECTION
        </h2>

        {/* Paragraph */}
        <p className="hero__paragraph">
          Explore our newest collection of classic bags carefully curated to combine style durability and functionality Perfect for every occasion these bags are designed to elevate your everyday look while keeping your essentials organized Dont miss out on this exclusive release
        </p>
        
        {/* Shop Now Button */}
        <button className="hero__button hero__button--md">
          Shop Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="hero__image hero__image--md">
        <Image
          src="/bag.png" // Replace with your image path
          alt="Classic Bags Collection"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default Hero;
