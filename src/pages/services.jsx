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
        icon: "✎",
        name: "Elementary School",
        blurb: "Learn about very small numbers. Zero. One. Maybe two. No promises.",
        price: 120
    },
    {
        icon: "✎",
        name: "Middle School",
        blurb: "Smart with math but stupid with love? We can do even smarter with math!",
        price: 140
    },
    {
        icon: "✎",
        name: "High School",
        blurb: "Don't you kids have enough homework already? Do you really want more? Blink twice if you're being watched.",
        price: 160
    },
    {
        icon: "✎",
        name: "Test Prep",
        blurb: "I can just charge whatever I want for this because the scholarships are worth it.",
        price: 180
    },
    {
        icon: "✎",
        name: "Competition Coaching",
        blurb: "Oh please? It's my very favorite thing. Please hire me for this. Please please please.",
        price: 100
    }
]

function Services(props) {

    return (
        <main className="services">
            {SERVICES_OFFERED.map((service) => 
                <section className="service">
                    <div className="header">
                        <div style={ { display: "flex" } }>
                            <div className="icon-window">
                                {service.icon}
                            </div>
                            <h3>{service.name}</h3>
                        </div>
                        <div className="price">
                            <span>${service.price}/hr</span>
                        </div>
                    </div>
                    <div>
                        <p>{service.blurb}</p>
                        <ShinyButton />
                    </div>
                </section>
            )}
        </main>
    )
}

export default Services;