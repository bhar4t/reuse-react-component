import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReuseableComponent from './component';

ReactDOM.render(
  <React.StrictMode>
    <ReuseableComponent message="Bharat" mode="ERROR" open />
    <ReuseableComponent message="Bharat1" mode="Warning" open />
  </React.StrictMode>,
  document.getElementById('root')
);

// export default ReuseableComponent;