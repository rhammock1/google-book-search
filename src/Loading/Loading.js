import React from 'react';
import './Loading.css'

const Loading = function() {
  return (
    <div className='loading-container'>
      <img id='loading' src='https://media.giphy.com/media/QsZxCOejpGL9U48kyo/giphy.gif' alt='Loading screen' />
    </div>
  )
}

export default Loading;