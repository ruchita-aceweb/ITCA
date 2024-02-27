import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "../Dataadded/Eventdata";
import "../Styles/SliderComponent.css";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../Styles/font.css";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      isSmallScreen: window.innerWidth <= 768
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 1200,
    });
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      isSmallScreen: window.innerWidth <= 768
    });
  };

  render() {
    const { isSmallScreen } = this.state;

    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: isSmallScreen ? 1 : 3,
      slidesToScroll: 1,
      initialSlide: 0,
      
    };

    return (
      <div className="p-9 bg-black text-white" data-aos="fade-up">
        <div className="text-center w-full">
          <div className="text-6xl font-bold mb-6">
            <h1>Our Event</h1>
          </div>
        </div>

        <Slider ref={this.slider} {...settings}>
          {Ddata.map((value, index) => (
           
            <div className="container m-auto" key={index}>
              <div className="bg-white text-black mx-6 p-9 rounded-2xl">
<div>
<img  src={value.image} alt=""  className="mb-2 " />
</div>
<div className="text-center">
                  <h3 className="font-bold mb-1 text-xl">{value.eventname}</h3>
                  <div className="btns">
                    <div className="btn-style">
                      <Link to={value.link}>Know More</Link>
                    </div>
                  </div>
                </div>
             
              </div>

            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
