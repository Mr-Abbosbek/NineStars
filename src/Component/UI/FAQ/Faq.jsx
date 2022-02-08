import React, { useState } from 'react';

function Faq(props) {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div onClick={()=>setShowText(!showText)}>
        {
          showText === true
          ? <button className='pointer'>{props.icon_1} {props.title}</button>
          : <button className='d-flex align-items-center p-0'><span>{props.icon_2}</span><p className='p-0'>{props.title}</p></button>
        }
      </div>
      <div>
        <p>{showText === true ? props.text : ""}</p>
      </div>
    </div>
  );
}

export default Faq;