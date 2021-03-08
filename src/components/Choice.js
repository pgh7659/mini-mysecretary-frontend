import React from 'react';

function ChoiceRadio({ name, text="defaultText", value=false, clickHandler }) {
  return (
    <>
      <input name={name} type="radio" id={`radio-${value}`} value={value} onClick={clickHandler} defaultChecked={!value}/>
      <label htmlFor={`radio-${value}`} style={{color:"blue"}}>{text}</label>
    </>
  )
}

function Choice({ name, mapList=[{value:false, text:"default"}], clickHandler }) {
  return (
    <div>
      {
        mapList.map(item => (<ChoiceRadio key={item.value} name={name} text={item.text} value={item.value} clickHandler={clickHandler} />))
      }
    </div>
  )
}

export default Choice;