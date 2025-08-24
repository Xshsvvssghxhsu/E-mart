import React from "react";

const Automobile = () => {
  const products = [
    { id: 1, name: "Car Battery", price: "$120", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Car Seat Cover", price: "$50", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Steering Wheel Cover", price: "$25", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Car Vacuum Cleaner", price: "$70", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Car Floor Mats", price: "$40", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Car Headlights", price: "$90", image: "https://via.placeholder.com/200" },
    { id: 7, name: "Car Engine Oil", price: "$30", image: "https://via.placeholder.com/200" },
    { id: 8, name: "Car GPS Tracker", price: "$60", image: "https://via.placeholder.com/200" },
    { id: 9, name: "Car Air Freshener", price: "$15", image: "https://via.placeholder.com/200" },
    { id: 10, name: "Car Phone Holder", price: "$20", image: "https://via.placeholder.com/200" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Automobile Products</h1>
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

export default Automobile;
