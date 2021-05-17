import React, { useState } from 'react';
import ShinyButton from '../components/shiny-button';

// const example = {
//     icon: "✎",
//     name: "service",
//     blurb: "Lorem ipsum",
//     price: 100
// };

const SERVICES_OFFERED = [
    {
        icon: "✎",
        name: "Initial Consultation/Intake Assessment",
        blurb: "something about how you consult and intake",
        price: 0
    },
    {
        icon: "✎",
        name: "Elementary School",
        blurb: "K-5 students are building foundational math skills for their future learning. We focus on number sense, early algebraic thinking, and drawing out natural love for math with puzzles and games.",
        schedule: "For our smallest students, we recommend weekly sessions of no more than 1 hour.",
        price: 120
    },
    {
        icon: "✎",
        name: "Middle School",
        blurb: "In grades 6-8, students are entering a phase of intense intellectual exploration and experimentation. We focus on building a deep understanding of functions, geometric constructions, and nurturing problem-solving skills.",
        schedule: "In the middle years, we recommend 75-minute weekly sessions.",
        price: 140
    },
    {
        icon: "✎",
        name: "High School",
        blurb: "Students in grades 9-12 are working towards an adult-level mastery of mathematical thought as they prepare for college and beyond. We focus on mathematical rigor, proof-writing, and a solid grounding in practical trig and calculus for students pursuing further STEM education.",
        schedule: "As students tackle more complex problems, we recommend 90-minute weekly sessions.",
        price: 160
    },
    {
        icon: "✎",
        name: "Test Prep",
        blurb: "Prepare for standardized tests like the SAT, ACT, PSAT, ISEE, or AP Calculus with intensive tutoring to boost your score. We focus on practice tests, test-taking strategies, and addressing test anxiety. Optionally includes prep for reading, verbal, and essay portions.",
        schedule: "In the lead-up to a major test, we recommend 60- or 90-minute sessions twice a week.",
        price: 180
    },
    {
        icon: "✎",
        name: "Competition Coaching",
        blurb: "Train for Mathcounts, AMC8/10/12, AIME, Math League, and other competitions with a math competition veteran. We focus on clever problem-solving, time management, and unique tactics for each test.",
        schedule: "In order to have time for practice tests, we recommend weekly sessions of 60 minutes for middle schoolers and 90 minutes for high schoolers.",
        price: 180
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
                                <div className="icon-window">
                                    {service.icon}
                                </div>
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
                        <p>Here is a blurb about why having this is cool, great and awesome.</p>
                    </li>
                    <li>
                        <h4>Monthly progress assessments.</h4>
                        <p>Here is a blurb about why having this is cool, great and awesome.</p>
                    </li>
                    <li>
                        <h4>Monthly parent-teacher meetings.</h4>
                        <p>Here is a blurb about why having this is cool, great and awesome.</p>
                    </li>
                </ul>
                <h3>Availability</h3>
                <div className="flex">
                    <b>Sun-Thurs.</b>
                    <b>8 am. - 8 pm.</b>
                </div>
                <p>Let us know how we can work around your schedule!</p>
                <ShinyButton subject={`[New Student] Intake`} />
            </aside>
        </main>
    )
}

export default Services;