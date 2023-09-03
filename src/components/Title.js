import React from 'react';

function Title(props) {
    return (
      <div className="flex justify-center py-5">
       <h2 className='text-3xl font-bold text-white'>{props.text}</h2>
      </div>
    );
  }
  
  export default Title;
  