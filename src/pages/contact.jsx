import React from 'react';
import ShinyButton from '../components/shiny-button';

const infoStyle = {
    "margin-left": "3em",
    fontSize: "16pt"
}

function Contact(props) {

    return (
        <main className="contact">
            <img src="https://placekitten.com/g/200/200" alt="this is a placekitten" />
            <div style={infoStyle}>
                <p>✉︎ teegarden.math@gmail.com</p>
                <p>✆ (408) 755-5141</p>
                <ShinyButton />
            </div>
        </main>
    )
}

export default Contact;