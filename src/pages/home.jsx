import React from 'react';
import ShinyButton from '../components/shiny-button';
import Carousel from '../components/carousel';
import Quizlet from '../components/quizlet';
import Cards from '../components/cards';

function Home(props) {

    return (
        <main>
            <section className="bio">
                {/* <figure className="aside-left">
                    <div className="round-frame">
                        <img src="https://placekitten.com/g/200/200" alt="Sophia 'Charlie' Dever"/>
                    </div>
                        <figcaption>Sophia "Charlie" Dever</figcaption>
                </figure> */}
                <img src="/banner.jpg" alt="A girl on her laptop, celebrating."/>
                <div>
                    <p className="splash-text">
                    Teegarden Tutoring is a Bay-Area-based company offering premier one-on-one K-12 math tutoring over Zoom for support and enrichment. 
                    Whether your student is looking for help in a challenging math class, coaching for an upcoming test or contest, 
                    or to explore beyond the boundaries of what they're learning in school, we're here to help.</p>

                    {/* <p className="splash-text">If that sounds like a good fit for your student, click the button below to contact us for a free intake assessment and consultation!
                    </p> */}
                    <ShinyButton />
                </div>
            </section>
            <section className="carousel">
                <Carousel />
            </section>
                <Quizlet />
            <section>
                <h1 style={{ textAlign: 'center' }}>At Teegarden Tutoring, we believe in:</h1>
                <Cards />
            </section>
        </main>
    )
};

export default Home;