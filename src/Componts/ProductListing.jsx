import React from 'react';
import Product from './Product';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://images-na.ssl-images-amazon.com/images/G/02/aplusautomation/vendorimages/0b925aaf-0920-4019-a78e-dbe23cc1d1fa.jpg._CB536181688_.jpg',
      description: 'This is the description of Product 1.',
      price: 100,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://www.thebignano.com/wp-content/uploads/2018/10/81GL-gs9GYL._SL1500_.jpg',
      description: 'This is the description of Product 2.',
      price: 120,
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://via.placeholder.com/200',
      description: 'This is the description of Product 3.',
      price: 90,
    },
    {
        id: 4,
        title: 'Product 4',
        image: 'https://images-na.ssl-images-amazon.com/images/G/02/aplusautomation/vendorimages/fe5dc7f8-6738-42d9-b20d-0120eceef1ec.jpg._CB274416035_.jpg',
        description: 'This is the description of Product 3.',
        price: 90,
      },
      {
        id: 5,
        title: 'Product 5',
        image: 'https://purepng.com/public/uploads/large/purepng.com-sandisk-usb-flash-pen-driveelectronics-pen-drive-usb-9415246650490ar6r.png',
        description: 'This is the description of Product 3.',
        price: 90,
      },
      {
        id: 6,
        title: 'Product 6',
        image: 'https://cdn.windowsreport.com/wp-content/uploads/2018/11/Silicon-Power-Rugged-External-Hard-Drive.jpg',
        description: 'This is the description of Product 3.',
        price: 90,
      },
      {
        id: 7,
        title: 'Product 7',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Oz_jYpQqnWSd7vb7YJU19wHaEK&pid=Api&P=0&h=180',
        description: 'This is the description of Product 3.',
        price: 90,
      },
      {
        id: 8,
        title: 'Product 8',
        image: 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_t713nzkexar_32gb_galaxy_tab_s2_1245718.jpg',
        description: 'This is the description of Product 3.',
        price: 90,
      },
      {
        id: 9,
        title: 'Product 9',
        image: 'https://www.quietpc.com/images/products/logitech-b100-large.jpg',
        description: 'This is the description of Product 3.',
        price: 90,
      },
    {
      id: 10,
      title: 'Product 10',
      image: 'https://brain-images-ssl.cdn.dixons.com/2/1/10167312/u_10167312.jpg',
      description: 'This is the description of Product 10.',
      price: 80,
    },
  ];

  return (
    <div style={listStyle}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  padding: '1rem',
  objectFit: 'cover'
};

export default ProductList;