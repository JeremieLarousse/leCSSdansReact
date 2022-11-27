import React from 'react';

const Informations = ({info}) => {
    return (
        <div>
            <h2 className='titleDiv'>
                {info.name}
            </h2>

            <div>
                <img className="imgDiv" src={info.image} alt="Minus et Cortex" />
            </div>

            <div>
                <p className='description'>{info.description.paragraph}</p>
            </div>

        </div>
    );
};

export default Informations;