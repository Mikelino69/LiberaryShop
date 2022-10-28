import React from "react";
import "../styles/slide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../data";

function Slide() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slide">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => {
          return (
            <div className="containerS">
              <div className="cardS">
                <div className="cardS-top">
                  <img src={item.linkImg} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className="cardS-bottom">
                  <h1>{item.price}</h1>
                  <p className="categoryS">{item.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;
