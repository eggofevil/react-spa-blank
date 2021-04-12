import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.scss';
import './css/index-2.sass';
import './css/index-3.css';

ReactDOM.render(
  <>
    <h1 className="scss-style">React SPA blank (SCSS style)</h1>
    <div className="sass-style">SASS style</div>
    <div className="css-style">CSS style</div>
  </>,
  document.getElementById(`root`)
);
