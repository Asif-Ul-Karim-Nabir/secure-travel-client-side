import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.css'

const Plan = (props) => {
    const {_id, name, img,descriptions,price} = props.plan

    return (
        <div className="plan-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{descriptions}</p>
                <Link to={`/plans/${_id}`}>
                <button>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Plan;