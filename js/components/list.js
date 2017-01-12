import React from 'react';

import Card from './card';

export default function List(props) {
    const cards = props.cards.map((text, index) => <Card key={index} text={text.value} />);
    return (
        <div className="list">
            {cards}
        </div>
    );
}
