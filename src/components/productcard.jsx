// src/components/ProductCard.jsx
import React from 'react'

const ProductCard = ({ emma }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition">
      <img
        src={emma.image}
        alt={emma.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{emma.name}</h2>
      <p className="text-gray-600 mb-2">${emma.price}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Buy Now
              </button>
              <br />
              <br />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Add to Cart
              </button>

 
    </div>
  )
}

export default ProductCard
