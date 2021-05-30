import React from 'react';
import InfoCard from './InfoCard';

// const EXAMPLE_CARD = {
//     title: "",
//     body: ` `,
//     color: #000000,
// };

function Cards(props) {

    const { cards } = props;

    return (
        <div className="card-container">
            {cards.map((card, idx) => {
                return <InfoCard key={card.title} {...card} />
            })}
        </div>
    )
}

export default Cards;