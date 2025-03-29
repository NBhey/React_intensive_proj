import React from 'react';
import './book.css';

function Book(props) {
    return (
        <div className='wrapper'>
            <div className='book'>
                <div className='leftPage'>
                    <h2>Simple Sabotage Field Manual</h2>
                    <div className='containerParameters'>

                    <ul className='parameters'>
                        <li>Автор(ы): </li>
                        <li>Язык: </li>
                        <li>Количество скачиваний: </li>
                    </ul>
                    <ul className='parameters of'>
                        <li>United States. Office of Strategic Services</li>
                        <li>Английскй</li>
                        <li>134578</li>
                    </ul>
                    </div>
                </div>
                <div className='rootOfBook'>

                </div>
                <div className='rightPage'>
                    <h3>Краткое содержание</h3>
                    <p>Simple Sabotage Field Manual\" by United States. Office of Strategic Services is a historical publication written during the early 1940s, amid World War II. This manual acts as a guide for ordinary civilians to conduct simple acts of sabotage against enemy operations without the need for specialized training or equipment. Its main topic revolves around promoting small, accessible forms of resistance that could collectively disrupt the enemy's war effort.  The manual outlines various strategies and techniques for citizens to engage in sabotage that could be executed discreetly and with minimal risk. It provides specific suggestions for targeting transportation, communication, and industrial </p>
                </div>
            </div>
        </div>
    );
}

export default Book;