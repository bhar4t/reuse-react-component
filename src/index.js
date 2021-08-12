import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';
import './index.css'

ReactDOM.render(
  <>
    <App
      message="You've added file Successfully"
      mode="success"
      open={true}
      timeout={100000}
      actionLabel="Done!"
      action={(e) => console.log(`Yes I've clicked on Done!`, e)}
      />
      <App
      message="You've added file Successfully"
      mode="ERROR"
      open={true}
      timeout={3000}
      actionLabel="Done!"
      action={(e) => console.log(`Yes I've clicked on Done!`, e)}
      bottom={false}
      />
  </>,
  document.getElementById('root')
);