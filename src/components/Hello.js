import React from 'react';

function Hello({ text="Default", color, visible=true }) {
  console.log('typeof');
  console.log(typeof visible === 'boolean');
  console.log('value');
  console.log(visible);
  return (
    <div style={{color, display:`${visible ? "block" : "none"}`}}>
      <p >{text}</p>
    </div>
    )
}

export default Hello;