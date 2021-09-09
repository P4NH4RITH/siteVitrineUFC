import React from 'react';

const Card = (props) => {
    const { fighter } = props;

    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return ( 
        <li className="card">
            <img src={fighter.pics} alt="warrior" />
            <div className="data-container">
                <ul>
                    <li>{fighter.first_name}</li>
                    <li>{fighter.last_name}</li>
                    <li>{fighter.size}</li>
                    <li>{fighter.weight}</li>
                    <li>{fighter.style}</li>
                </ul>
            </div>
        </li>
    )
};

export default Card;