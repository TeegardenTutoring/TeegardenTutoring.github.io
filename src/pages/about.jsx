import React from 'react';
import ShinyButton from '../components/shiny-button';

function About(props) {

    return ( 
        <main>
            <figure className="aside-right">
                <img src="/headshot.png" alt="Charlie at work" />
                <figcaption>Charlie</figcaption>
            </figure>
            <p>
                <b>Charlie Dever</b> is a mathematician with a background in teaching, research, and 
                curriculum development. He has a B.S. in mathematics from UT Austin, and previously taught 
                and developed curriculum for the Art of Problem Solving, the Russian School of Mathematics, 
                and Bay Area Learning Partners.
            </p><p>
                With over a decade of K-12 math tutoring experience, Charlie has prepared students for tests including 
                the SAT, ACT, ISEE, and PSAT. He also has experience teaching programming, chemistry, Latin, and fencing!
            </p><p>
                For a free intake assessment and consultation, click the button below.
            </p>
            <ShinyButton />
            <p className="splash-text">What sets Teegarden Tutoring apart from other tutors?</p>
            <p className="splash-text">COMPETITIONS</p>
            <p>
                Personal experience with writing, proctoring, grading, & 
                competing in math competitions gives Charlie an insider's view into how the strongest young mathematicians prepare.
            </p>
            <p className="splash-text">CURRICULUM</p>
            <p>
            Charlie will work with you and your student to find the right curriculum materials, 
            whether that means the textbook their school uses or worksheets geared for their learning style. 
            And if he can't find something "just right", Charlie will design custom materials for your student's needs.
            </p>
            <p className="splash-text">INTERNATIONAL</p>
            <p>
            International training in Russian and Hungarian pedagogy means a diverse background to find a teaching style 
            that works for your student's particular needs.
            </p>
            <p className="splash-text">VIRTUAL</p>
            <p>
            Charlie has years of experience refining teaching techniques that work in the virtual classroom. Ask to see a demonstration of his remote learning setup, or to discuss the best accommodations for your student's needs. 
            </p>
        </main>
    )
}

export default About;