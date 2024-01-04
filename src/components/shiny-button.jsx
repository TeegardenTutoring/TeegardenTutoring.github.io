import React from 'react';

const DEFAULT_MAIL = {
    subject: "Hi please tutor my child",
    body: ""
}

function ShinyButton(props) {

    const subject = props.subject || DEFAULT_MAIL.subject;
    const body = props.body || DEFAULT_MAIL.body;

    const href = `mailto:teegarden.math@gmail.com?&subject=${subject}&body=${body}`;

    return (
        <a href={href} className="shiny-button">▶ Contact me</a>
    )
};

export default ShinyButton;