import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../data/data.json';

const DetailPage = () => {
    const { id } = useParams();
    const item = data.find((element) => element.id === id);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>HP: {item.hp}</p>
            <p>Types: {item.types.join(', ')}</p>
            <p>Attacks: {item.attacks.map((attack) => (
                <div key={attack.name}>
                    <strong>{attack.name}</strong>: {attack.text} (Damage: {attack.damage})
                </div>
            ))}</p>
        </div>
    );
};

export default DetailPage;
