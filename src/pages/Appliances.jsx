import React from "react";

const Appliances = () => {
  const products = [
    {
      id: 1,
      name: "Samsung 2-Door Refrigerator",
      price: "$899",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "LG Front Load Washing Machine",
      price: "$749",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Panasonic Microwave Oven",
      price: "$199",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Philips Air Fryer",
      price: "$149",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Whirlpool Dishwasher",
      price: "$599",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Sony 65” 4K Smart TV",
      price: "$1,199",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Bosch Coffee Machine",
      price: "$249",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Kenwood Blender",
      price: "$99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Haier Deep Freezer",
      price: "$499",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Midea Portable Air Conditioner",
      price: "$399",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Home Appliances</h1>
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

export default Appliances;
