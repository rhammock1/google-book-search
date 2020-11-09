import React from 'react';

const Error = function(props) {
  return (
    <div>
      <h2>{props.error}</h2>
      <button onClick={() => props.onClearError()}>Clear</button>
    </div>
  )
}

export default Error;