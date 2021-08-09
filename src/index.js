import React from 'react';
import ReactDOM from 'react-dom';
import ReuseableComponent from './component';

ReactDOM.render(
  <ReuseableComponent message="Bharat" mode="ERROR" open timeout="10000" />,
  document.getElementById('root')
);