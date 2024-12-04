
import "../style/About.css"
import React from 'react';


const About = () => {
  return (
    <div className="about">
      {/* Left Section (Text Content) */}
      <div className="about__text about__text--md">
        <h1 className="about__heading about__heading--md">
          ABOUT US
        </h1>
        
        {/* Paragraph */}
        <p className="about__paragraph">
          Our classic bags we believe a great bag is more than just an accessory
          Its an expression of your inner style and strength From board meetings
          to brunches we want you to feel empowered, confident and ready to take
          on the world Thats why we create bags that bring out the best in you
          Timeless beautiful and made to last If possible mention any sustainable
          practices in the production process as more customers are becoming
          environmentally conscious
        </p>
        
        {/* Shop Now Button */}
        <button className="about__button about__button--md">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default About