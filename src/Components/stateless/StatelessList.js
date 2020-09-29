import React from 'react';

const StatelessList = (props) => (
  <li key={props.postId}>
    <input type="checkbox" />

    <strong>{props.id}. {props.name.substr(0, 30)}..</strong>
    <span>{props.type.substr(0, 30)}....</span>
    <span>{props.lastSaved.substr(0, 30)}....</span>
    <span>
      <button onClick={props.edit}>🖊</button>
      <button  onClick={props.delete}>❌</button>
      {props.campaignLastSaved}
    </span>
  </li>
);


export default StatelessList;