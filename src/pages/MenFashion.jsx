import React from "react";

const MenFashion = () => {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "$25.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: "$30.50",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "$80.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: "$18.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Chinos Pants",
      price: "$35.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Sneakers",
      price: "$50.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Sports Hoodie",
      price: "$40.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Formal Suit",
      price: "$120.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Watch",
      price: "$60.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Leather Belt",
      price: "$15.00",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Men's Fashion</h1>
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

export default MenFashion;
