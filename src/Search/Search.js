import React from 'react';

const Search = function () {
  return (
    <form className='search-form'>
      <label htmlFor='search'>Search:</label>
      <input id='search' name='search' type='text' placeholder='e.g. The Island' required />
      <button type='click'>Search</button>
    </form>
    
    )
}

export default Search;