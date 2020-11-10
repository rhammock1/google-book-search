import React from 'react';
import BookCard from './BookCard/BookCard';

const BookList = function(props) {
  
  return(
    <div className='book-list-container'>
      {console.log(props.books)}
      {props.books.map((book, index) => {
        let title = book.volumeInfo.title;
        let author = book.volumeInfo.authors;
        let desc = book.volumeInfo.description;
        let price = !book.saleInfo.listPrice ? "Couldn't find it, Boss" : book.saleInfo.listPrice.amount;
        let thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
        return(
          <BookCard key={index} author={author} description={desc} price={price} thumbnail={thumbnail} book={book} title={title}/>
        )
      })}
      
    </div>
    )
}

BookList.defaultProps = {
  books:[]
}
export default BookList;
