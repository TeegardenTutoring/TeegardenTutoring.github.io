import React from 'react';
import ShinyButton from '../components/shiny-button';
import Carousel from '../components/carousel';
import Quizlet from '../components/quizlet';
import Cards from '../components/cards';

const CARD_LIST = [
    {
        title: "Student-led learning.",
        body: `An inquiry-based approach gives students genuine ownership of the math they learn, 
            and sets them up for math and the sciences in college and beyond. 
            We know that before you can find the right answers, you have to ask the right questions,
            and we encourage students to pursue their questions about the math they learn in school:
            why is that true? how do we know that? what's a counterexample?`,
        color: "#D84848",
    },
    {
        title: "Setting students up for success.",
        body: `When a student struggles with math, it's usually because they haven't been handed the tools they need
            to succeed. An intensive one-on-one approach allows us to tailor our instruction to the individual
            needs of the student, in collaboration with their parents, their educational support team,
            and the student themself. We have experience working with and advocating for autistic students,
            LGBTQ+ students, and students with dyslexia, ADHD, anxiety, dyscalculia, and speech delays,
            as well as profoundly gifted and twice-exceptional students.`,
        color: "#E09149",
    },
    {
        title: "Results you can see.",
        body: `We ask our students to prove their results, so we owe it to them to do the same.
            During our intake process, we set concrete goals; throughout the time we spend together,
            we assess the student's learning at regular intervals and track their progress towards their goals.
            If what we're doing isn't working, we need to know about it, so that we can figure out what to change.`,
        color: "#87c154",
    },
    {
        title: "The joy of math.",
        body: `We're in this business because we love math and we want to share that. If a student is miserable,
            something has gone wrong. We work with students who struggle with math anxiety to rekindle
            their love of learning and show them the fun side of math. When a student asks for
            "just five more minutes", we know we've succeeded as teachers.`,
        color: "#1c75bc",
    },
]

function Home(props) {

    return (
        <main>
            <section className="bio">
                {/* <figure className="aside-left">
                    <div className="round-frame">
                        <img src="https://placekitten.com/g/200/200" alt="Charlie Dever"/>
                    </div>
                        <figcaption>Charlie Dever</figcaption>
                </figure> */}
                <img src="/banner.jpg" alt="A girl on her laptop, celebrating."/>
                <div>
                    <p className="splash-text">
                    Teegarden Tutoring is a small independent tutoring business, specializing in premier one-on-one K-12 math tutoring over Zoom for support and enrichment.
                    Charlie works with students from a number of Bay Area schools, and accepts new students from any location.
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
                <Cards cards={CARD_LIST} />
            </section>
        </main>
    )
};

export default Home;