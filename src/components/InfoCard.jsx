import React from 'react';

const InfoCard = (props) => {

    let { title, body, color } = props;

    return (
        <div className="info-card">
            <div className="card-head">
                <h3 style={{ color: (color || "#1c75bc")}}>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    )
};

export default InfoCard;