import React from 'react';

const charComponent = (props) => {
    const box = {
        backgroundColor: 'lightgray',
        padding: '16px',
        textAlign: 'centre',
        margin: '16px',
        width: '300px',
        height: '150px',
        border: '1px:solid black'
      }

    console.log(props.charEach);
    return ( <li className={box} onClick={props.click} > {props.charEach} </li> 
   );
};

export default charComponent;