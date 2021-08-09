import React from 'react';
import ReactDOM from 'react-dom';
import SnackBar from './component';

ReactDOM.render(
  <SnackBar message="You've added file Successfully" mode="SUCCESS" open={true} timeout={3000} />,
  document.getElementById('root')
);