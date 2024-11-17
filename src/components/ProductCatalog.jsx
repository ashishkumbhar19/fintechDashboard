import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const ProductCatalog = () => {
  const [data, setData] = useState(null); // Store response data
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load data from JSON files
  useEffect(() => {
    // You can replace this with actual fetching logic
    const fetchData = async () => {
      const response = await fetch('path/to/response1.json'); // Fetch your response1.json or response2.json
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Load the selected category's data (optional)
    console.log('Category selected:', category);
  };

  return (
    <div className="product-catalog">
      <Sidebar data={data} onCategorySelect={handleCategorySelect} />
      {/* Render the selected category data or other components */}
      {selectedCategory && <div>{selectedCategory} selected</div>}
    </div>
  );
};

export default ProductCatalog;
