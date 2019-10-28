import React from 'react';

const TarotCard = props => {
    return (
        <div className="description">
            <h2>NAME: {props.name}</h2>
            <p>SPECIES: {props.species}</p>
            <p>SKIN COLOR: {props.skin_color}</p>
            <p>HAIR COLOR: {props.hair_color}</p>
            <p>HEIGHT: {props.height}cm</p>
            <p>MASS: {props.mass}kg</p>
        </div>
    );
}

export default TarotCard;