// Import the necessary modules and components
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from './productdetail'; // You may need to adjust the import path

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query'); // Get the search query from the URL

  // Filter products based on the search query
  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <div className="product-list">
        {searchResults.map(product => (
          <ProductDetail key={product.id} product={product} /> // Render the product detail component for each result
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
