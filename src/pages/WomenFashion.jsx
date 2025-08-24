import React from "react";

const WomenFashion = () => {
  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "$35.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "High-Waist Skinny Jeans",
      price: "$28.50",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Casual Blouse",
      price: "$18.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Leather Handbag",
      price: "$55.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Evening Gown",
      price: "$75.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Ankle Boots",
      price: "$45.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Gold Plated Necklace",
      price: "$20.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Silk Scarf",
      price: "$12.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Denim Jacket",
      price: "$40.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Sportswear Set",
      price: "$30.99",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Women's Fashion</h1>
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

export default WomenFashion;
