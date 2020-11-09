import React from 'react';
import BookCard from './BookCard/BookCard';

const BookList = function(props) {

  return(
    <div className='book-list-container'>
      {/* Need to map through state.books to create book card for ea book */}
      {props.books.map((book) => {
        return(
          <BookCard book={book}/>
        )
      })}
      
    </div>
    )
}

BookList.defaultProps = {
  books:[]
}
export default BookList;