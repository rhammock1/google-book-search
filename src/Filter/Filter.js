import React from 'react';

const Filter = function() {
  return (
    <form className='filter-form'>
      <fieldset>
        <legend>Filter Options</legend>
        <label htmlFor='print-type'>Print Type: </label>
        <select id='print-type'>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='book-type'>Book Type: </label>
        <select id='book-type'>
          <option value='partial'>Partial view</option>
          <option value='full'>Full view</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='paid-ebooks'>Paid eBooks</option>
          <option value='ebooks'>Only eBooks</option>
        </select>
      </fieldset>
    </form>
  )
}

export default Filter;