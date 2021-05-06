import React from 'react';
import ShinyButton from '../components/shiny-button';
import Carousel from '../components/carousel';

function Home(props) {

    return (
        <main>
            <section className="flex">
                <figure>
                    <div className="round-frame">
                        <img src="https://placekitten.com/g/200/200" alt="This is CHARLIE. Charlie DOES NOT BITE. They can TEACH YOU MATH."/>
                    </div>
                        <figcaption>This is CHARLIE. Charlie DOES NOT BITE. They can TEACH YOU MATH.</figcaption>
                </figure>
                <div>
                    <p>
                        Here is some TEXT about HOW COOL I AM. Did you know I once wrestled a shark? Yeah. That definitely happened.
                        If you want me to teach your kid math, click the shiny button for a free intake assessment.
                    </p>
                    <ShinyButton />
                </div>
            </section>
            <section>
                <Carousel />
            </section>
        </main>
    )
};

export default Home;