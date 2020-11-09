import React from 'react';

const BookCard = function(props) {
  return (
    <div className='book-card-container'>
      <h2>{props.book.title}</h2>
      <img src={props.book.cover} alt={props.book.title} />
      <p>Author: {props.book.author}</p>
      <p>Price: {props.book.price}</p>
      <p>{props.book.description}</p>
    </div>
    )
  

}

BookCard.defaultProps ={
  book: {
    title: ''
  }
}
export default BookCard;

