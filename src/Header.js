import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 1px',
  width: 'fit-content',
  marginLeft: '45px'
};

const Header = () => (
  <div style={{ display: 'grid', background: 'black' }}>
    <div style={style}>
      <img
        src="https://uploads-ssl.webflow.com/5cf8fb6198b9ff614cfbd521/5cf8fb6198b9ff1c89fbd566_logo_h.png"
        width="159"
        alt="logo"
      />
    </div>
  </div>
);

export default Header;