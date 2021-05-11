import React from 'react';
import ShinyButton from '../components/shiny-button';

function About(props) {

    return ( 
        <main>
            <figure className="aside-right">
                <img src="https://placekitten.com/g/200/200" alt="this is a placekitten" />
                <figcaption>This time the picture is OVER HERE and it's FUNKY.</figcaption>
            </figure>
            <p>
                <b>Sophia "Charlie" Dever</b> is one cool cat.
                They know so much math. Like, all the math.
                It's crazy actually.
            </p>
            <ul>
                <li>
                    Here are some BULLET POINTS!
                </li>
                <li>
                    They're COOL THINGS ABOUT ME.
                </li>
                <li>
                    There will probably be LIKE FIVE.
                </li>
                <li>
                    There are pink dolphins in the Amazon river.
                </li>
                <li>
                    Yep, that's five.
                </li>
            </ul>
            <p>
                Now I'm probably talking about my TEACHING PHILOSOPHY.
                My teaching philosophy is don't suck at teaching.
                It's a great philosophy.
            </p>
            <p>
                This part is probably bragging about my education and experience and stuff.
                I can pretend to be a Russian OR a Hungarian.
                Actually I technically have a certificate in Eastern European studies, but that's for totally unrelated reasons.
            </p>
            <p>Want to get to know me? Try the shiny button!</p>
            <ShinyButton />
        </main>
    )
}

export default About;