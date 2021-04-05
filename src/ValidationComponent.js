import React from 'react';

const validationComponent = (props) => 
{
    const n = props.textLength;
    let validationResult = '';
    if(n > 0 && n < 5)
      validationResult = 'Text too short !!';
    else if (n >= 5)
      validationResult = 'Text Long Enough';
    return <p> {validationResult} </p>;
}

export default validationComponent;