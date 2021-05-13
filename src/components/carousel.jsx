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
                "Alex left your session feeling very positive and said it was helpful.  He thought you were very nice :) ... Grateful to have you on the team to support Alex." — JoEllen
            </div>
            <div className="testimonial">
                "[Aria] was very enthusiastic after her session today and proud of herself. She showed me how she worked through one of the problems below and was very excited about learning today as well." — Arpita
            </div>
            <div className="testimonial">
                "We were so pleased with [Student]'s performance on his most recent math test!"
            </div>
        </Slider>
    )
};

export default Carousel;