import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  const images = [
    {
      src: "/images/castles-get-married-germany(1).png",
      caption: "Gorgeous castles to get married",
    },
    { src: "/images/Boldt-Castle-Canada2(1).png", caption: "Boldt-Castle-Canada" },
    {
      src: "/images/Neuschwanstein-Castle-Germany(1).png",
      caption: "Neuschwanstein-Castle-Germany",
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop>
      {images.map(({ src, caption }) => (
        <div>
          <img alt={caption} src={src} />
          <p className="legend">{caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
