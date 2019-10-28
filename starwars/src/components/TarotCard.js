import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: white;
    background-color: grey;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
`

const TarotCard = props => {
    return (
        <StyledDiv className="description">
            <h2>NAME: {props.name}</h2>
            <p>SPECIES: {props.species}</p>
            <p>SKIN COLOR: {props.skin_color}</p>
            <p>HAIR COLOR: {props.hair_color}</p>
            <p>HEIGHT: {props.height}</p>
            <p>MASS: {props.mass}kg</p>
        </StyledDiv>
    );
}

export default TarotCard;