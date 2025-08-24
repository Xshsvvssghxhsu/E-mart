import React from "react";

const HomeOffice = () => {
  const products = [
    {
      id: 1,
      name: "Ergonomic Office Chair",
      price: "$120.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Wooden Study Desk",
      price: "$85.50",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "LED Desk Lamp",
      price: "$25.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Filing Cabinet (3-Drawer)",
      price: "$60.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "Wall Clock",
      price: "$15.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "Book Shelf (5-Tier)",
      price: "$70.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "Office Stationery Set",
      price: "$12.49",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "Wireless Printer",
      price: "$150.00",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 9,
      name: "Whiteboard (Magnetic)",
      price: "$40.99",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 10,
      name: "Laptop Stand",
      price: "$20.99",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Home & Office</h1>
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

export default HomeOffice;
