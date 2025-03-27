import React from 'react'
import './Card.css'

const Card = props => {
  return (
    <li ref={props.scrollRefferal} className='card'>
        <div onClick={props.favoritsFunc} className='favorits'>

        </div>
        <h3 className='book--name'>
            {props.bookName}
        </h3>
        <p>
            {props.bookAuthor}
        </p>
    </li>
  )
}



export default Card