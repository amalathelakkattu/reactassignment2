
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Product List</h1>
      <div className="row gy-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} style={{height: '200px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-success">${product.price}</p>
                <p className="card-text">{product.description.substring(0, 80)}...</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
