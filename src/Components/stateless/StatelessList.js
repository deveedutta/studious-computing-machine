import React from 'react';

const StatelessList = (props) => (
  <li key={this.props.id}>
    <input type="checkbox" />
    <h3>{this.props.campaignName}</h3>
    <span>{this.props.campaignType}</span>
    <span>{this.props.lastSaved}</span>
    <span>
      <button onClick={this.props.edit}>🖊</button>
      <button  onClick={this.props.delete}>❌</button>
      {this.props.campaignLastSaved}
    </span>
  </li>
);


export default StatelessList;