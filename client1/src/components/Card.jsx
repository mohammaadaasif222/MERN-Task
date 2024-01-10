import { Link } from 'react-router-dom';

export default function Card({ product }) {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.images[0] || 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'}
          alt='product cover'
        />
        <div>
          <p>{product.title}</p>
          <div>
            <p>{product.category}</p>
          </div>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div>
            <div>{product.brand}</div>
            <div>{product.rating}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
