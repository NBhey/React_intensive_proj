import React from 'react';
 import './tittlePages.css';

function TittlePages({tittle, addTittle}) {
    return (
        <div className='wrapper_tittle'>
            <h2>{tittle}</h2>
            {addTittle && <span>{addTittle}</span>}
        </div>
    );
}

export default TittlePages;