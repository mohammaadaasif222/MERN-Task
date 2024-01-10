import { Link } from 'react-router-dom';

export default function Card({ product }) {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={product.images[0] || 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'}
          alt='product cover'
        />
      </div>
      <div className="card-content">
        <p className="card-title">{product.title}</p>
        <div className="category">
          <p>{product.category}</p>
        </div>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="additional-info">
          <div className="brand">{product.brand}</div>
          <div className="rating">{product.rating}</div>
        </div>
        <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
      </div>
    </div>
  );
}
