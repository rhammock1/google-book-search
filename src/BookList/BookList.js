import React from 'react';
import BookCard from './BookCard/BookCard';

const BookList = function(props) {

  return(
    <div className='book-list-container'>
      {/* Need to create unique id */}
      {props.books.map((book) => {
        return(
          <BookCard key={book.id} book={book}/>
        )
      })}
      
    </div>
    )
}

BookList.defaultProps = {
  books:[]
}
export default BookList;