import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousal() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={3}
    >
      <Slider className="mr__b__sm">
        <Slide index={0}>
          <img
            src="https://www.streebo.com/blog/wp-content/uploads/2016/07/Title-Slide-02-730x410.jpg"
            width="100%"
            height="100%"
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt="image"
          />
        </Slide>

        <Slide index={1}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/55a17834e4b082d007400d10/1526591273543-CX9EOGRDZZ2653F1Q2M4/list+view+section+tabs.png?format=1000w"
            width="100%"
            height="100%"
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt="image"
          />
        </Slide>
        <Slide index={2}>
          <img
            src="https://img.freepik.com/premium-photo/customer-feedback-form-mobile-phone_746318-4248.jpg?w=2000"
            width="100%"
            height="100%"
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt="image"
          />
        </Slide>
      </Slider>
      <div className="dis__flex a__i__c j__c__c">
        <ButtonBack className="btn__slider">Back</ButtonBack>
        <ButtonNext className="btn__slider">Next</ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default Carousal;
