import React from 'react';

const StatelessList = (props) => (
  <li key={props.postId}>
    <input type="checkbox" />

    <h3>{props.id}. {props.name}</h3>
    <span>{props.type}</span>
    <span>{props.lastSaved}</span>
    <span>
      <button onClick={props.edit}>🖊</button>
      <button  onClick={props.delete}>❌</button>
      {props.campaignLastSaved}
    </span>
  </li>
);


export default StatelessList;