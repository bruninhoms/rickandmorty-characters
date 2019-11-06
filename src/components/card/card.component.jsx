import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className = 'card-container'>
        <img 
            className = 'aligncenter'
            alt='character' 
            src={props.oneCharacter.image}
            width={180}
            height={180}
        />
        <h2>{ props.oneCharacter.name }</h2>
        <p>Origin: { props.oneCharacter.origin.name }</p>
        <p>Species: { props.oneCharacter.species}<br />{props.oneCharacter.type}</p>
        <p>Status: {props.oneCharacter.status}</p>
    </div>
);