import React from "react";

const Gaming = () => {
  const products = [
    { id: 1, name: "Gaming Laptop", price: "$1200", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Gaming Mouse", price: "$45", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Mechanical Keyboard", price: "$80", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Gaming Headset", price: "$60", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Console Controller", price: "$55", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Gaming Chair", price: "$200", image: "https://via.placeholder.com/200" },
    { id: 7, name: "VR Headset", price: "$350", image: "https://via.placeholder.com/200" },
    { id: 8, name: "Graphics Card", price: "$500", image: "https://via.placeholder.com/200" },
    { id: 9, name: "Gaming Monitor", price: "$300", image: "https://via.placeholder.com/200" },
    { id: 10, name: "RGB Mouse Pad", price: "$25", image: "https://via.placeholder.com/200" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gaming</h1>
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

export default Gaming;
