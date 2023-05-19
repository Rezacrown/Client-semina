import React from 'react';
import propTypes from 'prop-types';

const Reza = ({name, umur}) => {
    return (
    <div className="">
        <p>nama:  {name}</p>
        <p>umur:  {umur}</p>
    </div>
    )
}

export default Reza;


Reza.defaultProps = {
    name: 'ejaaa'
}


Reza.propTypes = {
    name: propTypes.string.isRequired,
    data: propTypes.number.isRequired
}