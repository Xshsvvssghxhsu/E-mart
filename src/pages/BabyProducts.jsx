import React from "react";

const BabyProducts = () => {
  const products = [
    { id: 1, name: "Baby Stroller", price: "$150", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Diapers Pack", price: "$30", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Baby Monitor", price: "$70", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Baby Crib", price: "$250", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Baby Bottles Set", price: "$25", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Baby Clothes Pack", price: "$40", image: "https://via.placeholder.com/200" },
    { id: 7, name: "Baby Toys", price: "$20", image: "https://via.placeholder.com/200" },
    { id: 8, name: "Baby Car Seat", price: "$120", image: "https://via.placeholder.com/200" },
    { id: 9, name: "Baby Shampoo & Soap", price: "$15", image: "https://via.placeholder.com/200" },
    { id: 10, name: "Baby Feeding Chair", price: "$60", image: "https://via.placeholder.com/200" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Baby Products</h1>
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

export default BabyProducts;
