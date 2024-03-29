import React from 'react';
import ShinyButton from '../components/shiny-button';

// const example = {
//     icon: "✎",
//     name: "service",
//     blurb: "Lorem ipsum",
//     price: 100
// };

const SERVICES_OFFERED = [
    {
        name: "Initial Consultation & Intake Assessment",
        blurb: "I'll send you a 30-minute test, written in-house, for your student to try. Based on the results, I then offer a free initial consultation over phone, email, or Zoom, to get to know you and discuss your student's learning needs. No commitment required.",
        price: 0
    },
    {
        name: "Kindergarten",
        blurb: "Kindergarten lessons feature games and puzzles to teach foundational skills in logic and mathematical reasoning. No computer skills required.",
        schedule: "To accommodate little attention spans, I meet for sessions of no more than 30 minutes.",
        price: 60
    },
    {
        name: "Elementary School",
        blurb: "Students in grades 1-5 are building foundational math skills for their future learning. I focus on number sense, early algebraic thinking, and drawing out natural love for math with puzzles and games.",
        schedule: "For these young students, I recommend weekly sessions of no more than 1 hour.",
        price: 75
    },
    {
        name: "Middle School",
        blurb: "In grades 6-8, students are entering a phase of intense intellectual exploration and experimentation. I focus on building a deep understanding of functions, geometric constructions, and nurturing problem-solving skills.",
        schedule: "In the middle years, I recommend 75-minute weekly sessions.",
        price: 100
    },
    {
        name: "High School",
        blurb: "Students in grades 9-12 are working towards an adult-level mastery of mathematical thought as they prepare for college and beyond. I focus on mathematical rigor, proof-writing, and a solid grounding in practical trig and calculus for students pursuing further STEM education.",
        schedule: "As students tackle more complex problems, I recommend 90-minute weekly sessions.",
        price: 125
    },
    {
        name: "Test Prep",
        blurb: "Prepare for standardized tests like the SAT, ACT, PSAT, ISEE, or AP Calculus with intensive tutoring to boost your score. I focus on practice tests, test-taking strategies, and addressing test anxiety. Optionally includes prep for reading, verbal, and essay portions.",
        schedule: "In the lead-up to a major test, I recommend 60- or 90-minute sessions twice a week.",
        price: 150
    },
    {
        name: "Competition Coaching",
        blurb: "Train for Mathcounts, AMC8/10/12, AIME, Math League, and other competitions with a math competition veteran. I focus on clever problem-solving, time management, and unique tactics for each test.",
        schedule: "In order to have time for practice tests, I recommend weekly sessions of 60 minutes for middle schoolers and 90 minutes for high schoolers.",
        price: 150
    }
]

function Services(props) {

    return (
        <main className="services">
            <div className="service-menu">
                {SERVICES_OFFERED.map((service, idx) => 
                    <section className={`service`}>
                        <div className="header">
                            <div style={ { display: "flex" } }>
                                { service.icon && <div className="icon-window">
                                    {service.icon}
                                </div>}
                                <h3>{service.name}</h3>
                            </div>
                            <div className="price">
                                <span>{service.price ? `$${service.price}/hr` : <span className="green">Free</span>}</span>
                            </div>
                        </div>
                        <div className="body">
                            <p>{service.blurb}</p>
                            <p>{service.schedule}</p>
                        </div>
                    </section>
                )}
            </div>
            <aside>
                <h3>All Plans</h3>
                <p>All services include, if desired:</p>
                <ul>
                    <li>
                        <h4>Homework assigned after each session.</h4>
                        <p>Get the most out of your time with take-home assignments to practice and develop the skills
                            covered in sessions.</p>
                    </li>
                    <li>
                        <h4>Progress assessments.</h4>
                        <p>Empirical data for you and for me, so I can refine my approach to meet your student's needs 
                            and reinforce problem areas.
                        </p>
                    </li>
                    <li>
                        <h4>Parent-teacher meetings.</h4>
                        <p>Offered via email, phone, or Zoom, for your convenience. You are a core member of your child's 
                            learning team, and it's important to me to stay in sync with you on their progress.
                        </p>
                    </li>
                </ul>
                <h3>Availability</h3>
                <div className="flex">
                    <b>Sun-Thurs.</b>
                    <b>8 am. - 8 pm PST</b>
                </div>
                <p>Let me know how I can work around your schedule!</p>
                <ShinyButton subject={`[New Student] Intake`} />
            </aside>
        </main>
    )
}

export default Services;