import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
const style = {
  color: 'white',
  fontSize: 25,
  fontStyle: 'italic',
  fontWeight: 100

};

export const HomePage = () => (
  <div>
    <div className="parallax">
      <div className="text-container">
      <span className="title">CLEARANCE SELL<br></br><span style= {style}>start from 6 June</span></span>
      </div>
    </div>

    <div className="homepage">
      <Directory></Directory>
    </div>
  </div>
);
