import React from 'react';
import ShinyButton from '../components/shiny-button';

const infoStyle = {
    marginLeft: "3em",
    fontSize: "16pt"
}

function Contact(props) {

    return (
        <main className="contact">
            <img style={{ height: "200px" }} src="/contact.jpg" alt="contact"/>
            <div style={infoStyle}>
                <p>✉︎ teegarden.math@gmail.com</p>
                <p>✆ (408) 755-5141</p>
                <ShinyButton />
            </div>
        </main>
    )
}

export default Contact;