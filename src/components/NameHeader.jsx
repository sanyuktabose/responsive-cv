import React from 'react';
import './NameHeader.css';

export function NameHeader({ name, introduction }) {
  return (
    <div className="name-and-intro">
      <div className="name">{name}</div>
      <ul className="body-content">
        {introduction.map(i => <li key={i.slice(0, 4)}>{i}</li>)}
      </ul>
      <hr className='line'/>
    </div>
  );
}
