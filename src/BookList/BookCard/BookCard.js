import React from 'react';

const BookCard = function(props) {
  return (
    <div className='book-card-container'>
      <h2>{props.title}</h2>
      <img src={props.thumbnail} alt={props.title} />
      <p>Author: {props.author}</p>
      <p>Price: {props.price}</p>
      <p>{props.description}</p>
    </div>
    )
  

}

BookCard.defaultProps ={
  book: {
    title: ''
  }
}
export default BookCard;

