import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner0 from "../../../Images/banner-0.jpeg";
import banner1 from "../../../Images/banner-1.jpeg";
import banner2 from "../../../Images/banner-2.jpeg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner0} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-success">Rien'S Photo Diary</h3>
            <p className="bg-dark rounded ">
              “If your photos aren’t good enough, then you’re not close
              enough.”.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-success">Rien'S Photo Diary</h3>
            <p className="bg-dark rounded ">
              “If your photos aren’t good enough, then you’re not close enough.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-success">Rien'S Photo Diary</h3>
            <p className="bg-dark rounded ">
              “If your photos aren’t good enough, then you’re not close enough.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
