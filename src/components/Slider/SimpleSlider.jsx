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
          <div className="lorem">
            <p>Comic Trio</p>
          </div>
          <div className="lorem">
            <p>Save the Date</p>
          </div>
          <div className="lorem">
            <p>Green Pill</p>
          </div>
        </Slider>
        </div>
      );
    }
  