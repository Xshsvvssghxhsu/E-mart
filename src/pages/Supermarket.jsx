import React from "react";

const Supermarket = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Bananas (1kg)",
      price: "$2.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Organic Eggs (12 Pack)",
      price: "$4.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Whole Milk (1L)",
      price: "$1.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Brown Bread (Loaf)",
      price: "$1.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Pepsi Soft Drink (2L)",
      price: "$1.59",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Kellogg’s Cornflakes (500g)",
      price: "$3.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Fresh Tomatoes (1kg)",
      price: "$2.29",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Lipton Yellow Label Tea (100 Bags)",
      price: "$5.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Sunflower Cooking Oil (1L)",
      price: "$3.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Frozen Chicken Breast (1kg)",
      price: "$6.49",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Supermarket</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supermarket;
