import React from 'react';

function MenuComponent({title, clickHandler}) {
  return (
    <div onClick={clickHandler}>
      <p>{title}</p>
    </div>
  )
}

function Menu() {
  return (
    <nav>
      <div><p>TODO List</p></div>
      <div><p>Anniversary</p></div>
    </nav>
  );
}

export default Menu;