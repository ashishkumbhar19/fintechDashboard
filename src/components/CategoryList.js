import React from "react";

const CategoryList = ({ categories }) => {
  if (!categories || Object.keys(categories).length === 0) {
    return <p>No categories available.</p>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow">
      {Object.keys(categories).map((mainCategory) => (
        <div key={mainCategory} className="mb-4">
          <h3 className="text-lg font-bold">{mainCategory}</h3>
          <ul className="ml-4">
            {Object.keys(categories[mainCategory] || {}).map((subCategory) => (
              <li key={subCategory} className="list-disc">
                {subCategory}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
