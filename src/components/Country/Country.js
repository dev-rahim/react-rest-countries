import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, capital, population, flags } = props.country;
    return (
        <div className='Box'>
            <h3>This is : {name.common}</h3>
            <img src={flags.png} alt="Flag" />
            <h5>Capital : {capital}</h5>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;