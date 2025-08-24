import React from "react";

const Electronics = () => {
  const products = [
    {
      id: 1,
      name: "Sony PlayStation 5 Console",
      price: "$499",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Xbox Series X Console",
      price: "$499",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Canon EOS M50 Mark II Camera",
      price: "$649",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Apple MacBook Air M2",
      price: "$1,199",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Samsung Galaxy Tab S9",
      price: "$799",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Logitech G Pro Gaming Mouse",
      price: "$129",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Bose Noise Cancelling Headphones 700",
      price: "$379",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Fitbit Charge 6 Fitness Tracker",
      price: "$179",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "GoPro HERO12 Black",
      price: "$399",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Kindle Paperwhite E-Reader",
      price: "$149",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Electronics</h1>
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

export default Electronics;
