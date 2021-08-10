import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';

ReactDOM.render(
  <App  message="You've added file Successfully" mode="success" open={true} />,
  document.getElementById('root')
);