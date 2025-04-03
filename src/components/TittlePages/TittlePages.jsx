import React from 'react';
 import './tittlePages.css';

function TittlePages({tittle}) {
    return (
        <div className='wrapper_tittle'>
            <h2>{tittle}</h2>
        </div>
    );
}

export default TittlePages;