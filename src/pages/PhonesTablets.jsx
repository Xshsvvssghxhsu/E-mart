import React from "react";

const PhonesTablets = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: "$1,099",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: "$1,199",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "iPad Pro 12.9”",
      price: "$1,299",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Lenovo Tab P12",
      price: "$499",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Google Pixel 8 Pro",
      price: "$999",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "OnePlus 11 5G",
      price: "$799",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Xiaomi 13 Ultra",
      price: "$899",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Samsung Galaxy Tab S9 Ultra",
      price: "$1,149",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Huawei MatePad Pro",
      price: "$699",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "iPad Air (5th Gen)",
      price: "$599",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Phones & Tablets</h1>
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

export default PhonesTablets;
