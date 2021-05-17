import React from 'react';
import Slider from "react-slick";

const SLIDES = [
    {
        quote: `Alex left your session feeling very positive and said it was helpful.  
            He thought you were very nice :) ... Grateful to have you on the team to support Alex.`,
        attribution: "JoEllen",
    },
    {
        quote: `[Aria] was very enthusiastic after her session today and proud of herself. 
            She showed me how she worked through one of the problems below 
            and was very excited about learning today as well.`,
        attribution: "Arpita",
    },
    {
        quote: `We were so pleased with [Student]'s performance on his most recent math test!`,
    }
]

function Slide(props) {
    const { quote, attribution } = props;

    return (
        <div className="slide">
            <q className="quote">{quote}</q>
            { attribution ? <div className="attribution">{attribution}</div> : "" }
        </div>
    )
};

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
            {SLIDES.map((slide) => {
                return <Slide {...slide} />
            })}
        </Slider>
    )
};

export default Carousel;