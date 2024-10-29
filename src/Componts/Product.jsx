import React from 'react';

const Product = ({ product }) => {
  return (
    <div style={productStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
};

const productStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '1rem',
  margin: '1rem',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

export default Product;