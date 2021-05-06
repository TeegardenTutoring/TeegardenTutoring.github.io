import React from 'react';
import Slider from "react-slick";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return (
        <Slider {...settings}>
            <div className="testimonial">
                "There was only one testimonial in the mockup!" — Ash Todd
            </div>
            <div className="testimonial">
                "Charlie is cool and stuff!" — Some Dude
            </div>
            <div className="testimonial">
                "They play Minecraft and I am astounded!" — Incredulous Child
            </div>
            <div className="testimonial">
                "Charlie's face is cute and I want to kiss it!" — Ash Todd
            </div>
            <div className="testimonial">
                "oh wow it's really hard to come up with filler content" — me
            </div>
        </Slider>
    )
};

export default Carousel;