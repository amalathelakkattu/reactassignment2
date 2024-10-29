import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Product Listing Page</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};

export default Header;