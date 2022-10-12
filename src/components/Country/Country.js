import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='Box'>
            <h3>This is : {props.name}</h3>
            <h4>Capital : {props.capital}</h4>
            <h4>Population : {props.population}</h4>
        </div>
    );
};

export default Country;