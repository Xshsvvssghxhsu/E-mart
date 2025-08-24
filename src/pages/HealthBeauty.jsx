import React from "react";

const HealthBeauty = () => {
  const products = [
    {
      id: 1,
      name: "Nivea Body Lotion (400ml)",
      price: "$5.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Colgate Toothpaste (100ml)",
      price: "$2.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Dove Beauty Bar (Pack of 4)",
      price: "$4.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Pantene Shampoo (500ml)",
      price: "$6.50",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Maybelline Mascara",
      price: "$8.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Vaseline Petroleum Jelly (250ml)",
      price: "$3.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Olay Face Cream (50ml)",
      price: "$9.50",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Listerine Mouthwash (500ml)",
      price: "$5.20",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Dettol Antiseptic Liquid (250ml)",
      price: "$4.10",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Oral-B Toothbrush (Pack of 2)",
      price: "$3.99",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Health & Beauty</h1>
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

export default HealthBeauty;
