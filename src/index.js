import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';

ReactDOM.render(
  <>
    <App
      message="You've added file Successfully"
      mode="success"
      open={true}
      timeout={100000}
      actionLabel="Done!"
      action={(e) => console.log(`Yes I've clicked on Done!`, e)}
      bottom={true}
      right={true}
      className="mysnackbar"
      style={{
        textStyle: {
          color: 'white',
          fontSize: '3vh',
        },
        buttonStyle: {
          backgroundColor: 'white',
          color: 'black',
          border: 'solid black 2px'
        },
        containerStyle: {
          background: 'grey',
          borderRadius: 'none',
          border: 'solid black 0px',
          boxShadow: 'black 6px 7px 12px -4px'
        }
      }}
      />
  </>,
  document.getElementById('root')
);