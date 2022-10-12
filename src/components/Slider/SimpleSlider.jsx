import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';


export default function SimpleSlider() {

      const settingsNoModules = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        arrows: false
      }
      return (
        <div className='Slider'>
          <Slider {...settingsNoModules}>
          <div>
            <p>Lorem Ipsum 1</p>
          </div>
          <div>
            <p>Lorem Ipsum 2</p>
          </div>
          <div>
            <p>Lorem Ipsum 3</p>
          </div>
        </Slider>
        </div>
      );
    }
  