import React from 'react';



  
const Search = function(props) {
    return (
      <form className='search-form'>
        <fieldset>
          <legend>Search Options</legend>
        <label htmlFor='search'>Search Title: </label>
        <input id='search' name='search' type='text' placeholder='e.g. The Island' onChange={(event) => props.onSearchChange(event)}required />
        <label htmlFor='printType'>Print Type: </label>
        <select id='printType' name='printType' onChange={(event) => props.onPrintTypeChange(event)}>
          <option value=''></option>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='filter'>Book Type: </label>
        <select id='filter' name='filter'onChange={(event) => props.onFilterChange(event)}>
          <option value=''></option>
          <option value='partial'>Partial view</option>
          <option value='full'>Full view</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='paid-ebooks'>Paid eBooks</option>
          <option value='ebooks'>Only eBooks</option>
        </select>
        <button type='click' onClick={(event) => props.handleSearchButton(event)}>Search</button>
        </fieldset>
      </form>
      )
  }
  

export default Search;